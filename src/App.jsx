import { useState, useEffect } from "react";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen p-4">
      <button onClick={() => setDarkMode(!darkMode)} className="mb-4 p-2 border">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <Home />
    </div>
  );
}

export default App;
