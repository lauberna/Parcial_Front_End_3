/* eslint-disable react/prop-types */
function Card({datos}) {
  return (
    <div className="card">
      <h2>Hola {datos.nombre} {datos.apellido}!</h2>
      <p>Genero musical: {datos.genero}</p>
      <p>Cancion favorita: {datos.fav}</p>
    </div>
  )
}

export default Card