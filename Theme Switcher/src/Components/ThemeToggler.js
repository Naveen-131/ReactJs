import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeModel] = useContext(ThemeContext);

  return (
    <div>
      <button        
        onClick={() => {
          setThemeModel(themeMode === "light" ? "dark" : "light");
        }}
      >
        <span>{themeMode === "light" ? "Turn On Dark Theme" : "Turn On Light Theme"} </span>
      </button>
    </div>
  );
};

export default ThemeToggler;
