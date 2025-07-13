import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import { useEffect, useState } from 'react'

export default function Result() {
  const { resultId } = useParams()
  const [result, setResult] = useState(null)


  if (!result) return <div>Loading...</div>

  return (
    <div className="flex">
      <Navbar />
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold mb-4">Your Score</h2> 
        <p className="mb-2">Marks Obtained: <strong>{result.score}</strong></p>
        <p>Accuracy: <strong>{(result.accuracy * 100).toFixed(2)}%</strong></p>
      </main>
    </div>
  )
}
