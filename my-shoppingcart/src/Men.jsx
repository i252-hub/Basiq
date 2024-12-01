import { useEffect, useState } from 'react';
import './styles/Products.css';
import { Link } from "react-router-dom";


const Men = () => {
    const [productMen, setProductsMen] = useState([]);
    const [error, setError] = useState(null);
    const [isHeadingVisible, setIsHeadingVisible] = useState(false);

    useEffect(() => {
            fetch('https://fakestoreapi.com/products', {mode: 'cors'})
            .then((response) => response.json())
            .then((data) => {
                const filteredList = data.filter((res)=> res.category == "men's clothing");
                const productLists = filteredList.slice(1,4);
                setProductsMen(productLists);
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
     
       <section>
       {isHeadingVisible && <h1>Men`s Clothing</h1>}
        {error && <p>error</p>}
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
       </>
         
    )
}

export default Men;