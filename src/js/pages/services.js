import Navbar from '../components/navbar'; 
import Form from '../components/form';
import Footer from '../components/footer';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";

const services = () => {
  const newTitle = document.title = 'Servicios';
  
  
  Navbar();
  Form();
  Footer();
}

services();