import React from "react";
import { useTheme } from "./Theme"

const Button=()=>{
    const {theme,demo}=useTheme();
    return( 
        <div style={{
            padding:"20px",
            backgroundColor:theme==="blanc"?"#000":"grey",
            color:theme==="blanc"?"#fff":"black",
            fontFamily:"sans-serif",
            textTransform:"uppercase"
        }}>
            <p>mon amie mon avenir est un tableau c'est mes choix qui les dessine</p>
 <input type="button" value={theme} onClick={demo}/>
        </div>


    )
}
export default Button;