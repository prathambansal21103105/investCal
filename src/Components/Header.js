import React from 'react';
import classes from './Header.module.css';
const Header=(props)=>{
    return(
        <div>
            <header className={classes.header}>
                <img src={props.logo} alt="logo" />
                <h1>Investment Calculator</h1>
            </header>
        </div>
    );
}
export default Header;