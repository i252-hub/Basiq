import Nav from "./Nav";
import Men from "./Men";
import Women from "./Women";
import './styles/Products.css'
import Accessory from "./Accessory";

const Products = () =>{

 
    return ( 
       <>
       <Nav />
       <div className="products">
       <section className="Men"><Men /></section>
       <section className="Women"><Women /></section>
       <section className="Accessory"><Accessory/></section>
       </div>
     
       </>
         
    )
}

export default Products;