import React from "react";

export default function Terminal(props) {
  return <div className="terminal"><div>{props.result===""?"Terminal":props.result}</div></div>;
}
