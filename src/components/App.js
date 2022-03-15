import React, { useState } from 'react'
import GeneralInformation from './GeneralInfo';
import Experience from './experience';
import Education from './education';


const flexStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function App(){
  const [educationId, setEducationId] = useState([]);
  const [experienceId, setExperienceId] = useState([]);

  const handleAddClick = (e) => {
    if(e.target.name === "addEducation"){
      setEducationId((edu) => [...edu, Date.now()]);
    }else{
      setExperienceId((exp) => [...exp, Date.now()]);
    } 
  };

  const handleDelete = (name, id) => {
    if(name === "education"){
      setEducationId((edu) => {
        let newList = edu.filter((key) => key !== id);
        return newList;
      });
    }else {
      setExperienceId((exp) => {
        let newList = exp.filter((key) => key !== id);
        return newList;
      });
    }
  };

  const education = educationId.map((id) => (
    <Education key={id} id={id} handleDelete={handleDelete} />
  ));

  const experience = experienceId.map((id) => (
    <Experience key={id} id={id} handleDelete={handleDelete}/>
  ));
  return(
    <div style={flexStyle}>
      <h1>CV Application</h1>
      <GeneralInformation/>

        <h3>Education</h3>
          {education}
      <button name="addEducation" onClick={handleAddClick}>Add Education</button>
        
      <h3>Experience</h3>
        {experience}
        <button name="addExperience" onClick={handleAddClick}> Add Experience</button>
    </div>
  );
}
