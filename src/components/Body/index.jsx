import "./styles.css"
import Skills from "../skills"

export default function Body() {
  return (
    <div className="body">
      <h2>About Me</h2>
      <p className="body-text">
        I am a passionate Full-Stack Developer with experience in building web applications using modern technologies. I enjoy solving complex problems and creating efficient solutions that enhance user experiences.
      </p>
      <Skills />
    </div>
  )
}