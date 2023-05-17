import '../styles/mainpage.css';
import {useEffect} from "react"
import rouletteIcon from '../img/rouletteIcon.png';
import checklist from '../img/checklist.png';
import shopping from '../img/shopping.png';

export default function Mainpage() {

    // Run useEffect whenever component rerenders
    // useEffect(()=>{

    // })

    // Run once after the component finishes rendering
    useEffect(()=>{
        
        fetch("http://localhost:3001/api/users") // More practical for server migration
        fetch("http://localhost:3000/api/users") // More practical for server migration
        fetch("/api/users") // More practical for server migration
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
        })

    }, [])

    // Run whenever one of these variables change values
    // useEffect(()=>{

    // }, [foo,tee,goo])

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