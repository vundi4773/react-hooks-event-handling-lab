// Code Keypad Component Here
import React from "react";

function Keypad (){
    function change(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" name="keypad" onChange={change} placeholder="Type Password"/>
        </div>
    )
}

export default Keypad;