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
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Новый текст документа
        </p>
        {newString}
        <p>
          {number}
        </p>
        {factor*number}
        <p>
          {flag && 'flag is true'}
        </p>
        {factor===2 ? 'factor = 2' : 'false'}
        {undefined}
        {null}
        {false}
        {true}
      </header>
    </div>
  );
}


export default App;