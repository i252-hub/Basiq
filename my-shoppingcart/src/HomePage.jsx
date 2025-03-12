import './styles/HomePage.css';
import Navbar from './Nav'
import Footer from './Footer'
import Men from './assets/men.jpg'
import Women from './assets/women.jpg'
import Accessories from './assets/accessory.jpg'
import { useEffect, useState } from 'react';
import { ArrowRightCircleIcon, XMarkIcon} from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import modaldesign from './assets/maiil.png';


const HomePage = () => {
const [error, setError] = useState(null);
const [items, setItems] = useState([]);
const [news, setNews] = useState("");
const [modal, setModal] = useState(false);

const OpenModal = () => {
    setModal(true);
}
const HandleNews = (e) => {
    setNews(e.target.value)
}

useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products'); 
        const data = await response.json();
        const limitedItems = data.slice(0, 6);
        setItems(limitedItems); 
      } catch (error) {
        setError('No products found');
      }
    };
    fetchItems();
}, []);


    return (
        <>
                <div className='shadow' id="main"> </div>

        <div className='main' >
        <div className='navconmain'>
        <div className='navcon'>
        <Navbar />
        </div>
        </div>
        <div className='textoverlay three'>
        <div className='textoverlay two'>
        <div className='textoverlay one'>
            <div className='titlehome' >
                <p className='textOne'>Ipsum Dolor</p>
            </div>
            <div className='subtitle'>
                <p className='textTwo'>Lorem ipsum</p>
            </div>
            <div className='shopbtn'>
                <button aria-label="Shop Now" className='bttn'>Shop Now</button>
            </div>
        </div>
        </div>
        </div>
        <div className='pic'>
        </div>
       
       <section className='newCollection'>
        <div className='textcollection'>
            <div className='collectiontitle'>
                <h1>NEW COLLECTION</h1>
            </div>
            <div className='collectionsubtitle'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>
        <div className='extra'>
        <div className='collectionitemscontainer'>
        {items.map((item, index) => {
            const splitText = item.description.split(' '); 
            const firstWord = splitText[0] || ''; 
            const secondWord = splitText[1] || ''; 
            return (
        <div key={index} className={`collectionitem ${index + 1}`}>
          <div className="imagecollectioncontainer">
            <img className='imgs' src={item.image} alt={item.title} /> 
          </div>
          <div className="collectiondetails">
            <p className="productcollectiontitle">{item.title}</p>
            <div className='elipsis'>
            <p className="productcollectiondesc"><span>{firstWord} <span>{secondWord}</span>... </span>
            
            </p>
            </div>
          
            <p className="productcollectionprice">${item.price}</p>
          </div>
        </div>
        )})}
       
        </div>
        </div>
       </section>

       <section className='catalog'>
        <div className='catalogcontainer'>
            <div  className='catalogone' id="themen">
                <img className="imgmen"  src={Men} alt="men's catalog"/>
                <div className='cover'>
                    
                    <p>Men's <br></br> Catalog</p>
                   
                    
                </div>
                <div className='arrowcontainer'>
                 <Link to="/men"><ArrowRightCircleIcon  strokeWidth={1} className='arrow'/></Link>
                </div>
            </div>
            <div className='catalogtwo' id="thewomen">
            <img className="imgwomen" src={Women} alt="women's catalog"/>
            <div className='cover'>
                  
                    <p>Women's  <br></br> Catalog</p>
                  
                 </div>
                 <div className='arrowcontainer'>
                  <Link to="/women"><ArrowRightCircleIcon  strokeWidth={1} className='arrow'/></Link>
                </div>
            </div>
            <div className='catalogthree' id="accessories">
            <img className="imgaccessory" src={Accessories} alt="accessories' catalog"/>
                 <div className='cover'>
                    <p>Accessories'  <br></br> Catalog</p>
                    
                 </div>
                 <div className='arrowcontainer'>
                  <Link to="/accessory"><ArrowRightCircleIcon strokeWidth={1} className='arrow'/></Link>
                </div>
            </div>
        </div>
       </section>
       
       <section className='newsletter'>
       <div className='newscover'> </div>
        <div className='newslettercontainer'>
            <div className='newstitle'>
                <p>EXCLUSIVE NEWS & CONTENT</p>
            </div>
            <div className='newssubtitle'>
            <p>Proin fringilla nisi ut nisl consectetur, ut <br></br>
            consectetur eros cursus</p>
            </div>
           
            <div className='newssignup'>
            
            <div className='newsinputcontainer'>
                <input 
                className='newsinput'
                type="email"
                value= {news}
                onChange={HandleNews}
                aria-required="true"
                ></input>
                <div className='newsbtncontainer'>
                <button onClick={OpenModal}>
                    <p> Sign Up</p>
                   </button>
                </div>
                {modal && (
                    <div className="modal"  role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-desc">
                        <div className='close'>
                            <XMarkIcon onClick={()=> setModal(false)} className='closebtn'/>
                        </div>
                        <img className='md' src={modaldesign} alt="Newsletter confirmation image"/>
                        <div className="modal-content">
                            <p className="title-modal">Thank you for signing up!</p>
                            <p>A confirmation letter has been sent to your email.
                                Check your inbox.
                            </p>
                        </div>
                    </div>
                )}
               
            </div>
            </div>
        </div>
       
       </section>
      
       <Footer/>

       </div>
        </>
       
    )
}

export default HomePage;