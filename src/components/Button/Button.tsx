import React from "react";
import {cn} from "@bem-react/classname";
import './Button.css'
const b = cn('Button');

type PropsT = {
  value: string;
  handleClick: (value: string) => void;
}

const Button: React.FC<PropsT> = ({value, handleClick}) => {

  const onClick = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    handleClick(value);
  }

  return (
    <div className={b()}>
      <input className={b('Input', {size: value === '0' ? 'l' : 'm'})} type="button" value={value} onClick={onClick} />
    </div>
  )
}

export default Button;