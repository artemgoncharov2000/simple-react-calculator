import React, {useEffect, useState} from 'react';
import { cn } from '@bem-react/classname';
import Label from "../Label/Label";
import Button from "../Button/Button";

import './Calculator.css';
import {addDot, addSign, canAddDot} from "../../lib/calculator-tools";

const b = cn('Calculator');

const BUTTONS = [
 'AC', '+/-', '%', '/',
 '7',  '8',   '9', '*',
 '4',  '5',   '6', '-',
 '1',  '2',   '3', '+',
 '0',  '.',   '=',
];

const Calculator: React.FC = () => {

  const [varA, setVarA] = useState<string>('');
  const [varB, setVarB] = useState<string>('');
  const [operator, setOperator] = useState<string>('');
  const [expression, setExpression] = useState('0');

  const clearAll = () => {
    setVarA('');
    setVarB('');
    setOperator('')
  }

  const calculate = () => {

    if (!varA || !varB || !operator) {
      return;
    }

    if (operator === '/' && varB === '0') {
      setExpression(`Error!`);
      return;
    }

    const result = eval(expression);
    setExpression(result);
    // clearAll();
  }

  const onClick = (value: string) => {

    switch (value) {
      case 'AC': {
        clearAll();
        break;
      }
      case '/':
      case '*':
      case '-':
      case '+': {
        if (!varA) {
          return;
        }
        setOperator(value);
        setExpression(`${varA}${operator}${varB}`);
        break;
      }
      case '=': {
        calculate()
        break;
      }
      case '.': {
        operator ? setVarB(addDot(varB)) : setVarA(addDot(varA));
        break;
      }
      case '+/-': {
        operator ? setVarB(addSign(varB)) : setVarA(addSign(varA));
        break
      }
      default: {
        operator ? setVarB(varB + value) : setVarA(varA + value);
        setExpression(`${varA}${operator}${varB}`);
        break;
      }
    }
  }

  useEffect(() => {
    setExpression(`${varA}${operator}${varB}`)
  }, [varA, varB, operator])

  return (
    <div className={b()}>
      <div className={b('Header')}>
        <Label text={expression} />
      </div>
      <div className={b('Body')}>
        {BUTTONS.map(button => <Button value={button} handleClick={onClick}/>)}
      </div>
    </div>
  )
}

export default Calculator;