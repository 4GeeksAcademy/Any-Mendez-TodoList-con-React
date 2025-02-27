import React, { useState } from "react";

//create your first component

const Home = () => {
  const [inputValue] = useState("");
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const agregarTarea = (e) => {
    if (e.key === "Enter" && nuevaTarea.trim() !== "") {
      setTareas([...tareas, nuevaTarea]); setNuevaTarea("");
    }
  };
  const borrarTarea = (index) => {
    setTareas(tareas.filter((t, i) => i !== index));
  };

  return (

    <div className="container">
      <div className="card border-solid-1 mt-5 bg-secondary border-radius-3 text-white">

        <h1 className="title text-center">
          Lista de Tareas
        </h1>
        <input className="form-control-lg" size={40} placeholder="¿Qué necesitas hacer?" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} onKeyDown={agregarTarea}>
        </input>
        <ul className="list-group list-group-flush mt-2">
          {tareas.length === 0 ? (
            <li className="list-group-item text-muted text-center">
              No hay tareas, añadir tareas
            </li>) : tareas.map((item, index) => {

              return <li key={index} className="d-flex justify-content-between">
                {item} <i className="far fa-trash-alt mx-5" onClick={() =>
                  setTareas(tareas.filter((t, currentIndex) => index != currentIndex))}></i>
              </li>
            })}
        </ul>
        <div className="card bg-secondary">{tareas.length}</div>
      </div>
    </div>
  );
};

export default Home