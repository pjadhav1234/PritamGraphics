import React from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import './Home.css';
import p1 from '../images/P1.jpg';
import p2 from '../images/P2.jpg';
import p3 from '../images/P3.jpg';
import p4 from '../images/P4.jpg';
import p5 from '../images/P5.jpg';
import w1 from '../images/W1.jpg';
import w2 from '../images/W2.jpg';
import w3 from '../images/W3.jpg';
import w4 from '../images/W4.jpg';
import w5 from '../images/W5.jpg';
import w6 from '../images/W6.jpg';
import w7 from '../images/W7.jpg';
import w8 from '../images/W8.jpg';
import w9 from '../images/W9.jpg';
import w10 from '../images/W10.jpg';





import menu1 from '../images/MENU1.jpg'
import logo from '../images/logo.jpg'
import home1 from '../images/home1.png'

import expressmart from '../images/expressmart.jpg'
import Brandycafe from '../images/Brandycafe.jpg'
import cesaparikrama from '../images/cesaparikrama.jpg'
import shreebhuleshwar from '../images/shreebhuleshwar.jpg'
import shivar from '../images/shivar.jpg'
import cricket from '../images/cricket academy.jpg'
import suvarn from '../images/suvarnchandan.jpg'
import frontBrandyTemp from '../images/frontBrandy.jpg'
import frontweeding from '../images/frontwedding.jpg'
import frontweeding1 from '../images/frontwedding1.jpg'
import backbrandy from '../images/backbrandy.jpg';
import fronthotel from '../images/fronthotel.jpg';
import backhotel from '../images/backhotel.jpg';

import aboutus1 from '../images/aboutus1.jpg';


