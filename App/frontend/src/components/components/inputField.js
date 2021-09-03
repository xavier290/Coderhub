import React from 'react';

const InputField = (props) => {
    return(
        <input className="inputField" type={props.type}
                placeholder={props.placeholder}></input>
    )
}



export default InputField;