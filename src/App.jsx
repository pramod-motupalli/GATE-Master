import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import SubjectPage from './pages/SubjectPage'
import PaperPage from './pages/PaperPage'
import PaperTestPage from './pages/PaperTestPage'
import Result from './components/Result'
import SignupPage from './pages/SignupPage'
import Attempted from './pages/Attempted'
import ResetPasswordSimple from './pages/ResetPassword'
import ProtectedLayout from './components/ProtectedLayout'
import ReviewPage from './pages/AttemptedPage'
export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
     <Route path="/signup" element={<SignupPage />} />
     <Route path="/resetpassword" element={<ResetPasswordSimple />} />
      
      {/* All routes below require login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/subject/:subjectId" element={<SubjectPage />} />
        <Route path="/paper/:paperId" element={<PaperPage />} />
        <Route path="/result/:resultId" element={<Result />} />
        <Route path="/test/:subjectId/paper/:paperId" element={<PaperTestPage />} />
        <Route path="/attempted" element={<Attempted />} />
        <Route path="/subjects/:subjectId/:paperId" element={<ReviewPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
