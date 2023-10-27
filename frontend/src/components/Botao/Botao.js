import './Botao.css';

const Botao = (props) => {
    return(
        <button className='btn'>
            {props.value}
        </button>
    )
}

export default Botao;