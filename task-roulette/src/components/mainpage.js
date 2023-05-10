import '../styles/mainpage.css';
import rouletteIcon from '../img/rouletteIcon.png';
import checklist from '../img/checklist.png';
import shopping from '../img/shopping.png';

export default function Mainpage() {

    return (
        <div className='flex-container-main'>
            <div className='flex-container-title'>
                <div className='mainpageTitle'>Task</div>
                <div className='mainpageTitle2'>Roulette</div>
            </div>
            
            <a style={{margin: "auto"}} href='/newtask'>
                <button className='task-btn'>Add New Task</button>
            </a>
        </div>
    );
}