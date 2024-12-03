'use client';

import "@theme-toggles/react/css/Expand.css"
import { Expand } from "@theme-toggles/react"

export default function ThemeToggle() {
  const toggleTheme = () => {
    document.body.classList.toggle('dark');
    //document.documentElement.classList.toggle('dark');
  };

  return (
    <div onClick={toggleTheme} className="ring-black w-12 h-12 rounded-full ring-1 flex justify-center items-center big-dot-cursor">
      <Expand duration={750} className="scale-150 text-black" placeholder={"Theme Toggle"} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
    </div>
  );
}