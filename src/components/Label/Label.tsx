import React from "react";
import {cn} from "@bem-react/classname";
import './Label.css';

const b = cn('Label')

type PropsT = {
  text: string;
}

const Label: React.FC<PropsT> = ({text}) => {

  return (
    <div className={b()}>
      <h1>{text}</h1>
    </div>
  )
}

export default Label;