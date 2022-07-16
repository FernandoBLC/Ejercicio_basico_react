import React, {useState,useEffect} from "react";
import {Link, useLocation} from "wouter"
import getMichis from "../Services/getMichis";
import Listmichis from "./Listmichis";

const Defaultsearch = ['Gatos','Perros','WebDeveloper', 'Apple', 'Carros']

export default function Menusearch (){
    const [Wordsearch, setWordsearch] = useState('');
    const [path, setLocation] = useLocation()

    const [state, setState] = useState([]);

    useEffect(function () {
        getMichis({Wordsearch:'Gatitos'}).then(state => setState(state))
    }, [state])

    const handleSubmit = evt => {
        evt.preventDefault()
        setLocation(`/gift/${Wordsearch}`)
    }

    const handleInput = evt => {
        setWordsearch(evt.target.value)
    }

    return (
        <div>
            <h2>Bienvenido a ver gifts</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Escribe el gift a buscar' value={Wordsearch} onChange={handleInput} />
                <button>MichiBusca tu Gift</button>
            </form>
            <Listmichis params={state}/>
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
