import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddUpdateToDo = () => {
    if (editIndex !== null) {
      // Update existing ToDo
      const updatedToDos = toDos.map((item, index) => (index === editIndex ? toDo : item));
      setToDos(updatedToDos);
      setEditIndex(null);
    } else {
      // Add new ToDo
      setToDos([...toDos, toDo]);
    }
    setToDo(''); // Clear input field
  };

  const handleEditToDo = (index) => {
    setToDo(toDos[index]);
    setEditIndex(index);
  };

  const handleDeleteToDo = (index) => {
    const updatedToDos = toDos.filter((_, i) => i !== index);
    setToDos(updatedToDos);
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 😄</h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={handleAddUpdateToDo} className="fas fa-plus"></i>

      </div>
      <div className="todos">
        {toDos.map((value, index) => {
          return (
            <div className="todo" key={index}>
              <div className="left">
                <input type="checkbox" name="" id="" />
                <p>{value}</p>
              </div>
              <div className="right">
              <i onClick={() => handleEditToDo(index)}   className="fas fa-edit"></i>
              <i onClick={() => handleDeleteToDo(index)} className="fas fa-times"></i>
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
