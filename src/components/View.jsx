import { useSelector } from "react-redux";
import { store } from "../redux/store";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const ViewResume = () => {

    const navigate=useNavigate()


    const resumeData =useSelector((store)=>store.resume)
    console.log(resumeData)

    if(!resumeData.name){
        return <h1>Please Fill your Details</h1>
    }
  
    return (
      <div className="container2">
        <h2>View Resume <span onClick={()=>navigate("/")}><AiFillEdit/></span></h2>
        <p>Name: {resumeData.name}</p>
        <p>Email: {resumeData.email}</p>
        <p>Address: {resumeData.address}</p>
        <p>Phone: {resumeData.phone}</p>
  
        <div>
          <h4>Education <span onClick={()=>navigate("/")}><AiFillEdit/></span></h4>
          {resumeData.education.map((edu, index) => (
            <div key={index}>
              <p>Institute: {edu.institute}</p>
              <p>Year: {edu.year}</p>
              <p>Degree: {edu.degree}</p>
            </div>
          ))}
        </div>
  
        <div>
          <h4>Experience  <span onClick={()=>navigate("/")}><AiFillEdit/></span></h4>
          {resumeData.experience.map((exp, index) => (
            <div key={index}>
              <p>Company: {exp.company}</p>
              <p>Year: {exp.year}</p>
              <p>Designation: {exp.designation}</p>
            </div>
          ))}
        </div>
  
        <div>
          <h4>Skills <span onClick={()=>navigate("/")}><AiFillEdit/></span></h4>
          <ul>
            {resumeData.skills.map((skill, index) => (
              <li key={index}>{skill.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  export default ViewResume