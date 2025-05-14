import './Footer.css';

function Footer() {
  // define social media links
  const githubLink = "https://github.com/iden0605";
  const linkedinLink = "https://www.linkedin.com/in/iden-mcelhone-8a6983354/";
  const gmailLink = "mailto:iden0605@gmail.com";

  // render the footer with social links
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="footer-icon">
          <img src="/portfolio/assets/logo/Github-white-logo.png" alt="GitHub Logo" className="social-icon"/>
        </a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="footer-icon">
          <img src="/portfolio/assets/logo/LinkedIn-logo.png" alt="LinkedIn Logo" className="social-icon"/>
        </a>
        <a href={gmailLink} target="_blank" rel="noopener noreferrer" className="footer-icon">
          <img src="/portfolio/assets/logo/Gmail-logo.png" alt="Gmail Logo" className="social-icon"/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
