import React, {useState} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    
    const removeTodo = (evt) => {
        evt.preventDefault();
        const {id} = evt.target;

        setTodos( todo => todo.filter( td => td.id !== id));
    };

    return(
        <div className='Todo-container'>
            <NewTodoForm setTodo={setTodos}/>
            <ul>
            {
                todos.map( ({id, todo}) => <Todo key={id} id={id} todo={todo} removeTodo={removeTodo}/>)
            }
            </ul>
        </div>
    )
};