import React,{useState} from "react";
import { ref, set } from "firebase/database";
import { uid } from "uid";
import { db } from "../firebase";

function DBTestPage(){
    const [todo, setTodo] = useState("");

  const handleTodoChange = e => {
    setTodo(e.target.value);
  };

  // Write
  const writeData = () => {
    const uuid = uid();

    set(ref(db, "test/" + uuid), {
      todo,
      uuid,
    });
    setTodo("");
  };
  
  return (
    <div className="App">
      <input type="text" value={todo} onChange={handleTodoChange}></input>
      <button onClick={writeData}>Submit</button>
    </div>
  );
}

export default DBTestPage;