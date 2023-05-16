import '../styles/newtask.css';
import { useState, useRef } from "react";
export default function Newtask() {
    //use state for entering task title
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    //use state for entering deadline
    const [deadline, setDeadline] = useState('');
    const dateInputRef = useRef(null);
    const handleChangeDeadline = (e) => {
        setDeadline(e.target.value);
    };

    const [urgencyState, setUrgencyState] = useState("");

    const urgentBox = [
        {
            title: "Urgent / Important",
            subtitle: "Important deadlines with consequences",
            classN: "grid-item1"  
        },
        {
            title: "Not Urgent / Important",
            subtitle: "Mid to long term goals with a plan of action",
            classN: "grid-item2"
        },
        {
            title: "Urgent / Not Important",
            subtitle: "Urgent tasks that are not important. Busy work.",
            classN: "grid-item3"
        },
        {
            title: "Not Urgent / Not Important",
            subtitle: "Tasks with little to no value. Consider deleting.",
            classN: "grid-item4"
        }
    ]

    //use state for checkboxes
    const [checkbox, setCheckbox] = useState(
        new Array(urgentBox.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckbox = checkbox.map((item, index) =>
        index === position ? !item : item
        );
        setCheckbox(updatedCheckbox);

        const checkboxIndex = updatedCheckbox.indexOf(true);

        setUrgencyState(urgentBox[checkboxIndex].title);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        console.log(deadline);
        console.log(checkbox);
        console.log(urgencyState);
    }

    return (
        <div className='flex-container-newtask'>
            <h1 className='newtask-title'>Add New Task</h1>
            <form style={{margin: "auto"}} onSubmit={handleSubmit}>
                    <input 
                        className="task-input"
                        type='text'   
                        placeholder="Add your task here" 
                        name="task"
                        value={inputs.task}
                        onChange={handleChange}
                    />
                <div style={{margin: "0 0 1em 0"}}>Select the urgency and importance of this task?</div>
                
                <div className='grid-container'>
                    {urgentBox.map((urgency, index) => {
                        const {title, subtitle, classN} = urgency;

                        return (
                            <div >
                                <div className={classN}>
                                    <div className='urgency-title'> 
                                        {title} 
                                        <input
                                            id={`custom-checkbox-${index}`} 
                                            className='checkbox' 
                                            type='checkbox'
                                            name={title}
                                            value={title}
                                            checked={checkbox[index]}
                                            onChange={() => handleOnChange(index)}
                                        />
                                    </div>
                                    <div className='urgency-subtitle'>{subtitle}</div>  
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='optional-deadline'>
                    <span>Add an optional deadline for your task</span>
                    <input
                        className='deadline-input'
                        type='date'
                        onChange={handleChangeDeadline}
                        ref={dateInputRef}
                    />
                    <p>Deadline on: {deadline}</p>
                </div>

                <div className='textarea-box'>
                    <div>(Optional) Include task details</div>
                    <textarea
                        rows='10'
                        name="taskDetails"
                        value={inputs.taskDetails}
                        onChange={handleChange}
                    />
                    <button className='schedule-btn' type='submit'>Schedule Task</button>
                </div>
                
            </form>
            
        </div>
    );
};