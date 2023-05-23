import './App.css';
import Navbar from './Navbar';
// import TodoListpage from './TodoListPage';
import UserList from './UserList';

const App = () => {
  return(
    <div className='App'>
        <Navbar />
        <UserList />
        {/* <TodoListpage /> */}
        </div>
  )
}

export default App;