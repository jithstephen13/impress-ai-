import { useState } from "react";
import { createResume } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import EducationForm from "./Education";
import ExperienceForm from "./Experiance";
import SkillForm from "./SkillForm";
import { useNavigate } from "react-router-dom";

const ResumeForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [education, setEducation] = useState([{ institute: '', year: '', degree: '' }]);
    const [experience, setExperience] = useState([{ company: '', year: '', designation: '' }]);
    const [skills, setSkills] = useState([]);
    const dispatch=useDispatch()
    const resumeData =useSelector((store)=>store.resume)
    const navigate=useNavigate()
  
    const handleEducationChange = (index, field, value) => {
      const updatedEducation = [...education];
      updatedEducation[index][field] = value;
      setEducation(updatedEducation);
    };
  
    const handleExperienceChange = (index, field, value) => {
      const updatedExperience = [...experience];
      updatedExperience[index][field] = value;
      setExperience(updatedExperience);
    };
  
    const handleEducationAdd = () => {
      setEducation([...education, { institute: '', year: '', degree: '' }]);
    };
  
    const handleExperienceAdd = () => {
      setExperience([...experience, { company: '', year: '', designation: '' }]);
    };
  
    const handleSubmit = (e) => {
  e.preventDefault()
      const resumeData = {
        name,
        email,
        address,
        phone,
        education,
        experience,
        skills,
      };
    console.log(resumeData)
      dispatch(createResume(resumeData));
      navigate("/view")
    };
  
    return (
      <div className="container">
        <h2>Create Resume</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={resumeData? resumeData.name:name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={resumeData? resumeData.email:email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={resumeData? resumeData.address:address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              value={resumeData? resumeData.phone:phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
  
          <EducationForm
            education={resumeData? resumeData.education :education}
            onChange={handleEducationChange}
            onAdd={handleEducationAdd}
          />
  
          <ExperienceForm
            experience={resumeData? resumeData.experience:experience}
            onChange={handleExperienceChange}
            onAdd={handleExperienceAdd}
          />
  
          <SkillForm skills={resumeData? resumeData.skills:skills} onChange={setSkills} />
  
          <button type="submit" className="btn btn-primary">Create Resume</button>
        </form>
      </div>
    );
  };
  export default ResumeForm