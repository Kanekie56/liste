import React from "react";
export function Pute({click,valeur,changer}){
  return(
    <div className="main">

      <input type="text" value={valeur} onChange={changer}></input>
      <button type="button" onClick={click}>add</button>
    </div>
  )

}