import './Input.css';

const Input = ({ label, placeHolder, obrigatorio, valor, aoAlterado }) => {
    const placeHolderModificada = `${placeHolder}...`;

    const aoDigitado = (event) => {
        aoAlterado(event.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input required={obrigatorio} value={valor} onChange={aoDigitado} placeholder={placeHolderModificada} />
        </div>
    )
}

export default Input;