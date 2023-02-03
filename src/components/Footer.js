import React from 'react';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" childClass="footer-link" />
      <SocialLinks parentClass="footer-icons" linkClass="footer-icon" />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
