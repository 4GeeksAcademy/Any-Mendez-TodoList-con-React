import React, { useState } from "react";

//create your first component

const Home = () => {
  const [inputValue] = useState("");
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [iconoVisible, setIconoVisible] = useState(false);
  const [indiceTareaSeleccionada, setIndiceTareaSeleccionada] = useState(null);

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
      <div className="card mt-5" style={{backgroundColor: 'rgb(251, 251, 242)'}}>

        <h1 className="title text-center">
          Lista de Tareas
        </h1>
        <div className="row col-md-8 mx-auto text-break mb-5" style={{border: '1px solid #ccc'}}>
        <input className="card border-none " placeholder="¿Qué necesitas hacer?" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} onKeyDown={agregarTarea}>
        </input>
        <ul className="list-group list-group-flush text-muted px-0">
          {tareas.length === 0 ? (
            <li className="list-group-item text-muted text-center mt-3" style={{backgroundColor: 'rgb(251, 251, 242)'}}>
              No hay tareas, añadir tareas
            </li>) : (tareas.map((item, index) => {

              return (<li key={index} className="d-flex justify-content-between mt-3" style={{borderBottom: '1px solid #ccc'}} onMouseOver={() => {
              setIconoVisible(true);
              setIndiceTareaSeleccionada(index);
            }}
            onMouseOut={() => {
              setIconoVisible(false);
              setIndiceTareaSeleccionada(null);
            }}
          >
            {item}
            {iconoVisible && indiceTareaSeleccionada === index && (
                <i className="far fa-trash-alt mx-5" onClick={() =>
                  setTareas(tareas.filter((t, currentIndex) => index !== currentIndex))}></i>
                )
              }
              </li>
              );
            }))}
             <div className="text text-muted mt-3 mx-3">{tareas.length} tareas</div>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Home;