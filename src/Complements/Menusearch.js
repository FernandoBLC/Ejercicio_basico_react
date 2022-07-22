import React, {useState} from "react";
import {Link, useLocation} from "wouter"

import Showmichis from "./Showmichis";
import Callmichis from "./Callmichis";

const Defaultsearch = ['Gatos','Perros','WebDeveloper', 'Apple', 'Carros']

export default function Menusearch (){
    const [wordSearch, setWordsearch] = useState('')
    const [path, setLocation] = useLocation()
    const states = Callmichis()
    console.log(states)

    const handleSubmit = evt => {
        evt.preventDefault()
        setLocation(`/gift/${wordSearch}`)
    }

    const handleInput = evt => {
        setWordsearch(evt.target.value)
    }

    return (
        <div>
            <h2>Bienvenido a ver gifts</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Escribe el gift a buscar' value={wordSearch} onChange={handleInput} />
                <button>MichiBusca tu Gift</button>
            </form>
            <h2>Ultima Busqueda</h2>
            <Showmichis gifts={states} />
            <ul>
                {Defaultsearch.map((nomArray) => (
                    <li key={nomArray}>
                        <Link to={`/gift/${nomArray}`}>Ver gifts de {nomArray}</Link>
                    </li>

                ))}
            </ul>
        </div>
    )
}
