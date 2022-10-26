import Conversor from './components/Conversor';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      border: 'solid 1px red'
    }}>
      <h1>App de conversão de moedas</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        border: 'solid 1px blue',
        width: '100%'}}>
          <Conversor origem='USD' destino='BRL' cor='green' />
          <Conversor origem='EUR' destino='BRL' cor='orange' />
          <Conversor origem='CAD' destino='BRL' cor='silver' />
      </div>
    </div>
  );
}

export default App;
