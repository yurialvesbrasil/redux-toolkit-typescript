import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { decrement, increment } from './store/Stock.store';
import "./styles/main.css";

function App() {
  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock);

  return (
    <div className='App conteudo'>
      <header className='App-header'>
        <div className='conteudo'>
          {stock?.counter}
          <button onClick={() => dispatch(increment())}>
            Somar
          </button>
          <button onClick={() => dispatch(decrement())}>
            Subitrair
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
