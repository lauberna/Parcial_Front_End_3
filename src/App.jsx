import Card from "./components/card";
import { useState } from "react";
import "./App.css";
function App() {
  const regex3 = /^[a-zA-Z]{3,}$/
  const regex = /^(?=.*[a-zA-Z0-9])[\w\d]{3,}$/
  const [mostrarErr, setMostrarErr] = useState(false)
  const [mostrar, setMostrar] = useState(false)
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    genero: "",
    fav: "",
  });
  console.log(datos);
  const handleSubmit = (event) => {
    event.preventDefault();
    if(regex3.test(datos.nombre) && regex3.test(datos.apellido) && datos.genero != "" && regex.test(datos.fav)){
      setMostrar(true)
      setMostrarErr(false)
    }
    else{
      setMostrar(false)
      setMostrarErr(true)
    }
  };
  return (
    <div className="App">
      <form>
        <h1>Hola!</h1>
        <label htmlFor="name">Ingresa tu nombre: </label>
        <input placeholder="ej. Laureano" onBlur={(e)=> setDatos({...datos, nombre: e.target.value.trim()})} type="text" id="name"></input>
        <label htmlFor="apellido">Ingresa tu apellido: </label>
        <input placeholder="ej. Berna"onBlur={(e)=> setDatos({...datos, apellido: e.target.value.trim()})} type="text" id="apellido"></input>
        <label htmlFor="genero">Que genero de musica escuchas?: </label>
        <select onBlur={(e)=> setDatos({...datos, genero: e.target.value})} id="genero">
          <option value="" disabled selected>Selecciona un género</option>
          <option value="rock">Rock</option>
          <option value="pop">Pop</option>
          <option value="electronica">Electronica</option>
          <option value="techno">Techno</option>
          <option value="reggaeton">reggaeton</option>
        </select>
        <label htmlFor="fav">Cual es tu cancion favorita?: </label>
        <input placeholder="ej. Alone" onBlur={(e)=> setDatos({...datos, fav: e.target.value.trim()})} type="text" id="fav"></input>
        <button onClick={handleSubmit}>enviar</button>
      </form>
      {mostrarErr && <h3 style={{color: "red"}}>Porfavor revisa los datos ingresados</h3>}
      {mostrar && <Card datos={datos}/>}
    </div>
  );
}

export default App;
