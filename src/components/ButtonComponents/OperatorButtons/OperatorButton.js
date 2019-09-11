import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className= "operator-button">
      <button onClick={() => props.addOperator(props.operator.value)}>{props.operator.char}</button>
      </div>
    </>
  );
};

export default OperatorButton;
