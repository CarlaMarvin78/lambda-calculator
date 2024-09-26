import React from "react";

const OperatorButton = props => {
  return (
    <>
    <button onClick={()=>props.handler(props.operator.value)}>{props.operator.char}</button>    
    </>
  );
};
export default OperatorButton;
