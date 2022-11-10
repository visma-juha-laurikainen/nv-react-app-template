import { Namespace, TFunction } from "react-i18next";
import i18n, { setupI18n } from "./i18";

setupI18n("fi");

/** Allows for using translations in testing */
export const t: TFunction<Namespace<"translations">> = i18n.getFixedT("fi");
