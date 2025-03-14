import { useEffect, useState } from 'react';
import './styles/Products.css';
import { Link } from "react-router-dom";
import Nav from './Nav';
import {PlusIcon, XMarkIcon} from '@heroicons/react/24/solid'

const Women = () => {
    const [productWomen, setProductsWomen] = useState([]);
    const [error, setError] = useState(null);
    const [isHeadingVisible, setIsHeadingVisible] = useState(false);
    const [checklist, setChecklist] = useState(false);

    useEffect(() => {
            fetch('https://fakestoreapi.com/products', {mode: 'cors'})
            .then((response) => response.json())
            .then((data) => {
                const filteredListW = data.filter((resW)=> resW.category == "women's clothing");
                setProductsWomen(filteredListW);
            })
            .catch(() =>{
                setError('No products found');
            })
            const timeoutId = setTimeout(() => {
                setIsHeadingVisible(true); 
            }, 300); 
    
          
            return () => clearTimeout(timeoutId);
        }, []);

        const Checklist = () => {
            setChecklist(true);
        }

        useEffect(() => {
            const handleClickOutside = (event) => {
                if (checklist && !document.querySelector(".mencl")?.contains(event.target) &&
                    !document.querySelector(".sfcontainer")?.contains(event.target)) {
                    setChecklist(false);
                }
            };
        
            document.addEventListener("mousedown", handleClickOutside);
        
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [checklist]);
    
    return ( 
       <>
              <Nav />
        <div className="products">
       <section className="Women">
       {isHeadingVisible && 
        <>
        <div className='productpagementitle'><p>WOMEN`S CLOTHING</p></div>
        <div className='sortandfilter'>
        <div className='filter'>
        <div className='filtercategory'>
        <p>PRICE</p>
        <XMarkIcon aria-label="Close filter"  className='iconplus'/>
        </div>
        <div className='filtercategory rating'>
        <p>RATING</p>
        <XMarkIcon aria-label="Close filter" className='iconplus'/>
        </div>
        <div className='filtercategory'>
        <p>STOCK</p>
        <XMarkIcon aria-label="Close filter" className='iconplus'/>
        </div>
        </div>
        <div className='sfcontainer'>
            <p>SORT BY</p>
            <PlusIcon onClick={Checklist} aria-label="Open sorting options" className='iconplus'/>
        </div>
        {checklist && (
            <div className='mencl'>
                <div className='checkcon'>
                <input className='cb' type="checkbox" />
                <label>Price</label>
                </div>
               
            <br />
            <div className='checkcon'>
            <input className='cb' type="checkbox" /> 
            <label>Rating</label>
                </div>

                <br/>

            <div className='checkcon'>
            <input className='cb' type="checkbox" /> 
            <label>Stock</label>
                </div>

                
             
            </div>
       )}
       </div>
       </>
       }
        {error && <p role="alert">No products found</p>}
        <div className='flex'>
            <div className="productListWomen">
                {productWomen.map((product,index) => (
                    <div key={product.id} className={`product ${index + 1}`}>
                        <div className='womens'>
                        <Link className="womenlink" to = {`/productinfo/${product.id}`}>
                        <img src={product.image} alt={product.title} className="women" />
                        </Link>
                        
                      </div>
                       
                        </div>
                        ))}
        </div>
        </div>
       </section>
       </div>
       </>
         
    )
}

export default Women;