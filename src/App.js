import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Result from './component/Result';



function App() {
  const [num, setNum] = useState(0)
    let [count, setCount] = useState(0);

    const {total} = useSelector((state) => state);
    console.log(total);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }
  return (
    <div className="App">
      
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>

      <div className='hasil'>
        <h1>{count}</h1>
        </div>
        <Result/>
    </div>
  );
}

export default App;
