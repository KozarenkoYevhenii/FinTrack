import React from 'react';

function Button({name, content, handler}) {
    return (
        <button className={name} onClick={handler}>{content}</button>
    )
}

export default Button;