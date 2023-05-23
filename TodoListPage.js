import Navbar from './Navbar';
import React, { useState } from 'react';

const TodoListPage = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo:todo
    }
    setList([...list, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div className="app">
      <Navbar />
      <div className='containertodo'>
        <h1 className="head"> Todo List</h1>
        <input type='text' value={input}
          onChange={(e) => setInput(e.target.value)} 
          placeholder='Enter Todo.....' className='task'/>
          <button className='button' onClick={() => 
            addTodo(input)}>Add</button>
            <ul>
              {list.map((todo) => (
                <li key={todo.id} className='inner'>
                  {todo.todo}
                  <button onClick={() => deleteTodo(todo.id)} className='trash'>X</button>
                  </li>
              ))}
            </ul>
    </div>
    </div>
  )
};
export default TodoListPage;
