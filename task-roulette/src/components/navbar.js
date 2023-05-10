import '../styles/navbar.css';
import rouletteIcon from '../img/rouletteIcon.png';
import checklist from '../img/checklist.png';
import shopping from '../img/shopping.png';

export default function Navbar()  {
    const buttons = [
        {
            iconImg: rouletteIcon,
            title: "Daily Tasks",
            link: "/dailytask"
        },
        {
            iconImg: checklist,
            title: "Task List",
            link: "/tasklist"
        },
        {
            iconImg: shopping,
            title: "Shopping List",
            link: "/shoppinglist"
        }
    ]

    return(
        
        <div className='flex-container-main'>
            <div className='flex-container-btns'>
                {buttons.map(buttonList=> {
                    const {iconImg, title, link} = buttonList;

                    return (
                        <div>
                            <a href={link}><img className='iconImg' src={iconImg} /></a>
                            <a href={link}><div className='button-title'>{title}</div></a>
                            
                        </div>
                    )
                })};
            </div>
        </div>
        
       
    )            
};
