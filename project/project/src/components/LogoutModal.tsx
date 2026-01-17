import React from 'react';

interface LogoutModalProps {
  show: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ show, onConfirm, onCancel }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm text-center space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Are you sure you want to logout?</h2>
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            onClick={onCancel}
          >
            Of course no
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
