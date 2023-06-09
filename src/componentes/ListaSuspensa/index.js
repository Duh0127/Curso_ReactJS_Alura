import './ListaSuspensa.css';

const ListaSuspensa = (props)=>{
    console.log(props.itens);

    //MAP faz o mapeamento do array, transforma em uma lista diferente e dps te retorna

    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}> {item} </option>)}
            </select>
        </div>
    )
}   

export default ListaSuspensa;