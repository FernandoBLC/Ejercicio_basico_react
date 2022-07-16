import React, {useEffect, useState} from "react";

import getMichis from "../Services/getMichis";
import Showmichis from "./Showmichis";


export default function Listmichis ({params}){
    const {giftsearch} = params
    const [state, setState] = useState([]);

    useEffect(function () {
        getMichis({giftsearch}).then(state => setState(state))
    }, [state])

    return <div>
        {
            <Showmichis state={state} />
        }
    </div>
}
