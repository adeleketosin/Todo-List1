// import complete from './complete.png';
// import edit from './edit.png';
// import trash from './trash.png';

// const Form = ({ todos, setTodos, setEditTodo }) => {

//     const handleComplete = (todos) =>{
//         setTodos(
//             todos.map((item) =>{
//                 if(item.id === todos.id){
//                     return {...item, completed:!item.completed}
//                 }
//                 return item;
//             })
//         );
//     };

//     const handleEdit = ({id}) =>{
//         const findTodo = todos.find((todos) => todos.id === id);
//         setEditTodo(findTodo);
//     }
//     const handleDelete = ({id}) => {
//         setTodos(todos.filter((todos) => todos.id !== id))
//     }
//     return (
//         <div >
//             {todos.map((todos) => (
//                 <li className="list-item" key={todos.id}>
//                     <input type="text" value={todos.title}
//                         className= {`list ${todos.completed ? 'complete' : ''}`} onChange={(event) =>
//                             event.preventDefault()}></input>
//                     <div>
//                         <button
//                             className="complete"></button>
//                         <img style={{ width: 70, tintColor: 'blue' }} src={complete}
//                          className="complete" onClick={() => handleComplete(todos)} />
//                         <button
//                             className="edit"></button>
//                         <img style={{ width: 40, tintColor: 'yellow' }} src={edit} 
//                         className="edit"  onClick={() => handleEdit(todos)}/>
//                         <button
//                             className="trash"></button>
//                         <img style={{ width: 40, tintColor: 'red' }} src={trash}
//                          className="trash"  onClick={() => handleDelete(todos)}/>
//                     </div>
//                 </li>

//             )
//             )}
//         </div>
//     )
// }

// export default Form;