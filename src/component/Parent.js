import React, {useState} from 'react'
import Child from './Child'

function Parent () {
    const [userInput, setUserInput] = useState(' ')
    const [string, setString] = useState(' ')

    function changeHandler(input) {
        setUserInput(input)
    }

    return (
        <div>
            <input type="text" onChange={(e) => changeHandler(e.target.value)} />
            <button onClick={ () => setString(userInput)}>Set the String!</button>
            <Child userInput = {string} />
        </div>
    )
}

export default Parent