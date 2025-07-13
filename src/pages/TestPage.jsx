import { useParams, Link } from 'react-router-dom';

export default function TestPage() {
  const { subjectId } = useParams();

  const subjects = [
    'Mathematics',
    'CD',
    'COA',
    'OS',
    'DBMS',
    'CN',
    'TOC',
    'DLD',
    'DS & C',
    'ALGORITHMS',
  ];

  const subjectIndex = parseInt(subjectId, 10) - 1;
  const subjectName = subjects[subjectIndex] || 'Unknown Subject';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
      <h2 className="text-3xl font-bold text-white mb-6">
        {subjectName} - Test Papers
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {Array.from({ length: 10 }, (_, i) => (
          <Link
            key={i}
            to={`/test/${subjectId}/paper/${i + 1}`}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition duration-200 text-center"
          >
            Paper {i + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}
