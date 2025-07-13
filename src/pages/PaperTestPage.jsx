import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import questionBank from './questionBank'; // Ensure this path is correct

// --- API Helper Functions (Simulated) ---
// In a real app, you'd implement these endpoints on your server.

/**
 * Simulates fetching an existing test session.
 * In a real backend, this would check a database for an active, unsubmitted attempt
 * for the given user and test.
 */
const fetchTestSession = async (subjectId, paperId, token) => {
  // SIMULATION LOGIC: We'll use sessionStorage for this demo to simulate a server session
  // that persists across refreshes but is cleared when the tab closes.
  // In your REAL app, this would be a `axios.get` call.
  const sessionKey = `test_session_${subjectId}_${paperId}`;
  const savedSession = sessionStorage.getItem(sessionKey);

  if (savedSession) {
    console.log("Found existing session in sessionStorage (simulation).");
    return JSON.parse(savedSession);
  }

  // If you had a real endpoint:
  // const response = await axios.get(`http://localhost:5000/api/attempts/session/${subjectId}/${paperId}`, {
  //   headers: { 'Authorization': `Bearer ${token}` }
  // });
  // return response.data; // e.g., { startTime: number, responses: {} }

  return null; // No active session found
};


/**
 * Simulates starting a new test session.
 * In a real backend, this would create a new attempt record with a server-side timestamp.
 */
const startTestSession = async (subjectId, paperId, token) => {
  // SIMULATION LOGIC:
  const sessionData = {
    startTime: Date.now(),
    responses: {}, // Start with empty responses
  };
  const sessionKey = `test_session_${subjectId}_${paperId}`;
  sessionStorage.setItem(sessionKey, JSON.stringify(sessionData));
  console.log("Started and saved a new session in sessionStorage (simulation).");
  return sessionData;

  // If you had a real endpoint:
  // const response = await axios.post('http://localhost:5000/api/attempts/start', { subjectId, paperId }, {
  //   headers: { 'Authorization': `Bearer ${token}` }
  // });
  // return response.data; // e.g., { startTime: number, responses: {} }
};


