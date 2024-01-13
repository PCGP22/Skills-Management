import { SkillInput } from '.'

function SkillsList({skills, handleDataSet}) {
    const allSkills = [
        "Java",
        "JavaScript",
        "React",
        "Angular",
        "TypeScript",
        "PHP",
        "NodeJs",
        "SQL",
        "MongoDB",
        "AWS",
        "Azure",
        "MicroServices",
        "Elastic",
        "GCP"
    ]

    function handleChange(skill){
        if(skills.includes(skill)){
            skills = skills.filter(s=>s !== skill)
            handleDataSet(skills)
        } else {
            skills.push(skill)
            handleDataSet(skills)
        }
    }

  return (
    <div className='skills-wrapper'>
        {allSkills.map(s=>        
            <SkillInput 
                key={s} 
                skill={s} 
                checked={skills.includes(s)}
                handleChange={handleChange} 
            />
        )}
    </div>
  )
}

export default SkillsList