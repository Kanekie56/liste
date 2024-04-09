import React from "react"
export function Ajouter({task,demi,ajouteur}){
    
    return(
        <div className="d-f f-row">
            <input type="text" onChange={demi} className="form-control bg-dark text-white" />
            <button className="btn-btn-succes" value={task} onClick={ajouteur}>Ajouter</button>
        </div>
    )

}