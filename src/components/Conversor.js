import React, {useState} from 'react';

const Conversor = (props) => {

    const [valor, setValor] = useState('');
    const [resultado, setResultado] = useState('');
    const [cor, setCor] = useState(props.cor);
    const [origin, setOrigem] = useState(props.origin);
    const [destino, setDestino] = useState(props.destino);

    const atualizarValor = (event) => {
        setValor(event.target.value);
    }

    return (
        <div style={{
            width: '200px',
            height: '300px',
            border: 'solid 1px green',
            backgroundColor: cor
        }}>
            <p>Converter de {props.origem} para {props.destino}</p>
            <input type='text' placeholder='Digite o valor' onChange={atualizarValor} />
            <p>Resultado:</p>
            <p>{resultado}</p>
        </div>
    );
}

export default Conversor;