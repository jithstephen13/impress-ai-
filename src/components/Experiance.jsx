const ExperienceForm = ({ experience, onChange, onAdd }) => {
    return (
      <div>
        <h4>Experience</h4>
        {experience.map((exp, index) => (
          <div key={index}>
            <div className="form-group">
              <label htmlFor={`company-${index}`}>Company</label>
              <input
                type="text"
                className="form-control"
                id={`company-${index}`}
                value={exp.company}
                onChange={(e) => onChange(index, 'company', e.target.value)}
                required
              />
            </div>
  
            <div className="form-group">
              <label htmlFor={`year-${index}`}>Year</label>
              <input
                type="text"
                className="form-control"
                id={`year-${index}`}
                value={exp.year}
                onChange={(e) => onChange(index, 'year', e.target.value)}
                required
              />
            </div>
  
            <div className="form-group">
              <label htmlFor={`designation-${index}`}>Designation</label>
              <input
                type="text"
                className="form-control"
                id={`designation-${index}`}
                value={exp.designation}
                onChange={(e) => onChange(index, 'designation', e.target.value)}
                required
              />
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-secondary" onClick={onAdd}>Add Experience</button>
      </div>
    );
  };
  export default ExperienceForm