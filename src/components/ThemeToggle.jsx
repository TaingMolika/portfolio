import {Sun, Moon} from "lucide-react";
import { useState} from "react";

export const ThemeToggle = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    retun (<button> {isDarkMode ? <Sun /> : <Moon />}</button>);
}
