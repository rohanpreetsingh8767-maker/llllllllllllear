// import React from 'react';
// import { Link, useLocation, Outlet } from 'react-router-dom';
// import { 
//   LayoutDashboard, 
//   FileText, 
//   ClipboardList, 
//   FileCheck, 
//   MessageSquare, 
//   User, 
//   LogOut,
//   Users,
//   Settings,
//   Bell,
//   Menu,
//   X
// } from 'lucide-react';

// const TeacherLayout = () => {
//   const location = useLocation();
//   const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  
//   const navItems = [
//     { name: 'Dashboard', path: '/teacher/dashboard', icon: LayoutDashboard },
//     { name: 'Create Exam', path: '/teacher/create-exam', icon: FileCheck },
//     { name: 'My Exams', path: '/teacher/my-exams', icon: ClipboardList },
//     { name: 'Upload Notes', path: '/teacher/upload-notes', icon: FileText },
//     { name: 'Quiz Review', path: '/teacher/quiz-review', icon: MessageSquare },
//     { name: 'Group Study', path: '/teacher/group-study', icon: Users },
//     { name: 'Announcements', path: '/teacher/announcements', icon: Bell },
//     { name: 'Profile', path: '/teacher/profile', icon: User },
//     { name: 'Settings', path: '/teacher/settings', icon: Settings },
//   ];

//   const isActive = (path: string) => {
//     return location.pathname === path;
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Mobile Overlay */}
//       {isSidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={closeSidebar}
//         />
//       )}

//       {/* Sidebar */}
//       <div className={`fixed left-0 top-0 h-screen w-64 bg-[#14213D] text-white p-6 overflow-y-auto z-50 transform transition-transform duration-300 ease-in-out ${
//         isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//       } lg:translate-x-0`}>
//         {/* Close button for mobile */}
//         <button
//           onClick={closeSidebar}
//           className="absolute top-4 right-4 p-2 rounded-lg hover:bg-blue-800 transition-colors lg:hidden"
//         >
//           <X size={20} />
//         </button>

//         <div className="mb-8">
//           <h1 className="text-2xl font-bold">Learnex</h1>
//           <p className="text-blue-200 text-sm">Teacher Portal</p>
//         </div>
        
//         <nav className="space-y-2">
//           {navItems.map((item) => {
//             const IconComponent = item.icon;
//             return (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 onClick={closeSidebar}
//                 className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
//                   isActive(item.path)
//                     ? 'bg-blue-600 text-white'
//                     : 'text-blue-200 hover:bg-blue-800 hover:text-white'
//                 }`}
//               >
//                 <IconComponent size={20} />
//                 <span>{item.name}</span>
//               </Link>
//             );
//           })}
          
//           <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-200 hover:bg-red-600 hover:text-white transition-colors w-full mt-8">
//             <LogOut size={20} />
//             <span>Logout</span>
//           </button>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 lg:ml-64">
//         {/* Mobile Header with Hamburger */}
//         <div className="lg:hidden bg-white shadow-sm p-4 flex items-center justify-between">
//           <button
//             onClick={toggleSidebar}
//             className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
//           >
//             <Menu size={24} className="text-[#14213D]" />
//           </button>
//           <div className="flex items-center space-x-2">
//             <h1 className="text-xl font-bold text-[#14213D]">Learnex</h1>
//             <span className="text-sm text-gray-600">Teacher Portal</span>
//           </div>
//           <div className="w-10"></div> {/* Spacer for centering */}
//         </div>

//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default TeacherLayout;

import React from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  ClipboardList, 
  FileCheck, 
  MessageSquare, 
  User, 
  LogOut,
  Users,
  Settings,
  Bell,
  Menu,
  X
} from 'lucide-react';

const TeacherLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/teacher/dashboard', icon: LayoutDashboard },
    { name: 'Create Exam', path: '/teacher/create-exam', icon: FileCheck },
    { name: 'My Exams', path: '/teacher/my-exams', icon: ClipboardList },
    { name: 'Upload Notes', path: '/teacher/upload-notes', icon: FileText },
    { name: 'Quiz Review', path: '/teacher/quiz-review', icon: MessageSquare },
    { name: 'Group Study', path: '/teacher/group-study', icon: Users },
    { name: 'Announcements', path: '/teacher/announcements', icon: Bell },
    { name: 'Profile', path: '/teacher/profile', icon: User },
    { name: 'Settings', path: '/teacher/settings', icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleLogout = () => setShowLogoutModal(true);
  const confirmLogout = () => {
    setShowLogoutModal(false);
    alert('Logout successful');
    navigate('/');
  };
  const cancelLogout = () => setShowLogoutModal(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-screen w-64 bg-[#14213D] text-white p-6 overflow-y-auto z-50 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        {/* Mobile Close */}
        <button
          onClick={closeSidebar}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-blue-800 transition-colors lg:hidden"
        >
          <X size={20} />
        </button>

        <div className="mb-8">
          <h1 className="text-2xl font-bold">Learnex</h1>
          <p className="text-blue-200 text-sm">Teacher Portal</p>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeSidebar}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-blue-600 text-white'
                    : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                }`}
              >
                <IconComponent size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}

          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-200 hover:bg-red-600 hover:text-white transition-colors w-full mt-8"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white shadow-sm p-4 flex items-center justify-between">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu size={24} className="text-[#14213D]" />
          </button>
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-[#14213D]">Learnex</h1>
            <span className="text-sm text-gray-600">Teacher Portal</span>
          </div>
          <div className="w-10"></div>
        </div>

        <Outlet />
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Are you sure you want to logout?</h2>
            <div className="flex justify-center space-x-4">
              <button
                onClick={confirmLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Yes
              </button>
              <button
                onClick={cancelLogout}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg"
              >
                Of course no
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherLayout;
