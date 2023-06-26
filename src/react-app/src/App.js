import React, {useState, useRef, useEffect} from "react";
import ToDoList from "./ToDoList";
import uuidv4 from 'uuid/v4'

function App() {
  const [Todos, setTodos] = useState([]);
  const toDoNameRef = useRef();
  const LOCAL_STORAGE_KEYS = 'tdoApp.todos'
  
  useEffect(() => {
    const storedToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS));
    if(storedToDods) setTodos(storedToDods);
  }, []);
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS, JSON.stringify(Todos))
  }, [Todos]);


  return (
    <>
    <ToDoList ToDos = {Todos} />  
    {/*we are rendering ToDoList.js in the App.js and that class is recndering the text "Hello World!"
        which is why any changes we make in ToDoList can be seen in the React app launched on npm start*/}
    
   {/* <input type="text" /> will return an error cuz we are already returning the ToDoList type and we cant return more than one in a single return statement.
    To get past this constraint, we can "wrap" the contents of the reurn statement within <> </>, so it all 
      returns only one component as a whole but that one component can contain any number of components! */}

    <input ref = {toDoNameRef} type="text" />
    <button onClick={handleAddToDo}>Add Todo</button>
    <div></div> {/** Works like an extra Sysout in Java if you want to move content to the next line */}
    <button> Clear Completed Todos</button>
    <div> 0 left to do</div>

    </>
    
  )

  function handleAddToDo(e){
    const name = toDoNameRef.current.value
    if(name === ''){
      return setTodos(previousTodos => {
        return[...previousTodos, {id: uuidv4(), name: name, complete: false}]
      });
    }
    toDoNameRef.current.value = null;
  }

  
}



export default App;
