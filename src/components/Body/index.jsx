import "./styles.css"
import Skills from "../Skills"
import Projects from "../Projects"
import { useTranslation } from "react-i18next"

export default function Body() {

  const { t } = useTranslation()

  return (
    <div className="body">
      <h2>{t("about")}</h2>
      <p className="body-text">
        {t("text-about")}
      </p>
      <Skills />
      <Projects />
    </div>
  )
}