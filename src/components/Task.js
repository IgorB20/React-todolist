import React from 'react';

export default function Task(props){
    let title_style = null;

    if(props.done) title_style = {
        textDecoration: "line-through",
        color: "#979797"
    };

    return <li className="list-group-item list-group-item-action d-flex justify-content-between">
        <div>
        <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            className="ml-2 mr-2"
            checked={props.done}
            onChange={()=>props.onDone(props.position)}
            />
                <span style={title_style}>{props.title}</span>
        </div>
       
                <i 
                    class="fas fa-trash"
                    style={{cursor: "pointer"}}
                    onClick={()=>props.onRemove(props.position)}
                    />
          </li>
}
