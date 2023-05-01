import roulette from '../img/roulette.png';
import '../styles/home.css';
function Home() {
    return (
        <div className='flex-container'>
            <div className='title'>Task Roulette</div>
            <div>
                <img className='rouletteImg' src={roulette} alt='roulette wheel'/>
            </div>
            <a href='/mainPage'>
                <button className='signInBtn'>Sign In</button>
            </a>
            
            <button className='createAccountBtn'>Create Account</button>
        </div>
    );
}

export default Home;