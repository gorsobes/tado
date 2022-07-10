import React, { useState , useEffect } from "react";
import './App.css';
import Task from './component/task';
import Taskinput from './component/taskInput';

function App() {
 const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos'))|| []);
 const [count, setCount] = useState(0); 
 const [checked, setChecked] = useState(false);
 const [checkedFilter, setCheckedFilter] = useState([]);

 const checkBoxes = () => {
  setCheckedFilter([...todos]);
if(!checked){
  setChecked (true);
  setTodos([...todos.filter((todo) => todo.check === true)]);
}
if(checked){
  setChecked (false);
  setTodos(checkedFilter);    
}

};
const handleChangeG = (id) => {
  setTodos([
    ...todos.map((task) =>
      task.id === id ? { ...task, check: !task.check } : { ...task }
    )
  ]);
};

 let addCss = () => {
   if(count % 2 === 0) {
    setCount(count + 1);
     return "Task";
   }
   setCount(count + 1);
     return "cssTask";
 } 
 
 useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
useEffect(() => {
  const todos = JSON.parse(localStorage.getItem('todos'));
  if (todos) {
    setTodos(todos);
  }
}, []);

  const addDate = () => new Date().toLocaleString();
  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
        now: addDate(),
        classNam: addCss(),
        check:false
      };
      setTodos([...todos, newItem]);
      
    }
  };
  const removeTask = (id) => {
    if(!checked){
      setTodos([...todos.filter((todo) => todo.id !== id)]);
    }
    if(checked){
      let del = [...todos.filter((todo) => todo.id !== id)];
      let cors = [...todos.filter((todo) => todo.id === id)];
      let min = checkedFilter.filter((elm) => !cors.includes(elm));
      setTodos(del); 
         setCheckedFilter(min);
      };
  };

  const handleToggle = (id) => {
    if(!checked){
      setTodos([
        ...todos.map((task) =>
          task.id === id ? { ...task, complete: !task.complete } : { ...task }
        )
      ]);
    }
    if(checked){
      let compl = [...todos.map((task) =>task.id === id ? { ...task, complete: !task.complete } : { ...task })];
      setTodos(compl);
      let checkcompl = [...checkedFilter.map((task) =>task.id === id ? { ...task, complete: !task.complete } : { ...task })];
      setCheckedFilter(checkcompl);
    }
  
  };
 
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-h">Список <span>задач:</span> {todos.length}</h1>
      <Taskinput addTask={addTask} checkBoxes={checkBoxes} checked={checked}/>

      <div className="checkboxes__row">
    <div className="checkboxes__item">
      <label className="checkbox style-e">
      <input type="checkbox" checked={checked} 
			onChange={() => checkBoxes()} />
        <div className="checkbox__checkmark"></div>
        <div className="checkbox__body">Отобразить ВАЖНОЕ!!!</div>
      </label>
    </div>
    </div>

      </header>
      <section className="App-section">
      {todos.map((todo) => {
        return (
          <Task
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
            now= {todo.now}
            classNam = {todo.classNam}
            handleChangeG = {handleChangeG}

          />
        );
      })}
      </section>
     
    </div>
  );
}

export default App;
