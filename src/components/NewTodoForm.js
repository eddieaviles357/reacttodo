import React from 'react';

// this component should render a form with one text input for the task to be created. 
// When this form is submitted, a new Todo component should be created. 
// - Todo- this component should display a div with the task of the todo.
export default function NewTodoForm() {
    return(
        <form>
            <label htmlFor='todo'>Task Name</label>
            <input id='todo' name='todo' type="text" />
        </form>
    )
}