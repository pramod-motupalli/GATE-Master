import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import questionBank from "./questionBank"; // To get the questions
import { FaArrowLeft, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// Helper function to format answers for display (handles arrays, nulls, etc.)
const formatAnswerForDisplay = (answer) => {
    if (!answer || (Array.isArray(answer) && answer.length === 0)) {
        return <span className="italic text-gray-500">Not Answered</span>;
    }
    return Array.isArray(answer) ? answer.sort().join(", ") : answer;
};

export default function ReviewPage() {
    const { subjectId, paperId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // The entire 'attempt' object is passed via state from the Link component
    const reviewData = location.state?.reviewData;

    // --- Data Validation ---
    if (!reviewData) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
                <h1 className="text-2xl font-bold text-red-500">
                    No Review Data Found
                </h1>
                <p className="text-gray-400 mt-2">
                    Please access this page by clicking on an attempt from your
                    history.
                </p>
                <Link
                    to="/attempted"
                    className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                    Go to My Attempts
                </Link>
            </div>
        );
    }

    // Get the questions for this specific test from your local question bank
    const questions = questionBank[subjectId]?.[paperId] || [];
    const { score, totalQuestions, responses } = reviewData;
    const percentage =
        totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

    const attemptedCount = Object.keys(responses).length;
    const incorrectCount = attemptedCount - score;
    const unattemptedCount = totalQuestions - attemptedCount;

    return (
        <div className="bg-gray-900 text-white min-h-screen p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                {/* --- Header and Back Button --- */}
                <header className="mb-8">
                    <button
                        onClick={() => navigate("/attempted")}
                        className="flex items-center gap-2 text-cyan-400 hover:underline mb-4"
                    >
                        <FaArrowLeft />
                        Back to My Attempts
                    </button>
                    <h1 className="text-3xl sm:text-4xl font-bold">
                        Review: {questionBank[subjectId]?.name || subjectId} -
                        Paper {paperId}
                    </h1>
                </header>

                {/* --- Summary Cards --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-center">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-3xl font-bold text-cyan-400">
                            {score}/{totalQuestions}
                        </p>
                        <p className="text-sm font-semibold text-gray-400">
                            Score
                        </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-3xl font-bold text-green-500">
                            {score}
                        </p>
                        <p className="text-sm font-semibold text-gray-400">
                            Correct
                        </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-3xl font-bold text-red-500">
                            {incorrectCount}
                        </p>
                        <p className="text-sm font-semibold text-gray-400">
                            Incorrect
                        </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-3xl font-bold text-gray-500">
                            {unattemptedCount}
                        </p>
                        <p className="text-sm font-semibold text-gray-400">
                            Unattempted
                        </p>
                    </div>
                </div>

                {/* --- Detailed Question Review --- */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
                        Detailed Analysis
                    </h2>
                    {questions.map((question, index) => {
                        const userAnswer = responses[question.id];
                        const correctAnswer = question.answer;

                        // Determine if the user's answer was correct
                        let isCorrect = false;
                        if (question.type === "msq") {
                            const userAnswerSorted = Array.isArray(userAnswer)
                                ? [...userAnswer].sort()
                                : [];
                            const correctAnswerSorted = [
                                ...correctAnswer,
                            ].sort();
                            isCorrect =
                                userAnswerSorted.length ===
                                    correctAnswerSorted.length &&
                                userAnswerSorted.every(
                                    (val, i) => val === correctAnswerSorted[i]
                                );
                        } else {
                            isCorrect = userAnswer === correctAnswer;
                        }

                        return (
                            <div
                                key={question.id}
                                className={`p-4 rounded-lg border-l-4 ${
                                    isCorrect
                                        ? "border-green-500"
                                        : "border-red-500"
                                } bg-gray-800`}
                            >
                                <div className="flex justify-between items-start">
                                    <p className="font-semibold mb-3 text-gray-200">
                                        Q{index + 1}: {question.question}
                                    </p>
                                    {isCorrect ? (
                                        <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0 ml-4" />
                                    ) : (
                                        <FaTimesCircle className="text-red-500 text-2xl flex-shrink-0 ml-4" />
                                    )}
                                </div>
                                <div className="pl-4 border-l-2 border-gray-700 space-y-2">
                                    <p
                                        className={`${
                                            isCorrect
                                                ? "text-green-400"
                                                : "text-red-400"
                                        }`}
                                    >
                                        <span className="font-bold">
                                            Your Answer:
                                        </span>{" "}
                                        {formatAnswerForDisplay(userAnswer)}
                                    </p>
                                    {!isCorrect && (
                                        <p className="text-green-400">
                                            <span className="font-bold">
                                                Correct Answer:
                                            </span>{" "}
                                            {formatAnswerForDisplay(
                                                correctAnswer
                                            )}
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
