import React, { useEffect } from 'react';

function Modal({ onClose, children }) {
  useEffect(() => {
    // Add event listener to close the modal when the user clicks outside of it
    const handleClickOutside = (event) => {
      if (event.target.classList.contains('modal-backdrop')) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 modal-backdrop">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;