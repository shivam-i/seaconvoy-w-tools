import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-top">
          <div className="heading-and-partner">
            <div className="heading-container">
              <p className='heading'>SEACONVOY SYSTEMS ENGINEERING PRIVATE LIMITED</p>
            </div>
            <img className='partner-logo' src="./images/home-page/footer/Partner-logo 1.png" alt="" />
          </div>

          <div className="nav-and-social">
            <div className="footer-nav">
              <p className='quick-links-heading'>Quick Links</p>
              <Link to="/">Home</Link>
              <Link to="/tools">Tools</Link>
              <Link to="/about">About</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/services">Services</Link>
            </div>
            <div>
              <p className='follow-us-heading'>Follow Us</p>
            </div>
            <div className='socials'>
              <a href="https://www.linkedin.com/company/seaconvoy-systems-engineering-private-limited/"><img src="./images/home-page/footer/LinkedIn.png" alt="LinkedIN" /></a>
            </div>
          </div>


          <div className="contact">
            <p className='contact-heading'>Contact Us</p>
            <div className="email">
              <p><span className='email-heading'>Email: </span>rakesh.nnv@seaconvoy.co.in</p>
            </div>
            <div className="phone">
              <p><span className='phone-heading'>Phone Number: </span>+91 996 244 0997</p>
            </div>
            <div className="office">
              <p className='office-address'>Office Address:</p>
              <address>
                <p>Door No. 3, Ground Floor, 7th Main Road, 1st Avenue East, Dhandeeswaram, Velachery, Chennai, Tamil Nadu 600042</p>
                <b>GSTIN: 33ABFCS3277A1ZN</b>
              </address>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © {year} Seaconvoy. All rights reserved.
          </div>
        </div>

      </footer>

      <footer className="footer-mobile">
        <p className='heading'>SEACONVOY SYSTEMS ENGINEERING PRIVATE LIMITED</p>
        <div className="contact">
          <p className='contact-heading'>Contact Us</p>
          <div className="email">
            <p><span className='email-heading'>Email: </span>rakesh.nnv@seaconvoy.co.in</p>
          </div>
          <div className="phone">
            <p><span className='phone-heading'>Phone Number: </span>+91 996 244 0997</p>
          </div>
          <div className="office">
            <p className='office-address'>Office Address:</p>
            <address>
              <p>Door No. 3, Ground Floor, 7th Main Road, 1st Avenue East, Dhandeeswaram, Velachery, Chennai, Tamil Nadu 600042</p>
              <b>GSTIN: 33ABFCS3277A1ZN</b>
            </address>
          </div>
        </div>
        <div className="footer-nav">
          <p>Quick Links</p>
          <Link to="/">Home</Link>
          <Link to="/tools">Tools</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/services">Services</Link>
        </div>

        <div className="footer-social">
          <div>
            <p>Follow Us</p>
          </div>
          <div className='socials'>
            <a href="https://www.linkedin.com/company/seaconvoy-systems-engineering-private-limited/"><img src="./images/home-page/footer/LinkedIn.png" alt="LinkedIN" /></a>
          </div>
        </div>

        <div className="footer-copy">
          © {year} Seaconvoy. All rights reserved.
        </div>
      </footer>
    </div>

  );
}

export default Footer;
