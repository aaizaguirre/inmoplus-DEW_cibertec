import React from 'react';
import './Button.css';

function Button({texto, accion, deshabilitado, type = "button", className = ""}){

    return(
        <button 
        type = {type}
        onClick = {accion} 
        disabled = {deshabilitado}
        className = {className}>
            {texto}
        </button>
    )
}

export default Button;