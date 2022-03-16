import React from 'react'

export default function View(props){
  console.log(props);
  return(
    <div>
      <span className="edit" onClick={props.handleEdit}>Edit</span>
    </div>
  );
}