// --- The Main Component ---
export default function PaperTestPage() {
  const { subjectId, paperId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // --- State Management ---
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [visited, setVisited] = useState(new Set([0])); // Track visited questions for the palette
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes, default
  const [isLoading, setIsLoading] = useState(true); // For initial session loading

  const responsesRef = useRef(responses);
  responsesRef.current = responses;

  const questions = questionBank[subjectId]?.[paperId] || [];
  const isReviewMode = !!location.state?.reviewData;

  // --- Core Logic: Session and Timer Management ---
  const handleSubmit = useCallback(async (isAutoSubmit = false) => {
    if (!isAutoSubmit && !window.confirm("Are you sure you want to submit the test?")) {
      return;
    }

    let finalScore = 0;
    const finalResponses = responsesRef.current;
    questions.forEach((q) => {
      const userAnswer = finalResponses[q.id];
      const correctAnswer = q.answer;
      let isCorrect = false;

      if (q.type === 'msq') {
        const userAnswerSorted = Array.isArray(userAnswer) ? [...userAnswer].sort() : [];
        const correctAnswerSorted = [...correctAnswer].sort();
        isCorrect = userAnswerSorted.length === correctAnswerSorted.length && userAnswerSorted.every((val, index) => val === correctAnswerSorted[index]);
      } else {
        isCorrect = userAnswer === correctAnswer;
      }
      if (isCorrect) finalScore++;
    });

    const attemptData = { subjectId, paperId, score: finalScore, totalQuestions: questions.length, responses: finalResponses };

    try {
      const token = localStorage.getItem('gateauthtoken');
      if (!token) {
        alert('You are not logged in. Redirecting to login page.');
        navigate('/login');
        return;
      }

      await axios.post('http://localhost:5000/api/attempts', attemptData, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      // Clear the simulated session on successful submission
      sessionStorage.removeItem(`test_session_${subjectId}_${paperId}`);

      setScore(finalScore);
      setShowScore(true);
    } catch (error) {
      console.error('Failed to save the attempt:', error);
      alert('There was an error saving your results. Please check your connection and try again.');
    }
  }, [questions, subjectId, paperId, navigate]);


  // Effect for initializing the test session and timer
  useEffect(() => {
    if (isReviewMode) {
      const { reviewData } = location.state;
      setResponses(Object.fromEntries(new Map(Object.entries(reviewData.responses))));
      setScore(reviewData.score);
      setShowScore(true);
      setIsLoading(false);
      return;
    }

    const initializeSession = async () => {
      const token = localStorage.getItem('gateauthtoken');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        let session = await fetchTestSession(subjectId, paperId, token);
        if (!session) {
          session = await startTestSession(subjectId, paperId, token);
        }
        
        const { startTime, responses: savedResponses } = session;
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const remaining = 1800 - elapsed;

        if (remaining <= 0) {
          handleSubmit(true); // Auto-submit if time is already over
        } else {
          setTimeLeft(remaining);
          setResponses(savedResponses || {});
        }
      } catch (error) {
        console.error("Failed to initialize test session:", error);
        alert("Could not start or resume the test. Please try again.");
        navigate(-1);
      } finally {
        setIsLoading(false);
      }
    };
    
    initializeSession();
  }, [isReviewMode, subjectId, paperId, navigate, location.state, handleSubmit]);

  // Effect for the countdown timer
  useEffect(() => {
    if (isLoading || isReviewMode || showScore) return;

    const timerInterval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timerInterval);
          handleSubmit(true); // Auto-submit when time runs out
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [isLoading, isReviewMode, showScore, handleSubmit]);


  // --- Helper & Navigation Functions ---
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      const newIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(newIndex);
      setVisited(prev => new Set(prev).add(newIndex));
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handlePaletteClick = (index) => {
    setCurrentQuestionIndex(index);
    setVisited(prev => new Set(prev).add(index));
  };
  
  const handleOptionChange = (e) => {
    const { value, checked } = e.target;
    const questionId = questions[currentQuestionIndex].id;
    setResponses((prev) => {
      if (questions[currentQuestionIndex].type === 'msq') {
        const prevResponse = prev[questionId] || [];
        if (checked) {
          return { ...prev, [questionId]: [...prevResponse, value] };
        } else {
          return { ...prev, [questionId]: prevResponse.filter((v) => v !== value) };
        }
      } else {
        return { ...prev, [questionId]: value };
      }
    });
  };

  const handleInputChange = (e) => {
    const questionId = questions[currentQuestionIndex].id;
    setResponses((prev) => ({ ...prev, [questionId]: e.target.value }));
  };
  
  const getQuestionStatus = (index) => {
    const questionId = questions[index].id;
    const response = responses[questionId];
    const isAnswered = Array.isArray(response) ? response.length > 0 : !!response;
    
    if (currentQuestionIndex === index) return 'bg-purple-600 text-white'; // Current
    if (isAnswered) return 'bg-green-600 text-white'; // Answered
    if (visited.has(index)) return 'bg-red-600 text-white'; // Not Answered (but visited)
    return 'bg-gray-700 hover:bg-gray-600'; // Not Visited
  };

  // --- RENDER LOGIC ---

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white text-xl">Loading Test...</div>;
  }

  if (questions.length === 0 && !isReviewMode) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">...</div>; // Simplified empty state
  }
  
  // --- SCORE/REVIEW SCREEN ---
  if (showScore) {
    const total = isReviewMode ? location.state.reviewData.totalQuestions : questions.length;
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    const radius = 60, stroke = 12;
    const normalizedRadius = radius - stroke * 0.5;
    const circumference = 2 * Math.PI * normalizedRadius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    const formatAnswerForDisplay = (answer) => {
      if (!answer || (Array.isArray(answer) && answer.length === 0)) return <span className="italic text-gray-500">Not Answered</span>;
      return Array.isArray(answer) ? answer.sort().join(', ') : answer;
    };

    return (
      <div className="bg-gray-900 text-white min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8 p-6 bg-gray-800 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-cyan-400">{isReviewMode ? 'Test Review' : 'Test Completed!'}</h1>
            <p className="text-gray-300 mt-2">Here's a summary of your performance.</p>
          </header>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-1 flex flex-col items-center justify-center bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="relative w-40 h-40">
                <svg className="transform -rotate-90" width="100%" height="100%" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r={normalizedRadius} stroke="#374151" strokeWidth={stroke} fill="transparent" />
                  <circle cx="60" cy="60" r={normalizedRadius} stroke={percentage >= 80 ? '#22c55e' : percentage >= 50 ? '#eab308' : '#ef4444'} strokeWidth={stroke} strokeLinecap="round" fill="transparent" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} style={{ transition: 'stroke-dashoffset 0.8s ease-out' }}/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">{percentage}%</div>
              </div>
              <p className="text-2xl mt-4 font-semibold">Score: {score} / {total}</p>
            </div>
            
            <div className="md:col-span-2 grid grid-cols-2 gap-4 text-center">
              {[
                { label: 'Correct', value: score, color: 'text-green-400' },
                { label: 'Incorrect', value: Object.keys(responses).length - score, color: 'text-red-400' },
                { label: 'Attempted', value: Object.keys(responses).length, color: 'text-blue-400' },
                { label: 'Unattempted', value: total - Object.keys(responses).length, color: 'text-gray-400' },
              ].map(item => (
                <div key={item.label} className="bg-gray-800 p-4 rounded-lg flex flex-col justify-center shadow-lg">
                  <p className="text-3xl font-bold">{item.value}</p>
                  <p className={`text-sm font-semibold ${item.color}`}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            {questions.map((q, i) => {
              const userAnswer = responses[q.id];
              let isCorrect = false;
              if (q.type === 'msq') {
                 const userAnswerSorted = Array.isArray(userAnswer) ? [...userAnswer].sort() : [];
                 const correctAnswerSorted = [...q.answer].sort();
                 isCorrect = userAnswerSorted.length === correctAnswerSorted.length && userAnswerSorted.every((val, i) => val === correctAnswerSorted[i]);
              } else {
                 isCorrect = userAnswer === q.answer;
              }
              
              return (
                <div key={q.id} className={`p-4 rounded-lg border-l-4 ${isCorrect ? 'border-green-500' : 'border-red-500'} bg-gray-800`}>
                  <p className="font-semibold mb-3 text-gray-200">Q{i + 1}: {q.question}</p>
                  <p className={`mb-1 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                    <span className="font-bold">Your Answer:</span> {formatAnswerForDisplay(userAnswer)}
                  </p>
                  {!isCorrect && (
                    <p className="text-green-400"><span className="font-bold">Correct Answer:</span> {formatAnswerForDisplay(q.answer)}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <button onClick={() => navigate('/attempted')} className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold text-lg">
              {isReviewMode ? 'Back to Attempts' : 'View All Attempts'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- ACTIVE TEST SCREEN ---
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Question Panel */}
        <div className="lg:col-span-2 bg-gray-800 p-6 rounded-xl shadow-2xl">
          <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
            <h2 className="text-xl font-semibold text-cyan-400">Question {currentQuestionIndex + 1}</h2>
            <div className="flex items-center gap-2 text-xl font-mono bg-red-500/20 border border-red-500 text-red-300 px-4 py-1 rounded-md">
              <span>⏳</span>
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
          
          <p className="mb-6 text-lg text-gray-200 min-h-[60px]">{currentQuestion.question}</p>

          <div className="space-y-3">
            {currentQuestion.type === 'mcq' && currentQuestion.options.map((option, i) => (
              <label key={i} className="flex items-center p-4 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-700 border-2 border-transparent has-[:checked]:border-cyan-500 transition-all">
                <input type="radio" name={currentQuestion.id} value={option} checked={responses[currentQuestion.id] === option} onChange={handleOptionChange} className="w-5 h-5 text-cyan-600 bg-gray-700 border-gray-600 focus:ring-cyan-500" />
                <span className="ml-4 text-gray-300">{option}</span>
              </label>
            ))}
            {currentQuestion.type === 'msq' && currentQuestion.options.map((option, i) => (
               <label key={i} className="flex items-center p-4 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-700 border-2 border-transparent has-[:checked]:border-cyan-500 transition-all">
                <input type="checkbox" name={currentQuestion.id} value={option} checked={responses[currentQuestion.id]?.includes(option) || false} onChange={handleOptionChange} className="w-5 h-5 text-cyan-600 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500" />
                <span className="ml-4 text-gray-300">{option}</span>
              </label>
            ))}
            {currentQuestion.type === 'nat' && (
              <input type="text" value={responses[currentQuestion.id] || ''} onChange={handleInputChange} className="border p-3 w-full bg-gray-700 border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-lg" placeholder="Enter numerical answer..." />
            )}
          </div>
        </div>

        {/* Sidebar Panel */}
        <div className="lg:col-span-1 bg-gray-800 p-6 rounded-xl shadow-2xl flex flex-col">
          <div className="border-b border-gray-700 pb-4 mb-4">
            <h3 className="text-lg font-bold text-white text-center">GATE Paper: {subjectId.toUpperCase()}</h3>
            <p className="text-sm text-gray-400 text-center">Paper ID: {paperId}</p>
          </div>

          <div className="flex-grow">
            <h4 className="text-md font-semibold text-gray-300 mb-3 text-center">Question Palette</h4>
            <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-2">
              {questions.map((_, index) => (
                <button key={index} onClick={() => handlePaletteClick(index)} className={`flex items-center justify-center h-10 w-10 rounded-md font-bold text-sm transition-all ${getQuestionStatus(index)}`}>
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-6 space-y-3">
             <div className="flex justify-between">
              <button onClick={handleBack} disabled={currentQuestionIndex === 0} className="w-full mr-2 bg-gray-600 hover:bg-gray-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-white px-5 py-3 rounded-lg font-semibold transition-colors">Back</button>
              <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1} className="w-full ml-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800/50 disabled:cursor-not-allowed text-white px-5 py-3 rounded-lg font-semibold transition-colors">Next</button>
            </div>
            <button onClick={() => handleSubmit(false)} className="w-full bg-green-700 hover:bg-green-600 text-white px-5 py-3 rounded-lg font-bold text-lg transition-colors">
              Submit Test
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}