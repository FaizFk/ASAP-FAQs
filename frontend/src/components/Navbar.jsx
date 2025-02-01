import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">
        ASAP-FAQS
      </div>
      <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600">
        Login
      </button>
    </nav>
  );
};

export default Navbar;