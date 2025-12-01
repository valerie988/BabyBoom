import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };

  return (
    <button
      onClick={toggleLang}
      className="text-sm px-3 py-1 bg-gray-300 rounded-lg"
    >
      {i18n.language === "en" ? "FR" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
