import React, { useState } from 'react';
import Task from './Task';

export default function TasksList(props) {
    const [tasks, setTasks] = useState([]);

    function addTask(title){
        setTasks([...tasks, {title: title, done: false}])
    }

    function removeTask(position){
        let auxiliar = tasks;
        auxiliar.splice(position, 1);
        setTasks([...auxiliar]);  
    }

    function handleDoneTask(position){
        let auxiliar = tasks;
        auxiliar[position].done = !auxiliar[position].done;
        setTasks([...auxiliar]);  
    }


    return <div style={{ width: "50vw", margin: "0 auto" }} className="mt-5">
        <AddTaskInput
            onEnterPressed={addTask}
        />
        <ul class="list-group" >
            {
                tasks.map((task, index) => 
                    <Task
                        title={task.title}
                        done={task.done}
                        position={index}
                        onDone={handleDoneTask}
                        onRemove={removeTask}
                    />    
                )
            }
        </ul>
    </div>

}


function AddTaskInput(props){
    const [text, setText] = useState("");

    function clearInput(){
        setText("");
    }

    function handleInputChange(ev){
        setText(ev.target.value)
    }

    return <div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1"><i class="fas fa-plus"></i></span>
    </div>
    <input
        type="text"
        class="form-control"
        placeholder="Adicione uma nova tarefa"
        aria-label="Adicione uma nova tarefa"
        aria-describedby="basic-addon2"
        value={text}
        onChange={(ev)=>{
            handleInputChange(ev);
        }}
        onKeyUp={(ev)=>{
            if(ev.key == "Enter"){
                props.onEnterPressed(ev.target.value);
                clearInput();
            };
        }
            
        }
        ></input>
</div>
}