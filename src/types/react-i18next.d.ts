import "react-i18next";
import translations from "../translations/fi.json";

/** Extends react-18next to add translation keys to the translation function, allowing for auto complete */
declare module "react-i18next" {
  interface Resources {
    translations: typeof translations;
  }
}
