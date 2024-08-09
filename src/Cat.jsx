import {useState,useEffect} from 'react'
export default function Cat(){
    const [fact,setFact]=useState([]);
    function callAPI(){
        fetch('https://catfact.ninja/fact')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setFact([data,...fact]);
        });
    }
    useEffect(()=>{
        callAPI();
    },[]);
    const factlist= fact.map(f=><li>{f.fact}{f.length}</li>);
    return (<><button onClick={()=>callAPI()}>Call API</button>
    <ol>{factlist}</ol></>);
}