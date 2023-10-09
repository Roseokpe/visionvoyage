import { Container } from 'react-bootstrap';

const Footer = () => (
  <div className="container-fluid text-white py-2" style={{ backgroundColor: '#121f38' }} id="contact">
    <Container className="text-center py-0">
      <p>
        Designed by
        {' '}
        <a style={{ color: '#e47a2e' }} href="https://chukwuemekavp.netlify.app/">
          CHUKWUEMEKA
        </a>
      </p>
    </Container>
  </div>
);

export default Footer;
