import { useTranslation } from "react-i18next";
import CustomNavbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <CustomNavbar />
      <div className="p-3 bg-dark text-info">
        <h5 className="fw-bold">{t("que1")}</h5>
        <p>&nbsp;{t("ans1")}</p>
        <h5 className="fw-bold">{t("que2")}</h5>
        <p>&nbsp;{t("ans2")}</p>
        <h5 className="fw-bold">{t("que3")}</h5>
        <p>&nbsp;{t("ans3")}</p>
        <h5 className="fw-bold">{t("que4")}</h5>
        <p>&nbsp;{t("ans4")}</p>
        <h5 className="fw-bold">{t("que5")}</h5>
        <p>&nbsp;{t("ans5")}</p>
        <h5 className="fw-bold">{t("que6")}</h5>
        <p>&nbsp;{t("ans6")}</p>
        <h5 className="fw-bold">{t("que7")}</h5>
        <p>&nbsp;{t("ans7")}</p>
        <h5 className="fw-bold">{t("que8")}</h5>
        <p>&nbsp;{t("ans8")}</p>
        <h5 className="fw-bold">{t("que9")}</h5>
        <p>&nbsp;{t("ans9")}</p>
        <h5 className="fw-bold">{t("que10")}</h5>
        <p>&nbsp;{t("ans10")}</p>
        <h5 className="fw-bold">{t("que11")}</h5>
        <p>&nbsp;{t("ans11")}</p>
        <h5 className="fw-bold">{t("que12")}</h5>
        <p>&nbsp;{t("ans12")}</p>
        <h5 className="fw-bold">{t("que13")}</h5>
        <p>&nbsp;{t("ans13")}</p>
      </div>
    </>
  );
}

export default App;
