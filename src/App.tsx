import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { asyncDecrement, asyncIncrement } from './store/Stock.store';
import "./styles/main.css";

function App() {
  //Para acessar funções do store
  const dispatch = useDispatch();
  //Para acessar o conteúdo das variáveis do store
  const stock = useSelector((state: RootState) => state.stock);

  return (
    <div className='App conteudo'>
      <header className='App-header'>
        <div className='conteudo'>
          {stock.counter}
          <button onClick={() => dispatch(asyncIncrement({ offset: 10 }))}>
            async Somar
          </button>
          <button onClick={() => dispatch(asyncDecrement())}>
            async Subitrair
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
