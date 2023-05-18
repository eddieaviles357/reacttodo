import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function NewTodoForm({setTodo}) {
    const INIT_STATE = {
        id: '',
        todo: ''
    }
    const [formData, setFormData] = useState(INIT_STATE);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const {id, todo} = formData;

        if(!todo) {
            alert('Please enter a todo');
            return;
        }
        setTodo( todo => [...todo, {id: uuidv4(), todo: formData.todo}]);
        setFormData(INIT_STATE);
    }

    const formHandler = (evt) => {
        const {name, value} = evt.target;
        setFormData( data => ({...data, [name]: value}) )
    }

    return(
        <form className='Form-container' onSubmit={handleSubmit}>
            <label htmlFor='todo'>Task Name</label>
            <input 
                id='todo' 
                name='todo' 
                type="text" 
                onChange={formHandler}
                value={formData.todo}/>
            <button>Add Todo</button>
        </form>
    )
}