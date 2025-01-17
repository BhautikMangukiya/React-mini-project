import "./App.css";
import Card from "./Componets/Card";
import ThemeBtn from "./Componets/ThemeBtn";
import { ThemeProvider } from "./Contexts/Theme";
import { useEffect, useState } from "react";

function App() {

  // State for managing the current theme mode ("light" or "dark").
  const [themeMode, setthemMode] = useState("light");

  // Function to switch the theme to "light".
  const lightTheme = () => {
    setthemMode("light");
  };

  // Function to switch the theme to "Dark".
  const darkTheme = () => {
    setthemMode("dark");
  };

  // Actual theme change

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]); // Dependency array ensures this runs whenever `themeMode` changes.

  return (

     // Wrapping the app in the ThemeProvider so that all components can access the theme context.
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn /> {/* Theme btn */}
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card /> {/* card */}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
