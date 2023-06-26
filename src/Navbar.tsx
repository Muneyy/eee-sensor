import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="h-[10vh] w-full bg-[#DF2060] p-5 m-0 justify-center items-center">
      <div className="h-full flex flex-row gap-20 items-center justify-center">
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          className="text-md text-white hover:underline"
        >
          Home
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate('/About');
          }}
          className="text-md text-white hover:underline"
        >
          About
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate('/Documentation');
          }}
          className="text-md text-white hover:underline"
        >
          Documentation
        </button>
      </div>
    </div>
  );
}
