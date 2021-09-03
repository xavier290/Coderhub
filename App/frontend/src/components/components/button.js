import React from 'react';


const STYLES = [
'btn--red',
'btn--yellow',
'btn--orange',
'btn--black',
'btn--grey',
'btn--white'];


const SIZES = ['btn--small','btn--medium', 'btn--large'];




const Button = ({children, type, buttonStyle, buttonSize}) =>{

const checkButtonStyle= STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

const checkButtonSize= SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return(
        <button
        className = { `btn ${checkButtonStyle} ${checkButtonSize} `}   type={type} >
        {children}
        </button>
    )
}

export default Button;