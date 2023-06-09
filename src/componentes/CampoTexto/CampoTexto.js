import './CampoTexto.css';

export const CampoTexto = (props) => {

    let valor = '';

    const aoDigitado = (evento)=>{
        valor = evento.target.value;
        console.log(valor);
    }

    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} type="text" placeholder={props.placeholder}/>
        </div>
    )
}