const DesignerWebsite = () => {
  const socialLinks = {
    whatsapp: "https://wa.me/918530855072",
    instagram: "https://instagram.com/pritam_kamble_graphics",
    email: "mailto:pritamkamble1906@gmail.com"
  };

  return (
    <div>
    {/* Navbar */}
<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top" style={{ height: '100px', borderBottom: '2px solid #f0f0f0' }}>
  <div className="container">
    {/* Logo Section */}
    <a className="navbar-brand fw-bold" href="#" style={{ fontSize: '24px', color: '#007bff', textTransform: 'uppercase' }}>
      <img src={logo} alt="logo" className='rounded-circle' style={{ maxHeight: '80px', width: '80px', transition: 'transform 0.3s ease' }}  />
    </a>

    {/* Toggler Button */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Collapsible Menu */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a
            className="nav-link fw-semibold mx-2 nav-item-link"
            href="#"
            style={{
              color: '#333',
              fontSize: '18px',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link fw-semibold mx-2 nav-item-link"
            href="#about-section"
            style={{
              color: '#333',
              fontSize: '18px',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link fw-semibold mx-2 nav-item-link"
            href="#services"
            style={{
              color: '#333',
              fontSize: '18px',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
          >
            Services
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link fw-semibold mx-2 nav-item-link"
            href="#footer"
            style={{
              color: '#333',
              fontSize: '18px',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>



      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold mb-3" style={{color:'orange'}}>
             <bold>DESIGN MAKES ANYTHING POSSIBLE</bold>
            </h1>
            <p className="lead text-muted mb-4" style={{fontWeight:'bold' , fontSize:'30px'}}>
             Get custome design you'll our creative platform  <span style={{color:'red'}}>pritam_kamble_Graphics</span> is best place to grow your business.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={home1}
              alt="Designer working"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
{/* 
      <!-- about-us --> */}
<div className=" about-section " id='about-section'>
    <div className="row align-items-center">
    {/* <!-- Right Column - Images --> */} 
        <div className="col-lg-6 col-12 col-md-6  mb-4 mb-md-0">
             <div className="row g-4 about-image-wrapper position-relativecontainer">
              
                <div className="col-6">
                    <div className="about-image">
                        <img src={aboutus1} alt="Team at Work" />
                    </div>
                </div>
               
            </div>
        </div>
        {/* <!-- Left Column - Text Content --> */}
        <div className="col-lg-6">
            <h1 className="about-subtitle cards-title">ABOUT ME</h1>
            <h2 className="about-title">Get creative, innovative & informative Graphic Design Service</h2>
            <p className="about-text">
  Our mission is to provide innovative graphic design solutions that help businesses thrive.
</p>

            
            <ul className="feature-list">
                <li className="feature-item">
                    <i className="fas fa-check-circle feature-icon"></i>
                    Advertising
                </li>
                <li className="feature-item">
                    <i className="fas fa-check-circle feature-icon"></i>
                    Branding 
                </li>
                <li className="feature-item">
                    <i className="fas fa-check-circle feature-icon"></i>
                    Calligraphy 
                </li>
                <li className="feature-item">
                    <i className="fas fa-check-circle feature-icon"></i>
                    Typography 

                </li>
                <li className="feature-item">
                    <i className="fas fa-check-circle feature-icon"></i>
                    Social media post Design

                </li>
                <li className="feature-item">
                    <i className="fas fa-check-circle feature-icon"></i>
                    Digital Painting

                </li>
                <li className="feature-item">
                    <i className="fas fa-check-circle feature-icon"></i>
                    Logo Design


                </li>
                <li className="feature-item">
                    <i className="fas fa-check-circle feature-icon"></i>
                    Banner Design


                </li>
                <li className="feature-item">
                    <i className="fas fa-check-circle feature-icon"></i>
                    Poster Design


                </li>
                <li className="feature-item">
                    <i className="fas fa-check-circle feature-icon"></i>
                    Website Image Desig


                </li>
                
            </ul>
        </div>

        
    </div>

   

 
    
</div>


      {/* Logo Showcase Section */}
      <div className="logo-container " id='services' >
      <h1 className="text-center mb-5 cards-title" style={{
        background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        fontSize: '3rem',
        fontWeight: 'bold'
      }}>Some Logos by us </h1>
<div className="card-group container ">

  
  <div className="rounded-circle overflow-hidden border shadow-sm  col-md-3 bottom-0  position-relative mx-auto"style={{ width: '200px', height: '200px' ,transform: 'translateZ(20px)',
                      background: 'linear-gradient(45deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)'
                      ,objectFit: 'cover',
                      transition: 'transform 0.3s ease'}} >
    <img src={expressmart} className="card-img-top rounded" alt="..."/>
    
  </div>
  <div className="rounded-circle overflow-hidden border shadow-sm  col-md-3 bottom-0  position-relative mx-auto"style={{ width: '200px', height: '200px' }} >
    <img src={Brandycafe} className="card-img-top rounded" alt="..."/>
    
  </div>
  <div className="rounded-circle overflow-hidden border shadow-sm  col-md-3 bottom-0  position-relative mx-auto"style={{ width: '200px', height: '200px' }} >
    <img src={shreebhuleshwar} className="card-img-top rounded" alt="..."/>
    
  </div>
  <div className="rounded-circle overflow-hidden border shadow-sm  col-md-3 bottom-0  position-relative mx-auto"style={{ width: '200px', height: '200px' }} >
    <img src={cesaparikrama} className="card-img-top rounded" alt="..."/>
    
  </div>
  </div>
  <div className="card-group container ">
  <div className="rounded-circle overflow-hidden border shadow-sm  col-md-3 bottom-0  position-relative mx-auto"style={{ width: '200px', height: '200px' }} >
    <img src={cesaparikrama} className="card-img-top rounded" alt="..."/>
    
  </div>
  <div className="rounded-circle overflow-hidden border shadow-sm  col-md-3 bottom-0  position-relative mx-auto"style={{ width: '200px', height: '200px' }} >
    <img src={suvarn} className="card-img-top rounded" alt="..."/>
    
  </div>  
  <div className="rounded-circle overflow-hidden border shadow-sm  col-md-3 bottom-0  position-relative mx-auto"style={{ width: '200px', height: '200px' }} >
    <img src={cricket} className="card-img-top rounded" alt="..."/>
    
  </div>
  <div className="rounded-circle overflow-hidden border shadow-sm  col-md-3 bottom-0  position-relative mx-auto"style={{ width: '200px', height: '200px' }} >
    <img src={shivar} className="card-img-top rounded" alt="..."/>
    
  </div>
  
  
  
</div>
</div>
     



{/* Cards Section */}
<section className="cards-showcase">
  <h1 className="cards-title">SOME MENU CARDS BY US</h1>
  <div className="cards-container col-12 col-sm-6 col-md-4 mb-4">
    <div className="flip-card col-4 row g-4">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={frontBrandyTemp} alt="Brandy's Cafe Front" />
          <div className="card-overlay">
            <h3> Cafe Menu cards</h3>
            <p>"A Menu as Inviting as the Aroma"</p>
          </div>
        </div>
        <div className="flip-card-back ">
          <img src={backbrandy} alt="Brandy's Cafe Back" />
          <div className="card-overlay">
          <h3>Cafe Menu cards</h3>
          <p>"Savor the Design, Taste the Flavor"</p>
          </div>
        </div>
      
        
      </div>
    </div>
    
    <div className="flip-card col-4">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={fronthotel} alt="Hotel Vatrul Front" />
          <div className="card-overlay">
            <h3>Hotel Menu cards</h3>
            <p>"Elegance on Every Page, Flavor in Every Dish"</p>
          </div>
        </div>
        <div className="flip-card-back">
          <img src={backhotel} alt="Hotel Vatrul Back" />
          <div className="card-overlay">
            <h3>Hotel Menu cards</h3>
            <p>"Luxury in Design, Flavor in Every Bite"</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flip-card col-4">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={menu1} alt="Hotel Vatrul Front" />
          <div className="card-overlay">
            <h3>Menu Cards</h3>
            <p>"Designing Memories, One Card at a Time"</p>
          </div>
        </div>
        <div className="flip-card-back col-4">
          <img src={menu1} alt="Hotel Vatrul Back" />
          <div className="card-overlay">
            <h3>Menu cards</h3>
            <p>"Crafting Your Forever in Every Detail"</p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</section>
{/* Cards Section */}
<section className="cards-showcase">
  <h1 className="cards-title">SOME WEDDING AND PRINTING CARDS BY US</h1>
  <div className="cards-container col-12 col-sm-6 col-md-4 mb-4 ">
    <div className="flip-card col-4 row g-4">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={frontweeding} alt="Brandy's Cafe Front" />
          <div className="card-overlay">
            <h3> wedding cards</h3>
            <p>"A Menu as Inviting as the Aroma"</p>
          </div>
        </div>
        <div className="flip-card-back ">
          <img src={frontweeding} alt="Brandy's Cafe Back" />
          <div className="card-overlay">
          <h3>wedding cards</h3>
          <p>"Savor the Design, Taste the Flavor"</p>
          </div>
        </div>
      
        
      </div>
    </div>
    
    <div className="flip-card col-md-4 col-sm-6 col-12">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={w1} alt="Hotel Vatrul Front" />
          <div className="card-overlay">
            <h3>Hotel Menu cards</h3>
            <p>"Elegance on Every Page, Flavor in Every Dish"</p>
          </div>
        </div>
        <div className="flip-card-back">
          <img src={w2} alt="Hotel Vatrul Back" />
          <div className="card-overlay">
            <h3>Hotel Menu cards</h3>
            <p>"Luxury in Design, Flavor in Every Bite"</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flip-card col-md-4 col-sm-6 col-12">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={w3} alt="Hotel Vatrul Front" />
          <div className="card-overlay">
            <h3>Wedding Cards</h3>
            <p>"Designing Memories, One Card at a Time"</p>
          </div>
        </div>
        <div className="flip-card-back col-md-4">
          <img src={w4} alt="Hotel Vatrul Back" />
          <div className="card-overlay">
            <h3>wedding cards</h3>
            <p>"Crafting Your Forever in Every Detail"</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flip-card col-md-4 col-sm-6 col-12">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={w5} alt="Hotel Vatrul Front" />
          <div className="card-overlay">
            <h3>Wedding Cards</h3>
            <p>"Designing Memories, One Card at a Time"</p>
          </div>
        </div>
        <div className="flip-card-back col-md-4">
          <img src={w6} alt="Hotel Vatrul Back" />
          <div className="card-overlay">
            <h3>wedding cards</h3>
            <p>"Crafting Your Forever in Every Detail"</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flip-card col-md-4 col-sm-6 col-12">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={w7} alt="Hotel Vatrul Front" />
          <div className="card-overlay">
            <h3>Wedding Cards</h3>
            <p>"Designing Memories, One Card at a Time"</p>
          </div>
        </div>
        <div className="flip-card-back col-md--4">
          <img src={w8} alt="Hotel Vatrul Back" />
          <div className="card-overlay">
            <h3>wedding cards</h3>
            <p>"Crafting Your Forever in Every Detail"</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flip-card col-md-4 col-sm-6 col-12">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={w9} alt="Hotel Vatrul Front" />
          <div className="card-overlay">
            <h3>Wedding Cards</h3>
            <p>"Designing Memories, One Card at a Time"</p>
          </div>
        </div>
        <div className="flip-card-back col-md-4">
          <img src={w10} alt="Hotel Vatrul Back" />
          <div className="card-overlay">
            <h3>wedding cards</h3>
            <p>"Crafting Your Forever in Every Detail"</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flip-card col-md-4 col-sm-6 col-12">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={p1} alt="Hotel Vatrul Front" />
          <div className="card-overlay">
            <h3>Printing Cards</h3>
            <p>"Designing Memories, One Card at a Time"</p>
          </div>
        </div>
        <div className="flip-card-back col-md-4">
          <img src={p2} alt="Hotel Vatrul Back" />
          <div className="card-overlay">
            <h3>Printing cards</h3>
            <p>"Crafting Your Forever in Every Detail"</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flip-card col-md-4 col-sm-6 col-12">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={p3} alt="Hotel Vatrul Front" />
          <div className="card-overlay">
            <h3>Printing Cards</h3>
            <p>"Designing Memories, One Card at a Time"</p>
          </div>
        </div>
        <div className="flip-card-back col-md-4">
          <img src={p4} alt="Hotel Vatrul Back" />
          <div className="card-overlay">
            <h3>Printing cards</h3>
            <p>"Crafting Your Forever in Every Detail"</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flip-card col-md-4 col-sm-6 col-12">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={p5} alt="Hotel Vatrul Front" />
          <div className="card-overlay">
            <h3>Printing Cards</h3>
            <p>"Designing Memories, One Card at a Time"</p>
          </div>
        </div>
        <div className="flip-card-back col-md-4">
          <img src={p5} alt="Hotel Vatrul Back" />
          <div className="card-overlay">
            <h3>Printing cards</h3>
            <p>"Crafting Your Forever in Every Detail"</p>
          </div>
        </div>
      </div>
    </div>
    
    
  </div>
</section>




     
<footer>
  <div className=" g-4 bg-dark text-white" id='footer'>
    <div className=" container row text-center ">
      {/* Logo and Welcome Section */}
      <div className="col-md-3 container" >
        <h4 className="footer-title">
          <img
            src={logo}
            alt="Sygnus Electrik Logo"
            style={{ height: '63px'}}
            className="d-inline-block align-text-top"
          />
        </h4>
        <p style={{ lineHeight: '34px', fontSize: '18px', margin: '61px -6px', padding: '-12px' }}>
        At pritam_kamble_Graphics, we create visually stunning designs that capture your brand’s essence. From logos to full branding, our designs are tailored to leave a lasting impression
        </p>
      </div>

      {/* Product Links */}
      <div className="col-md-3 ">
        <h5 className="footer-title">Contact us</h5>
        <ul className="list-unstyled" style={{ lineHeight: '46px', fontSize: '18px', margin: '62px 4px', padding: '-12px' }}>
          <li><a href="#" className="text-white text-decoration-none" >
            <span style={{fontWeight:'bold'}}>Email:</span>pritamkamble1906@gamil.com</a></li>
          <li><a href="#" className="text-white text-decoration-none"><span style={{fontWeight:'bold'}}>Contact:</span>8530 8550 72</a></li>
          
        </ul>
      </div>
      {/* Product Links */}
      <div className="col-md-3 ">
        <h5 className="footer-title">Address</h5>
        <ul className="list-unstyled" style={{ lineHeight: '46px', fontSize: '18px', margin: '62px 4px', padding: '-12px' }}>
          <li><a href="#" className="text-white text-decoration-none">Daund:</a></li>
          <li><a href="#" className="text-white text-decoration-none">Pune,maharashtra, 413801</a></li>
          
        </ul>
      </div>

      

      

      <div className="flex flex-col gap-4 col-md-3">

      <h5 className="footer-title">Social Media</h5>
        <ul className="list-unstyled" style={{ lineHeight: '46px', fontSize: '18px', margin: '62px 4px', padding: '-12px' }}>
         <a
          href={socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transform hover:scale-110 transition-all duration-200"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>
          <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-pink-500 hover:bg-pink-600 rounded-full shadow-lg transform hover:scale-110 transition-all duration-200"
        >
          <Instagram className="w-6 h-6 text-white" />
        </a>
        <a
          href={socialLinks.email}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg transform hover:scale-110 transition-all duration-200"
        >
          <Mail className="w-6 h-6 text-white" />
        </a>
          
        </ul>
      
       
        
      </div>
    </div>
  </div>
</footer>



    </div>
  );
};

export default DesignerWebsite;
