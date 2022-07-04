import logo from './logo.svg';
import './App.css';
import React, { useReducer } from 'react';
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"

import { ToDoContext } from "./Context/ToDoContext"
import todoReducer from './Context/reducer';
import TodoForm from './Components/TodoForm';
import Todos from './Components/Todos';



const App = () => {

  const [todos, dispatch] = useReducer(todoReducer, [])
  return (
    <ToDoContext.Provider value={{ todos, dispatch }}>
    
      <Container fluid>
        
        <h1>ToDo App with Context API</h1>
        <Todos/>
        <TodoForm/>
      </Container>
    
    </ToDoContext.Provider>

    );
}
 


export default App;
