import { useContext } from "react";
import { ThemeContext } from "../themes/ThemeContext.jsx";

const Button = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <button onClick={toggleTheme}>{theme === "light" ? "☀️" : "🌙"}</button>
        </>
    );
};

export default Button;