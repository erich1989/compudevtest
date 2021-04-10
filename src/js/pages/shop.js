import Navbar from '../components/navbar';
import Banner from "../components/banner";
import postRecommended from '../components/postRecommended';
import postMasVistos from '../components/postMasVistos';
import postHardware from "../components/postHardware";
import Footer from '../components/footer';


import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";

import recommended from "../../json/postRecommended.json";
import post2 from "../../json/post.json";
import hardware from "../../json/postHardware.json"

const shop = () => {
  Navbar();
  Banner("Vuélvete un experto de la tecnología, y comparte con la comunidad.");
  postRecommended(recommended);
  postMasVistos(post2);
  postHardware(hardware);
  Footer();
}
shop();