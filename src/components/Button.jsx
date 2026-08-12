import React from 'react';
import './Button.css';

function Button({texto, accion, deshabilitado}){

    return(
        <button onClick = {accion} disabled = {deshabilitado}>
            {texto}
        </button>
    )
}

export default Button;