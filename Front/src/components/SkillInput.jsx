import { useState } from "react"

function SkillInput({skill, checked, handleChange}) {
    const [isChecked, setIsChecked] = useState(checked)
    
    function handleCheck(){
        setIsChecked(!isChecked)
        handleChange(skill)
    }

  return (
    <div className="checkInput" onClick={handleCheck} value={skill} >
        <input type='checkbox' 
            name={skill} 
            checked={isChecked} 
            value={skill}
            onChange={handleCheck}
        />
        <label>{skill}</label>
    </div>
  )
}

export default SkillInput