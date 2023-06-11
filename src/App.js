import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador)=>{
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]) //espalhou os colaboradores que ja estão no array de colaboradores e depois atribuindo o novo colaborador no final do array
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <Time nome='Programação'/>
      <Time nome='Front-End'/>
      <Time nome='Data-Science'/>
      <Time nome='DevOps'/>
    </div>
  );
}

export default App;
