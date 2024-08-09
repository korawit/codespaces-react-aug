import { useState } from "react";
function Item({name,isPacked}){
       return (<li>{name}{isPacked && '✓'}</li>)

       /*return isPacked?<li style={{color:'red',backgroundColor:'blue'}}>{name}✓</li>:<li>{name}</li>;*/
}
export default function Counter() {
    const [keywords,setKeywords]=useState("");
    const items=[{id:0,name:"Battery"},
                 {id:1,name:"Clothes"},
                 {id:2,name:"Sunglasses"},
                 {id:3,name:"toothbrush"},
                 {id:4,name:"Laptop"},
                 {id:5,name:"wallet"}
    ];
    const filterItems=items.filter(it=>it.name.toLowerCase().match(keywords.toLowerCase()));
    const itemList=filterItems.map(it=><li key={it.id}><b>{it.name}</b></li>);
    return (<>
    <input type="text" value={keywords} onChange={e=>setKeywords(e.target.value)}/>
    <ol>
        {itemList}
    </ol></>);
    
}