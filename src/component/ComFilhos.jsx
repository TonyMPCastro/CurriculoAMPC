import React from 'react'

//Função com elementos filhos
    export default  props =>
    <div>
        <h2>Os Filhos:</h2>
        <div>
            {props.children}
        </div>
    </div>