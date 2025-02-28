import { useEffect, useState } from 'react';
import './styles/Products.css';
import { Link } from "react-router-dom";
import Nav from './Nav';
import {PlusIcon} from '@heroicons/react/24/solid'


const Men = () => {
    const [productMen, setProductsMen] = useState([]);
    const [error, setError] = useState(null);
    const [isHeadingVisible, setIsHeadingVisible] = useState(false);

    useEffect(() => {
            fetch('https://fakestoreapi.com/products', {mode: 'cors'})
            .then((response) => response.json())
            .then((data) => {
                const filteredList = data.filter((res)=> res.category == "men's clothing");
                setProductsMen(filteredList);
            })
            .catch(() =>{
                setError('No products found')
            })
  
        const timeoutId = setTimeout(() => {
            setIsHeadingVisible(true); 
        }, 300); 

      
        return () => clearTimeout(timeoutId);
    }, []);
    
    return ( 
       <>
       <Nav />
      <div className="products">
       <section className="Men">
       {isHeadingVisible && <div className='productpagementitle'><p>MEN`S CLOTHING</p></div>}
       <div className='sortandfilter'>
        <div>
            <p>SORT</p>
            <PlusIcon/>
        </div>
       </div>
        {error && <p>No products found</p>}
            <div className="productListMen">
                {productMen.map((product) => (
                    <div key={product.id} className="product">
                        <div className="mens">
                        <Link to = {`/productinfo/${product.id}`}>
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