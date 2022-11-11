import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return <div>App {t("Test")}</div>;
}

export default App;
