import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';    
import './index.css';
import App from './App';
import LoginPage from './LoginPage';
import TodoListPage from './TodoListPage';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/todolist",
    element: <TodoListPage />,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>
);
