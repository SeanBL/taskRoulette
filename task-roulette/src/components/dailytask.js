import '../styles/dailytask.css';
import { useState } from "react";
import { urgentImportantTask } from '../utils/urgentImportant';
import { urgentNotImportantTask } from '../utils/urgentNotImportant';
import { notUrgentImportantTask } from '../utils/notUrgentImportant';
import { notUrgentNotImportantTask } from '../utils/notUrgentNotImportant';

let nextId = 0;

export default function Dailytask() {

    const [dailyTask, setDailyTask] = useState([]);

    let randomUITask = urgentImportantTask[Math.floor(Math.random() * urgentImportantTask.length)];

    let randomNUITask = notUrgentImportantTask[Math.floor(Math.random() * notUrgentImportantTask.length)];

    let randomUNITask = urgentNotImportantTask[Math.floor(Math.random() * urgentNotImportantTask.length)];

    let randomNUNITask = notUrgentNotImportantTask[Math.floor(Math.random() * notUrgentNotImportantTask.length)];

    function prepareDailyTask(payload) {
        let newDailyTask = [...dailyTask, payload]
        //newDailyTask = newDailyTask.sort((a, b) => a.urgencyRank - b.urgencyRank)
        console.log(newDailyTask)
        setDailyTask(newDailyTask);
    }


    return (
        <div>
            <ul>
                {dailyTask.sort((a, b) => a.urgencyRank - b.urgencyRank).map(task => (
                    <li key={task.id}>
                        {task.name}<br></br>
                        {task.urgency}<br/>
                        {task.urgencyRank}
                    </li>
                ))}
            </ul>            
            <button onClick={()=> {
                prepareDailyTask(
    
                    {   
                        id: nextId++, 
                        name: randomUITask.taskTitle,
                        urgencyRank: randomUITask.urgencyRank, 
                        urgency: randomUITask.urgency 
                    }
                );
            }}>
                Add Urgent / Important Task
            </button>
            <button onClick={() => {
                prepareDailyTask(
                    { 
                        id: nextId++, 
                        name: randomNUITask.taskTitle,
                        urgencyRank: randomNUITask.urgencyRank, 
                        urgency: randomNUITask.urgency
                    });
            }}>
                Add Not Urgent / Important Task
            </button>
            <button onClick={() => {
                prepareDailyTask(
                    {
                        id: nextId++,
                        name: randomUNITask.taskTitle,
                        urgencyRank: randomUNITask.urgencyRank, 
                        urgency: randomUNITask.urgency
                    }
                );
            }}>
                Add Urgent / Not Important Task
            </button>
            <button onClick={() => {
                prepareDailyTask(
                    {
                        id: nextId++,
                        name: randomNUNITask.taskTitle,
                        urgencyRank: randomNUNITask.urgencyRank, 
                        urgency: randomNUNITask.urgency
                    }
                );
            }}>
                Add Not Urgent / Not Important Task
            </button>
        
        </div>
    );
};