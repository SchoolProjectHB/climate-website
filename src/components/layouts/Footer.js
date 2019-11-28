import React from "react";
//import './App.css';
// import styled from 'styled-components';

function Footer() {
  return (
    <div className="main-footer">
    <div className="footer-middle">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 text-white" >
            <h4> Kontakta oss </h4>
            <ul className="list-unstyled text-white">
              <li>Smartare Utbildning</li>              
              <li>Göteborg</li>
              <li>+46700000000</li>
              <li>kontakt@smartareutbildning.se</li>
            </ul>
          </div>
        </div>
        {/* Footer bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center text-white">
            &copy;{new Date().getFullYear()} Smartare utbildning - All Right Reserved
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;

// const FooterContainer = styled.footer``;
