import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import './Formulario.css';
import { useState } from 'react';


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

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento)=>{
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        // console.log('Form foi submetido!', nome, cargo, imagem, time);
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label='Nome:' 
                    placeholder='Digite seu nome' 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto 
                    obrigatorio={true}
                    label='Cargo:' 
                    placeholder='Digite seu cargo' 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                
                <CampoTexto 
                    label='Imagem:' 
                    placeholder='Informe o endereço da imagem' 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Times:' 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                    {/* Daria para add icones desse jeito, pegando todos os 'filhos' com a prop.childen */}
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;