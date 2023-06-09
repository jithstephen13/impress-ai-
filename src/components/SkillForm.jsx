import { useState } from "react";

const SkillForm = ({ skills, onChange }) => {
    const [newSkill, setNewSkill] = useState('');
  
    const handleSkillChange = (e) => {
      setNewSkill(e.target.value);
    };
  
    const handleSkillAdd = () => {
      if (newSkill.trim() !== '') {
        onChange([...skills, newSkill.trim()]);
        setNewSkill('');
      }
    };
  
    const handleSkillRemove = (skill) => {
      const updatedSkills = skills.filter((s) => s !== skill);
      onChange(updatedSkills);
    };
  
    return (
      <div>
        <h4>Skills</h4>
        <div>
          {skills.map((skill, index) => (
            <span key={index} className="badge badge-pill badge-primary mr-1">
              {skill}
              <button
                type="button"
                className="close ml-2"
                onClick={() => handleSkillRemove(skill)}
              >
                &times;
              </button>
            </span>
          ))}
        </div>
        <div className="input-group mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Add Skill"
            value={newSkill}
            onChange={handleSkillChange}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button" onClick={handleSkillAdd}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  };
  export default SkillForm