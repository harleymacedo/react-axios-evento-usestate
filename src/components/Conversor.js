import React, {useState} from 'react';

const Conversor = (props) => {

    const [valor, setValor] = useState('');
    const [resultado, setResultado] = useState('');
    const [cor, setCor] = useState(props.cor);
    const [origem, setOrigem] = useState(props.origem);
    const [destino, setDestino] = useState(props.destino);

    const atualizarValor = (event) => {
        setValor(event.target.value);
    }

    const converter = async () => {
        let url = `https://economia.awesomeapi.com.br/json/last/${origem}-${destino}`;
        console.log(url);
        let result = await fetch(url);
        let dados = await result.json();
        console.log(dados);
        setResultado( (parseFloat(valor) * dados[origem+destino].bid).toFixed(4) );
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
            <button onClick={converter} >Converter</button>
            <p>Resultado:</p>
            <p>{resultado}</p>
        </div>
    );
}

export default Conversor;