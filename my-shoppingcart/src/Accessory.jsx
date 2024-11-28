import { useEffect, useState } from 'react';
import './styles/Products.css';
const Accesory = ({delay}) => {
    const [productAccess, setProductsAccess] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(()=>{
            fetch('https://fakestoreapi.com/products', {mode: 'cors'})
            .then((response) => response.json())
            .then((data) => {
                const filteredListA = data.filter((resA)=> resA.category == "jewelery");
                const productListsA = filteredListA.slice(1,4);
                setProductsAccess(productListsA);
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
        <h1>Accessories</h1>
        {loading && <p>loading...</p>}
        {error && <p>error</p>}
        {productAccess.length > 0 ? (
            <div className="productListAccess">
                {productAccess.map((product) => (
                    <div key={product.id} className="product">
                        <div className="accessories">
                        <img src={product.image} alt={product.title} className="accessory" />
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

export default Accesory;