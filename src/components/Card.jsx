/* eslint-disable react/prop-types */
function Card({names}) {
  return (
    <div>{names.join(" ")}</div>
  )
}

export default Card