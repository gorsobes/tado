import React from 'react';
import './task.css';


function Task({ todo, toggleTask, removeTask,now ,classNam,handleChangeG}) {
 
    return (
      
      <div className={classNam} >
     <div key={todo.id + todo.key} className="item-todo">
      <div
        onClick={() => toggleTask(todo.id)}
        className={todo.complete ? "item-text strike" : "item-text"}
      >
        {todo.task}
      </div>
      <hr />
    </div>
       <div className="checkboxes__row">
    <div className="checkboxes__item date-now">
      <label className="checkbox style-f">
        <input type="checkbox" checked={todo.check} 
			onChange={() => handleChangeG(todo.id)} />
        <div className="checkbox__checkmark"></div>
        <div className="checkbox__body">ВАЖНО!!!</div>
      </label>
      {now}
      <div className="item-delete" onClick={() => {removeTask(todo.id)}}>
        <span className="icon-refresh"></span>
      </div>
    </div>
  </div>
      </div>
      
    );
  }
  
  export default Task;

  