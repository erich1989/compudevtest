import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";

import Navbar from '../components/navbar'; 
import Form from '../components/form';
import Footer from '../components/footer';

const services = () => {
  const newTitle = document.title = 'Servicios';
  
  
  Navbar();
  Form();
  Footer();
}

services();