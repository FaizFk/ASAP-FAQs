import { useAuthLanguage } from "../context/AuthLanguageContext";

function LanguageDropdown() {
  const languages = ["English", "Hindi", "Bengali", "Spanish", "French"];
  const abbreviations = { English: "en", Hindi: "hi", Bengali: "bn", Spanish: "sp", French: "fr" };
  const { language, changeLanguage } = useAuthLanguage();

  const selectedLanguage = Object.keys(abbreviations).find(
    (key) => abbreviations[key] === language
  );
  

  const handleSelect = (e) => {
    changeLanguage(abbreviations[e.target.value]);
  };

  return (
    <div className="mt-10">
      <label className="mr-2 text-gray-700 font-medium">Language:</label>
      <select value={selectedLanguage} onChange={handleSelect} className="border border-gray-300 p-2 rounded-md">
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageDropdown;
