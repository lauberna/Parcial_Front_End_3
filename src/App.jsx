import Card from "./components/card";
import "./App.css";
function App() {
  //array de nombres
  const names = ["Juan", "Pedro", "Maria"];
  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <form></form>
      <Card names={names} />
    </div>
  );
}

export default App;
