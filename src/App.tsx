import React from 'react';
import logo from './logo.svg';
import './App.css';
import { cn } from '@bem-react/classname';
import Calculator from "./components/Calculator/Calculator";

const b = cn('App')

function App() {
  return (
    <div className={b()}>
      <Calculator/>
    </div>
  );
}

export default App;
