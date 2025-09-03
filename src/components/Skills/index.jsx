import "./styles.css"
import SkillsList from "./skillsList"
import { useTranslation } from "react-i18next"

export default function Skills() {
  
  const { t } = useTranslation()

  return (
    <section className="skills">
      <h3>{t("Skills")}</h3>
      <div className="skills-container">
        <SkillsList
          title="Front-End"
          skills={["JavaScript", "TypeScript", "React", "Node.js", "CSS", "HTML5"]}
        />

        <SkillsList
          title="Back-End"
          skills={["Python", "NodeJs", "PHP", "Express.js"]}
        />

        <SkillsList
          title="Database"
          skills={["MongoDB", "MySQL", "Firebase"]}
        />

        <SkillsList
          title="Tools"
          skills={[
            "Git", "GitHub", "FastAPI", "Postman", "Insomnia", "Figma", "XML",
            "Styled-components", "Bootstrap", "Tailwind CSS", "Jira", "Scrum",
            "Agile", "RESTful APIs"
          ]}
        />

      </div>
    </section>
  )
}