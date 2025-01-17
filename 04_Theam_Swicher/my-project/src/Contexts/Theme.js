import { createContext, useContext } from "react";


{/* Create a Context for Theme management. */} 

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});


// ThemeProvider = It is used to wrap the part of the component tree where theme management is needed.
export const ThemeProvider = ThemeContext.Provider;


// This hook simplifies accessing the ThemeContext in components. 
export default function useTheme() {
  return useContext(ThemeContext);
}


// step 1 