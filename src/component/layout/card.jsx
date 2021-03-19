import React from 'react'
import './card.css'

export default props =>
<div className="card">
    <div className="titulo">
        {props.titulo}
    </div>
    <div className="conteudo">
        {props.children}
    </div>
    

</div>