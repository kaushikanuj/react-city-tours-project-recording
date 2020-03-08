import React from 'react'
import ReactDOM from 'react-dom'
import "./index.scss"
import App from './App'

const Top = ()=>{
    return(
     <div>
         <App />
     </div>
    );
}
ReactDOM.render(<Top />, document.getElementById('root'))