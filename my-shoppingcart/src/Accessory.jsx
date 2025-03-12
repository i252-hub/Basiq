import { useEffect, useState } from 'react';
import './styles/Products.css';
import { Link } from "react-router-dom";
import Nav from './Nav';
import {PlusIcon, XMarkIcon} from '@heroicons/react/24/solid'

const Accessory = () => {
    const [productAccess, setProductsAccess] = useState([]);
    const [error, setError] = useState(null);
    const [isHeadingVisible, setIsHeadingVisible] = useState(false);
    const [checklist, setChecklist] = useState(false);

    useEffect(() => {
            fetch('https://fakestoreapi.com/products', {mode: 'cors'})
            .then((response) => response.json())
            .then((data) => {
                const filteredListA = data.filter((resA)=> resA.category == "jewelery");
                setProductsAccess(filteredListA);
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
    
    return ( 
       <>
       <Nav/>
      <div className="products">
       <section className="Accessory">
       {isHeadingVisible && 
         <>
         <div className='productpagementitle'><p>ACCESSORIES`</p></div>
         <div className='sortandfilter'>
         <div className='filter'>
        <div className='filtercategory'>
        <p>PRICE</p>
        <XMarkIcon aria-label="Close filter"  className='iconplus'/>
        </div>
        <div className='filtercategory'>
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
             <PlusIcon onClick={Checklist}  aria-label="Open sorting options" className='iconplus'/>
         </div>

         {!checklist && (
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
            <div className="productListAccess">
                {productAccess.map((product,index) => (
                    <div key={product.id} className={`product ${index + 1}`}>
                        <div className="accessories">
                        <Link to = {`/productinfo/${product.id}`}>
                        <img src={product.image} alt={product.title} className="accessory" />
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

export default Accessory;