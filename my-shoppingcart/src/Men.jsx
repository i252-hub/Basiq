import { useEffect, useState } from 'react';
import './styles/Products.css';
import { Link } from "react-router-dom";
import Nav from './Nav';
import {PlusIcon, XMarkIcon} from '@heroicons/react/24/solid'


const Men = () => {
    const [productMen, setProductsMen] = useState([]);
    const [error, setError] = useState(null);
    const [isHeadingVisible, setIsHeadingVisible] = useState(false);
    const [checklist, setChecklist] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [checkedFilters, setCheckedFilters] = useState({
        price: false,
        rating: false,
        stock: false
    });

    useEffect(() => {
            fetch('https://fakestoreapi.com/products', {mode: 'cors'})
            .then((response) => response.json())
            .then((data) => {
                const filteredList = data.filter((res)=> res.category == "men's clothing");
                setProductsMen(filteredList);
                setFilteredProducts(filteredList);
            })
            .catch(() =>{
                setError('No products found')
            })
  
        const timeoutId = setTimeout(() => {
            setIsHeadingVisible(true); 
        }, 300); 

      
        return () => clearTimeout(timeoutId);
    }, []);

 

    useEffect(() => {
        let updatedProducts = [...productMen];

        if (checkedFilters.price) {
            updatedProducts.sort((a, b) => a.price - b.price); 
        }
        if (checkedFilters.rating) {
            updatedProducts.sort((a, b) => b.rating.rate - a.rating.rate); 
        }
        if (checkedFilters.stock) {
            updatedProducts.sort((a, b) => b.rating.count - a.rating.count); 
        }

        setFilteredProducts(updatedProducts);
    }, [checkedFilters, productMen]);

    const Checklist = () => {
        setChecklist(true);
    }

    const handleCheckboxChange = (filter) => {
        setCheckedFilters(prev => ({
            ...prev,
            [filter]: !prev[filter] 
        }));
    };

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
       <section className="Men">
       {isHeadingVisible && 
       <>
       <div className='productpagementitle'><p>MEN`S CLOTHING</p></div>
       <div className='sortandfilter'>
        <div className='filter'>
        {checkedFilters.price && (
        <div className='filtercategory price'>
        <p>PRICE</p>
        <XMarkIcon aria-label="Close filter" className='iconplus'/>
        </div>
        )}
        {checkedFilters.rating && (
        <div className='filtercategory rating'>
        <p>RATING</p>
        <XMarkIcon aria-label="Close filter" className='iconplus'/>
        </div>
        )}
        {checkedFilters.stock && (
        <div className='filtercategory stock'>
        <p>STOCK</p>
        <XMarkIcon  aria-label="Close filter" className='iconplus'/>
        </div>
        )}
        </div>
       <div className='sfcontainer'>
           <p>SORT BY</p>
           <PlusIcon  aria-label="Open sort and filter options"  onClick={Checklist} className='iconplus'/>
       </div>
       {checklist && (
            <div className='mencl'>
                <div className='checkcon'>
                <input 
                 className='cb'
                 type="checkbox"
                 checked={checkedFilters.price}
                 onChange={() => handleCheckboxChange("price")}
                 name="price"
                  />
                <label>Price</label>
                </div>
               
            <br />
            <div className='checkcon'>
            <input 
            className='cb' 
            type="checkbox"
            checked={checkedFilters.rating}
            onChange={() => handleCheckboxChange("rating")}
            name="rating"
             /> 
            <label>Rating</label>
                </div>

                <br/>

            <div className='checkcon'>
            <input 
            className='cb' 
            type="checkbox"
            checked={checkedFilters.stock}
            onChange={() => handleCheckboxChange("stock")} 
            name="stock"
            /> 
            <label>Stock</label>
                </div>

                
               
  
            </div>
       )}
      
      </div>
      </>
       }
       
        {error && <p role="alert" aria-live="polite">No products found</p>}
            <div className="productListMen">
                {filteredProducts.map((product) => (
                    <div key={product.id} className={`product product-${product.id}`}>
                        <div className="mens">
                        <Link className='menlink' to = {`/productinfo/${product.id}`}>
                        <img src={product.image} alt={product.title} className="men" />
                        </Link>
                       
                        </div>
                       
                        </div>
                        ))}
        </div>
       </section>
       </div>
       </>
         
    )
}

export default Men;