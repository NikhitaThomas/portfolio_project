import React from 'react';

function Navbar() {
  return (
    <div className="flex justify-between px-10 py-3 bg-pink-800 text-white">
      <a href="#main" className="text-xl font-semibold">
        Nikita Thomas
      </a>
      <div className="flex gap-10">
        <a href="#about" className="hover:text-pink-800">
          #About
        </a>
        <a href="#projects" className="hover:text-pink-800">
          #Projects
        </a>
      </div>
    </div>
  );
}

export default Navbar;
