import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Carousel from '../components/carousel';
import Footer from '../components/footer';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";

const aboutMy = () => {
  Navbar();
  Banner( "Nos enorgullecemos de nuestro compromiso con la excelencia, así como de nuestra capacidad para cumplir con nuestros clientes.");
  Carousel();
  Footer();
}

aboutMy();