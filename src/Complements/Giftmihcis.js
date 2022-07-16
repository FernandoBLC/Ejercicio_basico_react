import React from "react";

export default function Giftmihcis (props){
    return(
        <div>
            <h1 className="Text_title">{props.title}</h1>
            <img alt={props.title} src={props.url} />
            <p> El id del dibujo es <snap className="Id_images">{props.id}</snap></p>
        </div>
    )
}
