import { useRef,useState } from "react";
export default function Form() {
    const W_InputRef = useRef(null);
    const H_InputRef = useRef(null);
    const [bmi,setBmi]=useState(0.0);
    let bmitext="";
    if(bmi>30) bmitext="fat";
    else bmitext="normal";
    return (<>
        Weight:<input type="text" ref={W_InputRef} />
        Height:<input type="text" ref={H_InputRef} />
        <button onClick={()=>
        {
            let w=W_InputRef.current.value;
            let h=H_InputRef.current.value/100;
            setBmi(w/(h*h));
        }
        }>Calculate</button>
        <h1>BMI:{bmi}</h1>
        <h2>{bmitext}</h2>
        </>);
}