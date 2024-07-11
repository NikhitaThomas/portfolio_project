import React from 'react';

function TabButton({ active, selectTab, children }) {
  const buttonClasses = active
    ? 'text-white border-b border-pink-500'
    : 'text-[#ADB7BE]';
  return (
    <button onClick={selectTab} className="">
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
}

export default TabButton;