import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaHistory, FaBookOpen, FaChevronRight, FaRegSadTear, FaExclamationTriangle } from 'react-icons/fa';
import questionBank from './questionBank';

// --- Reusable Helper Components for different states ---

const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center h-64 text-gray-400">
        <svg className="animate-spin h-10 w-10 mb-4 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="text-lg">Loading Your Attempts...</p>
    </div>
);

const ErrorDisplay = ({ error, onRetry }) => (
    <div className="flex flex-col items-center justify-center h-64 text-center bg-gray-800 p-8 rounded-xl">
        <FaExclamationTriangle className="text-5xl text-red-500 mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-2">An Error Occurred</h3>
        <p className="text-gray-400 mb-6">{error}</p>
        <button 
            onClick={onRetry}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105"
        >
            Retry
        </button>
    </div>
);

const NoAttempts = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center h-64 text-center bg-gray-800 p-8 rounded-xl">
            <FaRegSadTear className="text-5xl text-gray-500 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">No Attempts Found</h3>
            <p className="text-gray-400 mb-6">You haven't completed any tests yet. Let's change that!</p>
            <button 
                onClick={() => navigate('/home')}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105"
            >
                Find a Test
            </button>
        </div>
    );
};


export default function Attempted() {
    const [attempts, setAttempts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchAttempts = async () => {
        setLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem('gateauthtoken');
            if (!token) {
                setError('You are not logged in. Redirecting...');
                setTimeout(() => navigate('/login'), 2000);
                return;
            }

            const response = await axios.get('http://localhost:5000/api/attempts', {
                headers: { Authorization: `Bearer ${token}` },
            });
            
            setAttempts(response.data);
        } catch (err) {
            console.error('Error fetching attempts:', err);
            setError('Failed to load your attempts. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAttempts();
    }, []); // Removed navigate from dependencies as it's stable and we only want to fetch once on mount

    const renderContent = () => {
        if (loading) {
            return <LoadingSpinner />;
        }
        if (error) {
            return <ErrorDisplay error={error} onRetry={fetchAttempts} />;
        }
        if (attempts.length === 0) {
            return <NoAttempts />;
        }
        return (
            <div className="space-y-5">
                {attempts.map((attempt) => {
                    const subjectName = questionBank[attempt.subjectId]?.name || attempt.subjectId;
                    const percentage = Math.round((attempt.score / attempt.totalQuestions) * 100);
                    const radius = 28;
                    const stroke = 5;
                    const normalizedRadius = radius - stroke * 0.5;
                    const circumference = 2 * Math.PI * normalizedRadius;
                    const strokeDashoffset = circumference - (percentage / 100) * circumference;
                    const scoreColor = percentage >= 80 ? 'stroke-green-500' : percentage >= 50 ? 'stroke-yellow-500' : 'stroke-red-500';

                    return (
                        <div key={attempt._id} className="bg-gray-800 p-5 rounded-lg shadow-lg flex items-center justify-between transition-all hover:shadow-cyan-500/10 hover:ring-1 hover:ring-gray-700">
                            {/* Left Side: Info */}
                            <div className="flex items-center gap-4">
                                <div className="hidden sm:block p-3 bg-gray-900 rounded-full">
                                    <FaBookOpen className="text-cyan-400 text-2xl" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-white">{subjectName}</h2>
                                    <p className="text-sm text-gray-400">
                                        Paper {attempt.paperId} • Completed on: {new Date(attempt.completedAt).toLocaleDateString()}
                                    </p>
                                    <p className="sm:hidden text-lg font-semibold mt-2 text-cyan-400">
                                        Score: {attempt.score}/{attempt.totalQuestions}
                                    </p>
                                </div>
                            </div>

                            {/* Right Side: Score and Action */}
                            <div className="flex items-center gap-4 sm:gap-6">
                                <div className="hidden sm:flex items-center gap-4">
                                    <p className="text-lg font-bold text-white">
                                        {attempt.score}/{attempt.totalQuestions}
                                    </p>
                                    {/* SVG Progress Circle */}
                                    <div className="relative h-16 w-16">
                                        <svg className="transform -rotate-90" width="100%" height="100%" viewBox="0 0 60 60">
                                            <circle cx="30" cy="30" r={normalizedRadius} strokeWidth={stroke} fill="transparent" className="stroke-gray-700" />
                                            <circle cx="30" cy="30" r={normalizedRadius} strokeWidth={stroke} fill="transparent" className={`${scoreColor} transition-all duration-1000`} strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
                                            {percentage}%
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    to={`/subjects/${attempt.subjectId}/${attempt.paperId}`}
                                    state={{ reviewData: attempt }}
                                    className="flex items-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
                                >
                                    <span className="hidden md:inline mr-2">Review</span>
                                    <FaChevronRight />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
                <header className="flex items-center gap-4 mb-8 border-b-2 border-gray-700 pb-4">
                    <FaHistory className="text-4xl text-cyan-400" />
                    <div>
                        <h1 className="text-3xl font-bold">My Attempts</h1>
                        <p className="text-gray-400">Review your past performance and track your progress.</p>
                    </div>
                </header>

                <main>
                    {renderContent()}
                </main>

                <div className="text-center mt-10">
                    <button onClick={() => navigate('/home')} className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold">
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}