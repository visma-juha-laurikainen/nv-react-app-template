import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fi from "./translations/fi.json";

export function setupI18n(lng = "fi") {
  /** Add other languages to resources here */
  const resources = {
    fi: {
      translation: fi,
    },
  };

  i18n.use(initReactI18next).init({
    defaultNS: "translations",
    fallbackLng: "fi",
    interpolation: {
      escapeValue: false,
    },
    lng,
    resources,
  });

  return i18n;
}

export default i18n;
