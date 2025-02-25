import './styles/HomePage.css';
import Navbar from './Nav'

const HomePage = () => {
    return (
        <>
                <div className='shadow'> </div>

        <div className='main'>
        <div className='navconmain'>
        <div className='navcon'>
        <Navbar/>
        </div>
        </div>
        <div className='textoverlay three'>
        <div className='textoverlay two'>
        <div className='textoverlay one'>
            <div className='titlehome'>
                <p className='textOne'>Ipsum Dolor</p>
            </div>
            <div className='subtitle'>
                <p className='textTwo'>Lorem ipsum</p>
            </div>
            <div className='shopbtn'>
                <button className='bttn'>Shop Now</button>
            </div>
        </div>
        </div>
        </div>
        <div className='pic'>
        </div>
       
       <section className='newCollection'>

       </section>
       </div>
        </>
       
    )
}

export default HomePage;