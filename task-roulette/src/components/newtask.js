import '../styles/newtask.css';
import { useState } from "react";
export default function Newtask() {
    const [task, setTask] = useState('');
    return (
        <div className='flex-container-newtask'>
            <h1 className='newtask-title'>Add New Task</h1>
            <form style={{margin: "auto"}}>
                <label >
                    <input 
                        className="task-input"
                        type='text'   
                        placeholder="Add your task here" 
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                </label>
                <label>
                    <div>
                        <input
                            type='checkbox'
                        />
                    </div>
                </label>
            </form>
            
        </div>
    );
};