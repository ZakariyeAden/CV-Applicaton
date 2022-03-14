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

export default function Education(props){
  const [educationInfo, setEducationInfo] = useState({
    instituteName:"",
    degreeName:"",
    startDate:"",
    endDate:"",
  });
  const [editMode, setEditMode] = useState(true);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode((mode) => !mode);
  };
  function handleChange(e) {
    const { name, value } = e.target;

    setEducationInfo((info) => {
      const newInfo = { ...info, [name]: value };
      return newInfo;
    });
  }
  return (
    <div style={flexStyle}>
      <form onSubmit={handleSubmit} style={flexStyle}>
        <div style={formStyle}>
          <label>
            <p>Institute Name: </p>
            <input 
              type="text"
              name="instituteName"
              placeholder="Institute Name"
              onChange={handleChange}
              required={true}
              value={educationInfo.instituteName}
            />
          </label>
          <label>
              <p>Degree:</p>
              <input
                type="text"
                name="degreeName"
                placeholder="Degree Name"
                onChange={handleChange}
                required={true}
                value={educationInfo.degreeName}
              />
           </label>
           <label>
             <p>Start Date:</p>
             <input
               name="startDate"
               type="date"
               onChange={handleChange}
               required={true}
               value={educationInfo.startDate}
             />
           </label>
           <label>
             <p>Finish Date:</p>
             <input
               name="endDate" 
               type="date"
               onChange={handleChange}
               value={educationInfo.endDate}
             />
           </label>
        </div>
          <div>
            <button type="submit">Save</button>
            <span onClick={() => props.handleDelete("education", props.id)}>
              Delete
            </span>
          </div>
      </form>
    </div>
  );
}
