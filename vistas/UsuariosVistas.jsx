import React from "react";
import './UsuariosVistas.css'

function Usuariosvista ({len}){
    
    return(
        <div className="lenvista">
            <h1> {len.nNombre}</h1>
            <p> {len.nCargo}</p>
            <img src={len.image} alt={len.image + "image"}></img>

            
        </div>
    )

}

export default Usuariosvista;