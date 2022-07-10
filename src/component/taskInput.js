import React, { useState } from 'react';
import './taskInput.css'

function Taskinput({ addTask,checkBoxes,checked }) {
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    
    setUserInput(e.currentTarget.value);
    if(checked)
    checkBoxes(false);
  };

  const handleSubmit = (e) => {
   
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
    return (
      <div className="Taskinput">
         <form onSubmit={handleSubmit}>
      <input autoFocus="autofocus"
     
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder=""
      />
      <button className='button'>Enter</button>
    </form>
        
      </div>
    );
  }
  
  export default Taskinput;