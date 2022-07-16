import React, {useId, useState} from "react"



export default function Searchgift () {
    const keysearch = useId()
    const [input, setInput] = useState('');
    return (
        <div>
            <label htmlFor={keysearch}>Escribe el nombre del gift a buscar</label>
            <input  value={input} onInput={e => setInput(e.target.value)}/>
        </div>
    )
    return input
}

