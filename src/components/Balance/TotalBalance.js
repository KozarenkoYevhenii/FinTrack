import React from 'react';

export default function TotalBalance(props){
    console.log(props.total);
    return(
        <div className="total">$ {props.total}</div>
    )
}