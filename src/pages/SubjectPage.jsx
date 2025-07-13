import { useParams, useNavigate, Link } from 'react-router-dom';
import questionBank from './questionBank'; // Make sure this path is correct
import { FaArrowLeft, FaBook, FaPlayCircle } from 'react-icons/fa';

export default function SubjectPage() {
  const { subjectId } = useParams();
  const navigate = useNavigate();

  // Get subject data directly from the question bank for a more robust setup
  const subject = questionBank[subjectId];

  // --- Graceful Error Handling ---
  // If the subjectId from the URL doesn't exist in our questionBank
  if (!subject) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-3xl font-bold text-red-500">Subject Not Found</h1>
        <p className="text-gray-400 mt-2">The subject you're looking for does not exist.</p>
        <button 
            onClick={() => navigate('/home')} 
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"
        >
          <FaArrowLeft />
          Back to Home
        </button>
      </div>
    );
  }

  // Filter out 'name' and 'description' keys to get an array of just the paper IDs
  const paperIds = Object.keys(subject).filter(
    key => key !== 'name' && key !== 'description'
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* --- Navigation and Header --- */}
        <header className="mb-8">
          <button 
            onClick={() => navigate('/home')} 
            className="flex items-center gap-2 text-cyan-400 hover:underline mb-4 transition-all"
          >
            <FaArrowLeft />
            All Subjects
          </button>
          <div className="flex items-center gap-4 border-b border-gray-700 pb-4">
            <div className="bg-gray-800 p-4 rounded-lg">
                <FaBook className="text-cyan-400 text-3xl"/>
            </div>
            <div>
                <h1 className="text-3xl sm:text-4xl font-bold">{subject.name}</h1>
                <p className="text-md text-gray-400 mt-1">{subject.description}</p>
            </div>
          </div>
        </header>

        {/* --- List of Available Test Papers --- */}
        <main>
          <h2 className="text-2xl font-semibold mb-6">Available Test Papers</h2>
          {paperIds.length > 0 ? (
            <div className="space-y-4">
              {paperIds.map((paperId) => {
                const paperQuestions = subject[paperId] || [];
                return (
                  <Link
                    key={paperId}
                    to={`/test/${subjectId}/paper/${paperId}`}
                    className="group block p-5 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 hover:ring-2 hover:ring-cyan-500 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          Test Paper {paperId.replace('paper', '')}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          {paperQuestions.length} Questions
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-green-400">
                        <span className="font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Start
                        </span>
                        <FaPlayCircle className="text-3xl" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center bg-gray-800 p-8 rounded-lg">
              <p className="text-gray-500 text-lg">
                No test papers are available for this subject yet.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}