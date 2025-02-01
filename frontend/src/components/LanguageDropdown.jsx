import { useState } from "react";

function LanguageDropdown(){
    const [language, setLanguage] = useState("English");
    const languages = ["English", "Hindi", "Bengali", "Spanish", "French"];

    return (
        <div className="mt-10">
            <label className="mr-2 text-gray-700 font-medium">Language:</label>
            <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="border border-gray-300 p-2 rounded-md"
            >
                {languages.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                ))}
            </select>
        </div>
    );
};

export default LanguageDropdown;