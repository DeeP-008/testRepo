import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({ToDos}) {
  return (
    ToDos.map(todo => {
        return <ToDo key = {todo.id} todo={todo} />
    })
  );
}

export function addStuff({numsToAdd}){
    
}
