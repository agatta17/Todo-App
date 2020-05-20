import React from 'react';
import logo from './logo.svg';
import './App.css';
import { count, length } from './number';

const newString = 'Новая строка из переменной';
const number = 678;
const factor = 2;
const flag =true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={ {
          color: 'blue',
          fontSize: 50
        } }>
          добавление в разметку объекта style
        </p>
        <p>
          вывод значения переменной: {newString}
        </p>
        <p>
          вывод числa: {number}
        </p>
        <p>
          вывод результата арифметической операции: {number*2}
        </p>
        <p>
          вывод результата логической операции: {flag && 'flag is true'}
        </p>
        <p>
          использование тернарного условия: {factor===2 ? 'factor = 2' : 'false'}
        </p>
        <p>
          вывод undefined, null, false и true: 
          {undefined}
          {null}
          {false}
          {true}
        </p>
        <p>
        count * length = {count*length}
        </p>
      </header>
    </div>
  );
}


export default App;