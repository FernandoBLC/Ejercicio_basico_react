import React from "react";
import Showmichis from "./Showmichis";
import Callmichis from "./Callmichis";


export default function Listmichis ({params}){
    const {giftsearch} = params
    const state = Callmichis({giftsearch})
    console.log(state)
    return <div>
        {
            <Showmichis gifts={state} />
        }
    </div>
}

//import getMichis from "../Services/getMichis";

/*const {giftsearch} = params
    const [state, setState] = useState( []);


    useEffect(function () {
        getMichis({giftsearch})
            .then(state => {
                setState(state)
                console.log(state)
            })
    },[giftsearch])*/
