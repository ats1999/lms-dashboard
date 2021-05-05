import {h} from "@bdevg/h";
export default function Question(props){
    return <div dangerouslySetInnerHTML={{__html:h(props.md)}} />;
}