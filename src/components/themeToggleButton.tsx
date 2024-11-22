'use client';

export default function ThemeToggle() {
  const toggleTheme = () => {
    document.body.classList.toggle('dark');
    //document.documentElement.classList.toggle('dark');
    //document.body.classList.toggle("bg-dark");
    document.documentElement.classList.toggle("theme--night");
  };

  return (
    // <button 
    //   onClick={toggleTheme}
    //   className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-lg"
    // >
    //   Toggle Theme
    // </button>
    <div className="relative bg-white dark:bg-black p-7 ml-4 rounded-full">
      <div className="theme-toggle theme-toggle-js" onClick={toggleTheme}>
        <span className="moon"></span>
        <span className="sun"></span>
        <small className="sun__ray"></small>
        <small className="sun__ray"></small>
        <small className="sun__ray"></small>
        <small className="sun__ray"></small>
        <small className="sun__ray"></small>
        <small className="sun__ray"></small>
    </div>
    </div>
  );
}