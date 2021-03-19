import React from 'react'
import './app.css';

import Primeiro from './component/Primeiro';
import Segundo from './component/Segundo'
import ComFilhos from './component/ComFilhos'
import Rept from './component/rept'
import Card from './component/layout/card'
import Condicional from './component/Condicional'


export default props =>(
    <div className="app">
  
  <Card>
  
  </Card>

  {/* Componente com parametros*/}
  <Card titulo="Teste">
  <Primeiro /> 
  <Segundo titulo="Primeiro Componente" 
  subtitulo="Exemplo de Compomete "></Segundo>

  </Card>

    {/* Componente com filhos*/}

  <Card titulo="Lista"> 
  <ComFilhos>
    <ul>
      <li>Ana</li>
      <li>Luis</li>
      <li>Carlos</li>
      <li>Felipe</li>
    </ul>
  </ComFilhos>
  </Card>
  
  <Card titulo="Condicional">
    <Condicional numero={101}></Condicional> 
  </Card>

  <Card titulo="Repetição">
    <Rept></Rept>
  </Card>

    {/* Card*/}
  <Card titulo="Condicional">
    <Condicional numero={10}></Condicional> 
  </Card>

  <Card titulo="Lista"> 
  <ComFilhos>
    <ul>
      <li>Ana</li>
      <li>Luis</li>
      <li>Carlos</li>
      <li>Felipe</li>
    </ul>
  </ComFilhos>
  </Card>

  
  </div>
  );
  