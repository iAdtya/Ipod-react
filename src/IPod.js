import React from "react";
import IPodButton from "./IPodButton";
import IPodDisplay from "./IPodDisplay"


export default function Container(props) {
  return (
    <>
      <IPodButton {...props} />
      <IPodDisplay {...props}/>
    </>
  );
}
