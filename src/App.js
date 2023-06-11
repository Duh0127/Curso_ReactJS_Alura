import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times =[
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Data-Science',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'DevOPS',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador)=>{
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]) //espalhou os colaboradores que ja estão no array de colaboradores e depois atribuindo o novo colaborador no final do array
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} times={times.map(time => time.nome)} />
                                                                {/* passando por parametro, apenas o nome dos times, utilizando o map */}
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      {/*map de times, armazenando na variavel 'time', que cria um objeto <Time>, contendo o nome, que puxa da variavel do map  */}
      {/* key é utilizada para controlar a renderização dos filhos do array 'times' */}
      {/* estamos passando por parâmetro as cores primarias e secundarias do array 'times' */}
      {/* criamos um filtro, com uma arrowFunction, com a condição de adicionar o colaborador de acordo com o nome do time */}
    </div>
  );
}

export default App;
