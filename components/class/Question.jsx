import {h} from "@bdevg/h";
export default function Question(props){
    return <div className="tui-editor-contents" dangerouslySetInnerHTML={{__html:h(props.md)}} />;
}