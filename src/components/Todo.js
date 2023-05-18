import React from 'react';

export default function Todo({id, todo, removeTodo}) {
    return (
        <li>
            {todo}
            <button id={id} onClick={removeTodo} >X</button>
        </li>
    )
}