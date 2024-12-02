import { useEffect, useState } from 'react';
import './styles/Products.css';
import { Link } from "react-router-dom";

const Women = () => {
    const [productWomen, setProductsWomen] = useState([]);
    const [error, setError] = useState(null);
    const [isHeadingVisible, setIsHeadingVisible] = useState(false);

    useEffect(() => {
            fetch('https://fakestoreapi.com/products', {mode: 'cors'})
            .then((response) => response.json())
            .then((data) => {
                const filteredListW = data.filter((resW)=> resW.category == "women's clothing");
                const productListsW = filteredListW.slice(1,4);
                setProductsWomen(productListsW);
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
     
       <section>
       {isHeadingVisible && <h1>Women`s Clothing</h1>}
        {error && <p>No products found</p>}
            <div className="productListWomen">
                {productWomen.map((product) => (
                    <div key={product.id} className="product">
                        <div className="womens">
                        <Link to = {`/productinfo/${product.id}`}>
                        <img src={product.image} alt={product.title} className="women" />
                        </Link>
                        
                        </div>
                       
                        </div>
                        ))}
        </div>
       </section>
       </>
         
    )
}

export default Women;