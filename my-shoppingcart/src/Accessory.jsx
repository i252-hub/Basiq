import { useEffect, useState } from 'react';
import './styles/Products.css';
import { Link } from "react-router-dom";
import Nav from './Nav';

const Accessory = () => {
    const [productAccess, setProductsAccess] = useState([]);
    const [error, setError] = useState(null);
    const [isHeadingVisible, setIsHeadingVisible] = useState(false);

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
       
    
    return ( 
       <>
       <Nav/>
      <div className="products">
       <section className="Accessory">
       {isHeadingVisible && <h1>Accessories</h1>}
        {error && <p>No products found</p>}
            <div className="productListAccess">
                {productAccess.map((product) => (
                    <div key={product.id} className="product">
                        <div className="accessories">
                        <Link to = {`/productinfo/${product.id}`}>
                        <img src={product.image} alt={product.title} className="accessory" />
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

export default Accessory;