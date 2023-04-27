import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  /* state para el manejo del modo noche */
  const [darkMode, setDarkMode] = useState(false);
  /* se ejecutara cuando se cambie el darkMode */
  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);
  /* funcion que hara el cambio en el estado DarkMode */
  const handleDarkMode = (): void => {
    /* le pasara true si darkMode esta en false y viceversa */
    setDarkMode(!darkMode);
  };
  return (
    <div className="App h-screen w-full flex flex-col gap-5 justify-center items-center">
      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-1/5 duration-200">
        <div>
          <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            ></svg>
          </span>
        </div>
        <h3 className="text-slate-900 dark:text-gray-200 duration-500 mt-5 text-base font-medium tracking-tight">
          Writes Upside-Down
        </h3>
        <p className="text-slate-500 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
      <button
        onClick={() => handleDarkMode()}
        className="bg-white rounded-lg dark:bg-slate-800  dark:text-white px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-1/5 duration-1000"
      >
        change theme
      </button>
    </div>
  );
}

export default App;
