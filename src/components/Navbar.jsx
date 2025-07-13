import { NavLink, useNavigate } from 'react-router-dom';
import { 
  BookOpenText, 
  Menu, 
  X,
  BarChart3, 
  LogOut,
  Sigma,
  Cpu,
  HardDrive,
  Database,
  Cloud,
  Braces,
  CircuitBoard,
  ServerCog,
  PanelTopClose,
  Code2
} from 'lucide-react';
import { useState } from 'react';

// Subjects and their corresponding icons
const subjects = [
  { name: 'Mathematics', icon: Sigma },
  { name: 'CD', icon: Cpu },
  { name: 'COA', icon: HardDrive },
  { name: 'OS', icon: ServerCog },
  { name: 'DBMS', icon: Database },
  { name: 'CN', icon: Cloud },
  { name: 'TOC', icon: Braces },
  { name: 'DLD', icon: CircuitBoard },
  { name: 'DS & C', icon: PanelTopClose },
  { name: 'ALGORITHMS', icon: Code2 }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('gateauthtoken');
    navigate('/login');
  };

  const activeLinkStyle = 'bg-gray-800 text-white border-l-4 border-sky-400 font-semibold';
  const inactiveLinkStyle = 'text-gray-400 hover:bg-gray-800 hover:text-white border-l-4 border-transparent';
  const linkBaseStyle = 'flex items-center px-4 py-3 transition-all duration-200';

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800/50 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-40 bg-black border-r border-gray-800 w-72 p-4 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:static flex flex-col`}
      >
        {/* Logo/Header */}
        <div className="flex items-center gap-3 mb-8 px-2">
          <BookOpenText className="w-8 h-8 text-sky-400" />
          <h1 className="text-2xl font-bold text-white tracking-wide">GATE Master</h1>
        </div>

        {/* Subject Navigation */}
        <nav className="flex-grow overflow-y-auto">
          <ul className="space-y-1">
            {subjects.map(({ name, icon: Icon }, idx) => (
              <li key={idx}>
                <NavLink
                  to={`/subject/${idx + 1}`}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `${linkBaseStyle} ${isActive ? activeLinkStyle : inactiveLinkStyle}`
                  }
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <span className="text-base">{name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Actions */}
        <div className="mt-auto pt-4 border-t border-gray-800">
          <ul className="space-y-1">
            <li>
              <NavLink
                to="/attempted"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${linkBaseStyle} ${isActive ? activeLinkStyle : inactiveLinkStyle}`
                }
              >
                <BarChart3 className="w-5 h-5 mr-3" />
                <span className="text-base">My Attempts</span>
              </NavLink>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className={`${linkBaseStyle} w-full`}
              >
                <LogOut className="w-5 h-5 mr-3" />
                <span className="text-base">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Backdrop for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
