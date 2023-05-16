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

    return (
        <div>
            <ul>
                {dailyTask.map(task => (
                    <li key={task.id}>
                        {task.name}<br></br>
                        {task.urgency}
                    </li>
                ))}
            </ul>            
            <button onClick={()=> {
                setDailyTask([
                    ...dailyTask,
                    {   
                        id: nextId++, 
                        name: randomUITask.taskTitle,
                        urgengyRank: randomUITask.urgencyRank, 
                        urgency: randomUITask.urgency 
                    }
                ]);
            }}>
                Add Urgent / Important Task
            </button>
            <button onClick={() => {
                setDailyTask([
                    ...dailyTask,
                    { 
                        id: nextId++, 
                        name: randomNUITask.taskTitle,
                        urgengyRank: randomNUITask.urgencyRank, 
                        urgency: randomNUITask.urgency
                    }
                ]);
            }}>
                Add Not Urgent / Important Task
            </button>
            <button onClick={() => {
                setDailyTask([
                    ...dailyTask,
                    {
                        id: nextId++,
                        name: randomUNITask.taskTitle,
                        urgengyRank: randomUNITask.urgencyRank, 
                        urgency: randomUNITask.urgency
                    }
                ]);
            }}>
                Add Urgent / Not Important Task
            </button>
            <button onClick={() => {
                setDailyTask([
                    ...dailyTask,
                    {
                        id: nextId++,
                        name: randomNUNITask.taskTitle,
                        urgengyRank: randomNUNITask.urgencyRank, 
                        urgency: randomNUNITask.urgency
                    }
                ]);
            }}>
                Add Not Urgent / Not Important Task
            </button>
        
        </div>
    );
};