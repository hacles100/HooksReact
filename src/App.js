import './App.css'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  // const incrementCount = () => {
  //   setCount(count + 1);
  // }

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default App;
