import React from 'react';

function ProjectTag({ name, onClick, isSelected }) {
  const buttonStyles = isSelected
    ? 'text-white border-pink-500'
    : 'text-[#ADB7BE] border-slate-600 hover:border-white';
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 text-xl py-3`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}

export default ProjectTag;
