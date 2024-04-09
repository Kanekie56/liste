import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
const Themecontext=createContext("sombre");
  function Theme({children}){
    const [theme,settheme]=useState("sombre");
    const toogle=()=>{
        settheme(theme==="sombre"?"claire":"sombre");

    }
    return(
        <div>
            <Themecontext.Provider value={{theme,toogle}}>
                {children}

            </Themecontext.Provider>
        </div>
    )

};
  function   useLoko(){
    return useContext(Themecontext);
};
export default Theme;
export { useLoko};
