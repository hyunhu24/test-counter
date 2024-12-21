import { useState } from 'react';
import './App.css';
import Counter from './Pages/Counter';
import MinusBtn from "./Pages/MinusBtn.js";
import PlusBtn from "./Pages/PlusBtn.js";
import './Pages/page.css';

function App() {
  const [countValue, setCountValue] = useState(0);

  console.log(countValue);

  const handlePlusBtn = () => {
    setCountValue((plus) => plus + 1);
  }

  const handleMinusBtn = () => {
    setCountValue((minus) => minus - 1);
  }


  return (
    <div className="App">
      <div className='btnBox'>
        <MinusBtn handleMinusBtn={handleMinusBtn}/>
        <Counter countValue={countValue}/>
        <PlusBtn handlePlusBtn={handlePlusBtn}/>
      </div>
    </div>
  );
}

export default App;
