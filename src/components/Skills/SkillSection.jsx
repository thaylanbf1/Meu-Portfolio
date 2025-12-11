import { skills } from "../data/data"
import SkillBar from "./SkillBar"

const SkillSection = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-5xl font-bold mb-12 text-center">
                <span className="bg-linear-to-r from-purple-700 to-blue-400 bg-clip-text text-transparent">
                    Habilidades
                </span>
            </h2>

            <div className="space-y-6">
                {skills.map((skill, index) => (
                    <SkillBar key={index} skill={skill} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default SkillSection
