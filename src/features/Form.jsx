import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

function Form() {
  const [newItem, setNewItem] = useState("");
  const dispatch = useDispatch();

  function handleAddTodo() {
    if (newItem.trim()) {
      dispatch(addTodo(newItem));
      setNewItem("");
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="add todo..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </form>
  );
}

export default Form;
