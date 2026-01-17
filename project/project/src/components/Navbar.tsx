// import React, { useState, useEffect } from 'react';
// import { Menu, X, BookOpen } from 'lucide-react';
// import { Link } from './Link';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center">
//               <BookOpen className={`h-8 w-8 ${isScrolled ? 'text-indigo-900' : 'text-white'}`} />
//               <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-indigo-900' : 'text-white'}`}>
//                 Learnex
//               </span>
//             </Link>
//           </div>
          
//           {/* Desktop menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link 
//               href="/" 
//               className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                 isScrolled ? 'text-gray-700 hover:text-indigo-900' : 'text-white hover:text-indigo-200'
//               }`}
//             >
//               Home
//             </Link>
//             <Link 
//               href="/features" 
//               className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                 isScrolled ? 'text-gray-700 hover:text-indigo-900' : 'text-white hover:text-indigo-200'
//               }`}
//             >
//               Features
//             </Link>
//             <Link 
//               href="/pricing" 
//               className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                 isScrolled ? 'text-gray-700 hover:text-indigo-900' : 'text-white hover:text-indigo-200'
//               }`}
//             >
//               Pricing
//             </Link>
//             <Link 
//               href="/about" 
//               className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                 isScrolled ? 'text-gray-700 hover:text-indigo-900' : 'text-white hover:text-indigo-200'
//               }`}
//             >
//               About Us
//             </Link>
//             <Link 
//               href="/contact" 
//               className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                 isScrolled ? 'text-gray-700 hover:text-indigo-900' : 'text-white hover:text-indigo-200'
//               }`}
//             >
//               Contact Us
//             </Link>
//           </div>
          
//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className={`inline-flex items-center justify-center p-2 rounded-md ${
//                 isScrolled ? 'text-gray-700 hover:text-indigo-900' : 'text-white hover:text-indigo-200'
//               } focus:outline-none`}
//             >
//               {isOpen ? (
//                 <X className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
//             <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-900">
//               Home
//             </Link>
//             <Link href="/features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-900">
//               Features
//             </Link>
//             <Link href="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-900">
//               Pricing
//             </Link>
//             <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-900">
//               About Us
//             </Link>
//             <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-900">
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, LogOut } from 'lucide-react';
import Link from './Link'; 
import LogoutModal from './LogoutModal'; // Make sure this file exists
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem('token'); // or your auth key
    setShowLogoutModal(false);
    alert('Logout successful!');
    navigate('/'); // Redirect to Learnexxx home
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <BookOpen className={`h-8 w-8 ${isScrolled ? 'text-indigo-900' : 'text-white'}`} />
                <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-indigo-900' : 'text-white'}`}>
                  Learnex
                </span>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['/', '/features', '/pricing', '/about', '/contact'].map((path, i) => (
                <Link 
                  key={i}
                  to={path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-indigo-900' : 'text-white hover:text-indigo-200'
                  }`}
                >
                  {path === '/' ? 'Home' : path.replace('/', '').replace(/^\w/, c => c.toUpperCase()) + (path === '/about' ? ' Us' : '')}
                </Link>
              ))}
              <button
                onClick={handleLogoutClick}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-400'
                }`}
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md ${
                  isScrolled ? 'text-gray-700 hover:text-indigo-900' : 'text-white hover:text-indigo-200'
                } focus:outline-none`}
              >
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {['/', '/features', '/pricing', '/about', '/contact'].map((path, i) => (
                <Link
                  key={i}
                  to={path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-900"
                >
                  {path === '/' ? 'Home' : path.replace('/', '').replace(/^\w/, c => c.toUpperCase()) + (path === '/about' ? ' Us' : '')}
                </Link>
              ))}
              <button
                onClick={handleLogoutClick}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-red-800"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Logout Modal */}
      <LogoutModal 
        show={showLogoutModal}
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
      />
    </>
  );
};

export default Navbar;
