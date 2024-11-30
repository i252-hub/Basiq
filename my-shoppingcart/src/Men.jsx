import { useEffect, useState } from 'react';
import './styles/Products.css';
import { Link } from "react-router-dom";


const Men = ({delay}) => {
    const [productMen, setProductsMen] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(()=>{
            fetch('https://fakestoreapi.com/products', {mode: 'cors'})
            .then((response) => response.json())
            .then((data) => {
                const filteredList = data.filter((res)=> res.category == "men's clothing");
                const productLists = filteredList.slice(1,4);
                setProductsMen(productLists);
                setLoading(false);
            })
            .catch((error) =>{
                setError(error);
                setLoading(false);
            })
        }, delay)
    }, [delay])
    
    return ( 
       <>
     
       <section>
        <h1>Men`s Clothing</h1>
        {loading && <p>loading...</p>}
        {error && <p>error</p>}
        {productMen.length > 0 ? (
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
        ): (
            <p>No products found</p>
        )}
       </section>
       </>
         
    )
}

export default Men;