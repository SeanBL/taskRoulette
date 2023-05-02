import '../styles/mainpage.css';
import rouletteIcon from '../img/rouletteIcon.png';
import checklist from '../img/checklist.png';
import shopping from '../img/shopping.png';

export default function Mainpage() {
    const buttons = [
        {
            iconImg: rouletteIcon,
            title: "Daily Tasks"
        },
        {
            iconImg: checklist,
            title: "Task List"
        },
        {
            iconImg: shopping,
            title: "Shopping List"
        }

    ]

    return (
        <div className='flex-container-main'>
            <div className='flex-container-title'>
                <div className='mainpageTitle'>Task</div>
                <div className='mainpageTitle2'>Roulette</div>
            </div>
            
            <div className='flex-container-btns'>
                {buttons.map(buttonList=> {
                    const {iconImg, title} = buttonList;

                    return (
                        <div>
                            <img className='iconImg' src={iconImg} />
                            <div className='button-title'>{title}</div>
                        </div>
                    )
                })}
            </div>
            <button className='task-btn'>Add New Task</button>
            
            

        </div>
    );
}