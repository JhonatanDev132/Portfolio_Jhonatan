import { useTranslation } from "react-i18next"

export default function Projects() {

  const { t } = useTranslation()

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <div className="image"></div>
        <h3>Lamborghini</h3>
        <p>{t("lamborghini")}</p>
      </div>
      <div className="project-card">
        <div className="image"></div>
        <h3>PetLove</h3>
        <p>{t("petlove")}</p>
      </div>
    </div>
  )
}