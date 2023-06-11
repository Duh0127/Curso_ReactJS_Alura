import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props)=>{
    
    const css = {backgroundColor: props.corSecundaria}
    const borderBottom = {borderColor: props.corPrimaria}
    
    return(
        // condição para renderização de condição, pegando o elemento que está depois do '&&', se a condição for verdadeira
        (props.colaboradores.length > 0) ? /* ? = if*/ <section className='time' style={css}>
            <h3 style={borderBottom}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={props.corPrimaria} />)}
            </div>
        </section>
        : '' //else, return string vazia
    )
}
export default Time;
