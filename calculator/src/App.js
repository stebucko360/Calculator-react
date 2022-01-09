import './App.css';
import { useState } from 'react';
import { Screen } from './components/Screen.jsx'
import { Buttons } from './components/Buttons.jsx'

function App() {

  const [numberArray, setNumberArray] = useState(['0']);

  return (
    <div className="App">
      <Screen numberArray={numberArray}/>
      <Buttons setNumberArray={setNumberArray}/>
    </div>
  );
}

export default App;
