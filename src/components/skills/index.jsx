import "./styles.css"
import SkillsList from "./skillsList"

export default function Skills() {
  
  return (
    <section className="skills">
      <h3>Skills</h3>
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
            "Agile Methodologies", "RESTful APIs"
          ]}
        />

      </div>
    </section>
  )
}