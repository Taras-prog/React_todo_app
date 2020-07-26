import React from 'react'
import ReactDOM from 'react-dom'

const element =(
    <div>
        <h1>My Todo Lit</h1>
        <input placeholder="search"/>
     <ul>
        <li>Learn React</li>
        <li>Learn NodeJS</li>
    </ul>
    </div>
    )


ReactDOM.render(element,  document.getElementById('root'))