import {useState } from 'react';
import './styles/Contact.css'
import basiqcontact from './assets/contactbasiq.jpg';
import {MapPinIcon, PhoneIcon, AtSymbolIcon, GlobeAltIcon, XMarkIcon} from '@heroicons/react/24/outline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import Footer from './Footer';
const Contact = () => {
    const [value, setValue] = useState({
        fullName: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
    
    const [ty, setTy] = useState(false);

    const setContact = (e) => {
        const { name, value } = e.target;
    setValue({ 
      ...value, 
      [name]: value,
    });
    }

    const Submit = (e) => {
        e.preventDefault();
        setTy(true);
    }

    const CloseModal = () => {
        setTy(false);
        setValue({
            fullName: '',
            phone: '',
            email: '',
            subject: '',
            message: '',
          })
    }
    return (
        <>

<div className={`contactcontainer ${ty ? 'blurred' : ''}`}>
<div className="firstcontactcon">
    <img className='basiqcontact' src = {basiqcontact}/>
    <div className='basiqshadow'>
    </div>
    <div className='shadowz' id = "contact">
            <p className='shadowtitle'>Get in Touch</p>
            <p className='shadowsubtitle'>Lorem ipsum dolor sit amet. Consectetur
                adipiscing elit. Nunc accumsan sem ut ligula scelerisque.
            </p>
        </div>
</div>
<div className="secondcontactcon">
  
   
  
</div>
<div className="contactform">
    <div className='crel'>
<div className='cdetails'>
<div className='mess'><p className='drop'>Drop a Message</p></div>
<form onSubmit={Submit}>
    <div className="thefirst">
        <div className='firstsec'>
        <fieldset>
            <legend>Full Name</legend>
            <input 
            name="fullName"
             required
            value={value.fullName}
            onChange={setContact}
            className="contactinput"/>
        </fieldset>
        <fieldset>
            <legend>Phone</legend>
            <input  
            name="phone"
             value={value.phone}
             required
             onChange={setContact}
            className="contactinput"/>
        </fieldset>
        </div>
       <div className="secondsec">
       <fieldset>
            <legend>Email</legend>
            <input
            name="email"
             required
            type="email"
             value={value.email}
             onChange={setContact}
              className="contactinput"/>
        </fieldset>
        <fieldset>
            <legend>Subject</legend>
            <input
            name="subject"
             required
             value={value.subject}
             onChange={setContact}
              className="contactinput"/>
        </fieldset>
       </div>
       
    </div>
    <div className='secondform'>
    <fieldset>
    <legend>Message</legend>
        <textarea
        name="message"
         required
         value={value.message}
         onChange={setContact}
        ></textarea>
    </fieldset>
    </div>
    <div className="contacttbtn">
        <button type='submit' className="sendbtn">Send Message</button>
    </div>
</form>
</div>
<div className='cbg'>
    <div className='contactinfo'>
        <p>Contact Information</p>
    </div>
    <div className='mapcon'>
        <MapPinIcon className='contacticon'/>
        <p>123 Ipsum Street, Lorem Ipsum Dolor, 1432</p>
    </div>
    <div className='phonecon'>
        <PhoneIcon className='contacticon'/>
        <p>+123456789</p>
    </div>
    <div className='atcon'>
        <AtSymbolIcon className='contacticon'/>
        <p>loremipsum@sample.com</p>
    </div>
    <div className='globecon'>
        <GlobeAltIcon className='contacticon'/>
        <p>www.loremipsum.com</p>
    </div>
    <div className="contactsocials">
        <a href="https://www.facebook.com/"> <FacebookIcon className='socialicon' sx={{ fontSize: '16px' }} /></a>
        <a href="https://www.instagram.com/">  <InstagramIcon className='socialicon' sx={{ fontSize: '16px' }}/></a>
        <a href="https://x.com/">  <XIcon className='socialicon' sx={{ fontSize: '16px' }}/></a>
      
      
    </div>
</div>
</div>
</div>
</div>
{ty && (
   
<div className='tymodal'>
    <div className="topmodal"><XMarkIcon  onClick={CloseModal} className='closebtn'/></div>
    <div className="bottommodal"></div>
    <h1>Thank you!</h1>
    <p>A confirmation has been sent to your email.</p>
</div>

)}

<Footer/>

        </>
    )
}

export default Contact;