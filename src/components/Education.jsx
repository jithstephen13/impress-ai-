import { useSelector } from "react-redux";

const EducationForm = ({ education, onChange, onAdd }) => {
    const resumeData =useSelector((store)=>store.resume)
    return (
      <div>
        <h4>Education</h4>
        {education.map((edu, index) => (
          <div key={index}>
            <div className="form-group">
              <label htmlFor={`institute-${index}`}>Institute</label>
              <input
                type="text"
                className="form-control"
                id={`institute-${index}`}
                value={edu.institute}
                onChange={(e) => onChange(index, 'institute', e.target.value)}
                required
              />
            </div>
  
            <div className="form-group">
              <label htmlFor={`year-${index}`}>Year</label>
              <input
                type="text"
                className="form-control"
                id={`year-${index}`}
                value={edu.year}
                onChange={(e) => onChange(index, 'year', e.target.value)}
                required
              />
            </div>
  
            <div className="form-group">
              <label htmlFor={`degree-${index}`}>Degree</label>
              <input
                type="text"
                className="form-control"
                id={`degree-${index}`}
                value={edu.degree}
                onChange={(e) => onChange(index, 'degree', e.target.value)}
                required
              />
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-secondary" onClick={onAdd}>Add Education</button>
      </div>
    );
  };

  export default EducationForm