import { useEffect, useState } from 'react';
import './styles/Products.css';
const Women = ({delay}) => {
    const [productWomen, setProductsWomen] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(()=>{
            fetch('https://fakestoreapi.com/products', {mode: 'cors'})
            .then((response) => response.json())
            .then((data) => {
                const filteredListW = data.filter((resW)=> resW.category == "women's clothing");
                const productListsW = filteredListW.slice(1,4);
                setProductsWomen(productListsW);
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
        <h1>Women`s Clothing</h1>
        {loading && <p>loading...</p>}
        {error && <p>error</p>}
        {productWomen.length > 0 ? (
            <div className="productListWomen">
                {productWomen.map((product) => (
                    <div key={product.id} className="product">
                        <div className="womens">
                        <img src={product.image} alt={product.title} className="women" />
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

export default Women;