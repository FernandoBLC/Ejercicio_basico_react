import {useEffect, useState} from "react";
import getMichis from "../Services/getMichis";

export default function Callmichis({giftsearch} = {giftsearch: null}){
    const [state, setState] = useState( []);
    useEffect(function () {
        const keysearch = giftsearch||localStorage.getItem('lastsearch')||'gatitos durmiendo'

        getMichis({giftsearch: keysearch})
            .then(state => {
                setState(state)
                localStorage.setItem('lastsearch', giftsearch)
            })
    },[giftsearch])

    return state
}
