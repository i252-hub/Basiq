import './styles/HomePage.css';
import jewelry from './assets/jewelry.jpg';
import Nav from './Nav'


const HomePage = () => {
    return (
        <>
        <Nav />
        <div className='pic'>
            
        <img src={jewelry} className='jewelry' alt = 'jewelry'/>
        
        </div>
         
        </>
       
    )
}

export default HomePage;