import React from "react";
import { useLoko } from "./component/Theme";

export function Dark({onClick}){
    const {theme}=useLoko();
    return(
        <>
        <button onClick={onClick}
        className="btn "
        style={{ backgroundColor:theme==="sombre"?"#333":"white",
        color:theme==="sombre"?"black":"white"}} >Dark</button>
        </>
    )
}