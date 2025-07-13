import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function PaperPage() {
    const { paperId } = useParams();
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/api/papers/${paperId}/`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("authToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setQuestions(data.questions));
    }, [paperId]);

    const handleChange = (qid, choice) => {
        setAnswers((prev) => ({ ...prev, [qid]: choice }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`/api/papers/${paperId}/submit/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${localStorage.getItem("authToken")}`,
            },
            body: JSON.stringify({ answers }),
        });
        if (res.ok) {
            const { resultId } = await res.json();
            navigate(`/result/${resultId}`);
        }
    };

    return (
        <div className="flex">
            <Navbar />
            <main className="flex-1 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {questions.map((q) => (
                        <fieldset key={q.id} className="border p-4 rounded">
                            <legend className="font-semibold mb-2">
                                {q.text}
                            </legend>
                            {q.options.map((opt) => (
                                <label key={opt} className="block">
                                    <input
                                        type="radio"
                                        name={`q_${q.id}`}
                                        value={opt}
                                        checked={answers[q.id] === opt}
                                        onChange={() => handleChange(q.id, opt)}
                                        className="mr-2"
                                    />
                                    {opt}
                                </label>
                            ))}
                        </fieldset>
                    ))}
                    <button
                        type="submit"
                        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                    >
                        Submit
                    </button>
                </form>
            </main>
        </div>
    );
}
