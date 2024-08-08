import { useState } from "react";
function Item({name,isPacked}){
       return (<li>{name}{isPacked && '✓'}</li>)

       /*return isPacked?<li style={{color:'red',backgroundColor:'blue'}}>{name}✓</li>:<li>{name}</li>;*/
}
export default function Counter() {
    const items=["Battery","Clothes","Sunglasses",
        "toothbrush","Laptop","wallet"
    ];
    const itemList=items.map(it=><li><b>{it}</b></li>);
    return (
    <ol>
        {itemList}
    </ol>);
    
}