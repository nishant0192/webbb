import React from 'react'

function Greeting(props) {
  return (
    <div>
        <h1>Implemented Props Successfully :)</h1>
        <h2 style={{color:"red"}}>Hello {props.name}</h2>
    </div>
  )
}

export default Greeting