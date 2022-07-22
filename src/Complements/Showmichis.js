import React from "react";
import Giftmihcis from "./Giftmihcis";

export default function Showmichis ({gifts}) {
    return <div>
            {
                gifts.map(({id, title, url}) =>
                    <Giftmihcis
                        key={id}
                        title={title}
                        id={id}
                        url={url}
                    />
                )
            }
        </div>

}
