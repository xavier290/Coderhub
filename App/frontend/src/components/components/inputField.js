import React from 'react';


const SIZES=["inputField--small", "inputField--medium", "inputField--large"]

const InputField = ({type, placeholder, inputSize}) => {

const checkInputSize = SIZES.includes(inputSize) ? inputSize : SIZES[1]

    return(
        <input className={`inputField ${checkInputSize} `} type={type}
                placeholder={placeholder}>
        </input>
    )
}



export default InputField;