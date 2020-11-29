import React from "react";

function Button(props) {
  let myClick = function () {
    alert("button was clicked!");
  };
  return (
    <button id={props.id} className={props.anyAttribute} onClick={myClick}>
      {" "}
      Press Me
    </button>
  );
}

export default Button;
