import Navbar from '../components/Navbar';
import { ClipboardCheck, BarChart3, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link for the CTA button

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
      {/* Sidebar Navigation */}
      <div>
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Hero Section */}
        <section className="relative bg-gray-900 py-24 sm:py-32 px-6 text-center isolate">
          {/* Glowing background effect */}
          <div
            className="absolute -top-40 -left-40 -z-10 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#0ea5e9] to-[#22d3ee] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
            Master GATE with
            <br />
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Targeted Mock Tests
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Practice with exam-style papers, get instant performance analytics, and conquer your weak areas. Your path to success starts here.
          </p>
          <div className="mt-10">
           <h1 className="text-4xl font-black bg-gradient-to-r from-blue-500 via-blue-300 to-white bg-clip-text text-transparent">
  Start Practicing now
</h1>
     </div>
        </section>

        {/* Features Section */}
        <section className="bg-black py-20 px-6 border-t border-gray-800">
          <div className="max-w-6xl mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="group relative p-8 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-sky-500/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative">
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-700">
                  <ClipboardCheck className="h-8 w-8 text-sky-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">Real GATE-style Papers</h3>
                <p className="text-gray-400">
                  Access over 100+ carefully crafted mock test papers that mirror the real exam pattern and difficulty.
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="group relative p-8 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-sky-500/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative">
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-700">
                  <BarChart3 className="h-8 w-8 text-sky-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">Instant Performance Analytics</h3>
                <p className="text-gray-400">
                  Get immediate, detailed insights into your strengths and weak areas after every mock test.
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="group relative p-8 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-sky-500/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative">
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-700">
                  <GraduationCap className="h-8 w-8 text-sky-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">Subject-wise Mastery</h3>
                <p className="text-gray-400">
                  Choose mock tests for each subject to build a strong foundation and master them one at a time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}