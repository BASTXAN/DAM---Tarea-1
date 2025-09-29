import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');
  const [numbers, setNumbers] = useState([]);

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const process = () => {
    const nums = input
    .split(',')
    .map((n) => parseInt(n.trim()))
    .filter((n) => !isNaN(n));
    setNumbers(nums);
  };

  const getColor = (num) => {
    const colors = [];
    if (isPrime(num)) colors.push('black');
    if (num % 2 === 0) colors.push('green');
    if (num % 2 !== 0) colors.push('red');
    return colors;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           ⬇️ Ingresa un numero o una lista de numeros ⬇️
        </p>
        <input type="text" 
        placeholder='Ej: 1, 2, 3, 4, ...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button onClick={process}>Procesar</button>
        <ul>
          {numbers.map((num, index) => {
            const colors = getColor(num);
            return (
              <li key={index}>
                {colors.map((color, i) => (
                  <span 
                    key={i} 
                    style={{ color}}
              >
                {num}
                {i < colors.length - 1 ? ' / ' : ''}
              </span>  
          ))}
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
