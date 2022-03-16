import React, { useState} from 'react'

const formStyle = {
  display: "grid",
  gridTemplateColumns:"1fr 1fr",
  margin:"1rem",
  gridRowGap:"1rem",
  gridColumnGap:"2rem",
};
const flexStyle = {
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
};

export default function Experience(props){
  const [experienceInfo, setExperienceInfo] = useState({
    companyName: "",
    position:"",
    startDate:"",
    endDate:"",
    task:""
  });
  const [editMode, setEditMode] = useState(true);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceInfo((expInfo) => {
      const newList = { ...expInfo, [name]: value};
      return newList;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode((mode) => !mode);
  };

  if(!editMode){
    return(
      <div>
        <span onClick={handleSubmit}>Edit</span>
        apple
      </div>
    );
  }

  return(
    <div style={flexStyle}>
      <form style={[formStyle, flexStyle]} onSubmit={handleSubmit}>
        <label>
          <p>Company name:</p>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            onChange={handleChange}
            required={true}
            value={experienceInfo.companyName}
          />
        </label>
        <label>
          <p>position:</p>
          <input
            type="text"
            name="position"
            placeholder="position name"
            onChange={handleChange}
            required={true}
            value={experienceInfo.position}
          />
        </label>
        <label>
          <p>Start Date:</p>
          <input
            type="date"
            name="startDate"
            onChange={handleChange}
            required={true}
            value={experienceInfo.startDate}
          />
        </label>
        <label>
          <p>End Date:</p>
          <input
            type="date"
            name="endDate"
            onChange={handleChange}
            required={true}
            value={experienceInfo.endDate}
          />
        </label>
        <label>
          <p>Job Tasks:</p>
          <input
            type="text"
            name="task"
            placeholder="Task"
            onChange={handleChange}
            required={true}
            value={experienceInfo.task}
          />
        </label>
        <div>
        <button type="submit">Save</button>
        <button onClick={() => props.handleDelete("experience", props.id)}>Delete</button>
          {/* <span onClick={() => props.handleDelete("education", props.id)}>Delete</span> */}
        </div>
      </form>
    </div>
  );
}