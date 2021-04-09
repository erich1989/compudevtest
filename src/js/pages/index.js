import Navbar from '../components/navbar'; 
import Header from '../components/headerHome';
import Proposal from '../components/proposal';
import Marcas from '../components/marcas';
import Services from '../components/services';
import Prices from '../components/prices';
import Footer from '../components/footer';


import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";

const index = () => {
  document.title = 'Compudev';
  Navbar();
  Header();
  Proposal();
  Marcas();
  Services();
  Prices();
  Footer();
}

index();