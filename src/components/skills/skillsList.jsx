import { useState } from "react";

export default function SkillsList({title, skills, limit = 5}) {
  const [expanded, setExpanded] = useState(false);

  const visibleSkills = expanded ? skills : skills.slice(0, limit);

  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {visibleSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      {skills.length > limit && (
        <button onClick={() => setExpanded(!expanded)} className="text-blue-500 underline">
          {expanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  )
}