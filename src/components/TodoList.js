import React from 'react';
import NewTodoForm from './NewTodoForm';

// this component should render the NewTodoForm component 
// and should render the list of Todo components. 
// Place your state that contains all of the todos in this component.
export default function TodoList() {
    return(
        <div>
            <NewTodoForm />
        </div>
    )
}