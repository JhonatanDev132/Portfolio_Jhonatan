import { useState } from "react";
import "./skillsList.css";
import { useTranslation } from "react-i18next";

export default function SkillsList({title, skills, limit = 5}) {
  const [expanded, setExpanded] = useState(false);

  const visibleSkills = expanded ? skills : skills.slice(0, limit);

  const { t } = useTranslation()

  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {visibleSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      {skills.length > limit && (
        <button onClick={() => setExpanded(!expanded)} className="show-more-btn">
          {expanded ? t("show-less") : t("show-more")}
        </button>
      )}
    </div>
  )
}