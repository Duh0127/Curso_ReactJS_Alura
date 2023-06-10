import './CampoTexto.css';

export const CampoTexto = (props) => {

    // const [valor, setValor] = useState('Eduardo Toshio');

    const aoDigitado = (evento)=>{
        props.aoAlterado(evento.target.value)
        // setValor(evento.target.value);
        // console.log(valor);
    }

    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} type="text" placeholder={props.placeholder}/>
        </div>
    )
}