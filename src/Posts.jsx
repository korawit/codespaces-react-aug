import { useParams,useLocation } from "react-router-dom";
export default function Posts(){
    const {id,name}=useParams();
    const urlstring =new URLSearchParams(useLocation().search);
    const fname=urlstring.get("fname");
    const lname=urlstring.get("lname");
    return (<>You send id: {id} and {name}<br/>
    Your name: {fname} {lname}</>);
}