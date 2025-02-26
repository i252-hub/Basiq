import './styles/HomePage.css';
import Navbar from './Nav'
import Footer from './Footer'
const HomePage = () => {
    return (
        <>
                <div className='shadow'> </div>

        <div className='main'>
        <div className='navconmain'>
        <div className='navcon'>
        <Navbar/>
        </div>
        </div>
        <div className='textoverlay three'>
        <div className='textoverlay two'>
        <div className='textoverlay one'>
            <div className='titlehome'>
                <p className='textOne'>Ipsum Dolor</p>
            </div>
            <div className='subtitle'>
                <p className='textTwo'>Lorem ipsum</p>
            </div>
            <div className='shopbtn'>
                <button className='bttn'>Shop Now</button>
            </div>
        </div>
        </div>
        </div>
        <div className='pic'>
        </div>
       
       <section className='newCollection'>
        <div className='textcollection'>
            <div className='collectiontitle'>
                <h1>NEW COLLECTION</h1>
            </div>
            <div className='collectionsubtitle'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>
        <div className='extra'>
        <div className='collectionitemscontainer'>
            <div className='collectionitem one'>
                <div className='imagecollectioncontainer'></div>
                <div className='collectiondetails'>
                    <p className='productcollectiontitle'>Lorem Ipsum</p>
                    <p className='productcollectiondesc'>consectetur adipiscing elit</p>
                    <p className='productcollectionprice'>$95</p>
                </div>
            </div>
            <div className='collectionitem two'>
            <div className='imagecollectioncontainer'></div>
            <div className='collectiondetails'>
                    <p className='productcollectiontitle'>Lorem Ipsum</p>
                    <p className='productcollectiondesc'>consectetur adipiscing elit</p>
                    <p className='productcollectionprice'>$95</p>
                </div>
            </div>
            <div className='collectionitem three'>
            <div className='imagecollectioncontainer'></div>
            <div className='collectiondetails'>
                    <p className='productcollectiontitle'>Lorem Ipsum</p>
                    <p className='productcollectiondesc'>consectetur adipiscing elit</p>
                    <p className='productcollectionprice'>$95</p>
                </div>
            </div>
            <div className='collectionitem four'>
            <div className='imagecollectioncontainer'></div>
            <div className='collectiondetails'>
                    <p className='productcollectiontitle'>Lorem Ipsum</p>
                    <p className='productcollectiondesc'>consectetur adipiscing elit</p>
                    <p className='productcollectionprice'>$95</p>
                </div>
            </div>
            <div className='collectionitem five'>
            <div className='imagecollectioncontainer'></div>
            <div className='collectiondetails'>
                    <p className='productcollectiontitle'>Lorem Ipsum</p>
                    <p className='productcollectiondesc'>consectetur adipiscing elit</p>
                    <p className='productcollectionprice'>$95</p>
                </div>
            </div>
            <div className='collectionitem six'>
            <div className='imagecollectioncontainer'></div>
            <div className='collectiondetails'>
                    <p className='productcollectiontitle'>Lorem Ipsum</p>
                    <p className='productcollectiondesc'>consectetur adipiscing elit</p>
                    <p className='productcollectionprice'>$95</p>
                </div>
            </div>
        </div>
        </div>
       </section>

       <section className='catalog'>
        <div className='catalogcontainer'>
            <div className='catalogone'>
                {/*image*/ }
                <div className='cover'>
                    {/*show text on hover:
                    <p>Men's Catalog</p>
                    */}
                    
                </div>
            </div>
            <div className='catalogtwo'>
                 {/*image*/ }
                 <div className='cover'>
                   {/*show text on hover:
                    <p>Women's Catalog</p>
                    */}
                 </div>
            </div>
            <div className='catalogthree'>
                 {/*image*/ }
                 <div className='cover'>
                {/*show text on hover:
                    <p>Accessories' Catalog</p>
                    */}
                 </div>
            </div>
        </div>
       </section>

       <section className='newsletter'>
        <div className='newslettercontainer'>
            <div className='newstitle'>
                <p>EXCLUSIVE NEWS & CONTENT</p>
            </div>
            <div className='newssubtitle'>
            <p>Proin fringilla nisi ut nisl consectetur, ut <br></br>
            consectetur eros cursus</p>
            </div>
            <div className='newssignup'>
            <div className='newsinputcontainer'>
                <input></input>
                <div className='newsbtncontainer'>
                <button>
                    <p> Sign Up</p>
                   </button>
                </div>
               
            </div>
            </div>
        </div>
       </section>
       <Footer/>

       </div>
        </>
       
    )
}

export default HomePage;