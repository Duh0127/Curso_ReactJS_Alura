import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import './Formulario.css';


const Formulario = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Data-Science',
        'DevOPS',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
      ]

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label='Nome:' placeholder='Digite seu nome' />
                <CampoTexto label='Cargo:' placeholder='Digite seu cargo' />
                <CampoTexto label='Imagem:' placeholder='Informe o endereço da imagem' />
                <ListaSuspensa label='Times:' itens={times}/>
                <Botao>
                    Criar card
                    {/* Daria para add icones desse jeito, pegando todos os 'filhos' com a prop.childen */}
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;