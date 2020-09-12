import React from 'react';
import Balance from '../Balance/Balance';
import './Header.css';
import Logo from '../../img/logo.svg';

export default function Header(){
    return(
        <div className="header">
            <div className="logo-wrapper">
                <img src={Logo} alt="" />
                <div>FinTrack</div>
            </div>
            <Balance />
        </div>
    )
}