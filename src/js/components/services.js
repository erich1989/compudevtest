import SO from "../../images/so.svg";
import Clean from "../../images/soporte.svg";
import Mante from "../../images/mante.svg";

const Services = () => {
  const textServices = document.getElementById("services");
  textServices.innerHTML += `

  <!-- START THE FEATURETTES -->
    <hr class="featurette-divider">

  <div class="container-fluid marketing px-3 px-md-5">

    <div class="text-center mb-5">
        <h2>Nuestros servicios</h2>
    </div>
    
    <div class="row px-3 pr-md-4 py-5 mb-5 mx-2 mx-md-5 rounded row-service featurette animadoservices">
        <div class="col-12 col-md-4">
          <div class="text-center mb-4 mb-md-0">
            <img src=${SO} alt="" class="image-services">
          </div>  
        </div>
        <div class="col-12 col-md-5 d-flex align-items-center">
          <div class="columna-central-servicios">
            <h3 class="mb-3 ">Formateo de sistemas operativos e <span class="text-muted">instalación
                  de software.</span></h3>
              <p class=" lead mb-4 mb-md-0">Se formatea e instala sistemas operativos. Ademas se instala cualquier
              programa para entretenimiento y productividad.</p>
          </div>  
        </div>
        <div class="col-12 col-md-3 d-flex align-items-center border-left">
          <div class="d-inline-block h-auto w-auto pl-2 pl-md-3">
            <h1 class="number-service">1,500+</h1>
            <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur</p>
          </div>  
        </div>
    </div>

    <div class="row px-3 pr-md-4 py-5 mb-5 mx-2 mx-md-5 rounded row-service featurette animadoservices">
        <div class=" col-12 col-md-3 d-flex align-items-center border-right">
          <div class=" d-inline-block h-auto w-auto pr-2 pr-md-3">
            <h1 class="number-service">1,500+</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur</p>
          </div>   
        </div>
        <div class=" col-12 col-md-5 d-flex justify-content-center align-items-end">
          <div class="columna-central-servicios text-right">
            <h3 class="mb-3 ">Reparación y <span class="text-muted">cambio de hardware.</span></h3>
            <p class=" mb-4 mb-md-0 lead">En CompuDev te ofrecemos el servicio de reparación y cambio de los componentes dañados de tu computadora. Para que puedas disfrutas de tu dispositivo al 100%.</p>
          </div>
        </div>
        <div class="col-12 col-md-4 text-center">
          <div class="text-center mb-4 mb-md-0">
            <img src=${Mante} alt="" class="image-services">
          </div> 
        </div>
    </div>

    <div class="row px-3 pr-md-4 py-5 mb-5 mx-2 mx-md-5 rounded row-service featurette animadoservices">
        <div class="col-12 col-md-4 text-center">
          <img src=${Clean} alt="" class="image-services-soporte">
        </div>
        <div class="col-12 col-md-5 d-flex align-items-center">
          <div class="columna-central-servicios">
            <h3 class="mb-3 ">Respaldo y <span class="text-muted">recuperación de datos.</span></h3>
            <p class=" mb-4 mb-md-0 lead">Si sientes que tu computadora aumenta mucho la temperatura y se vuelve lenta, en CompuDev, te ayudamos con la limpieza de los componentes de tu computadora.</p>
          </div>  
        </div>
        <div class="col-12 col-md-3 d-flex align-items-center border-left">
          <div class="d-inline-block h-auto w-auto pl-2 pl-md-3">
            <h1 class="number-service">1,500+</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur</p>
          </div>   
        </div>
    </div>

    <div class="row text-center">
      <div class="col-12 mb-5">
        <a href="/servicios" class="btn btn-1">Ver todos los servivios  <i class="fas fa-arrow-circle-right ml-2"></i></a>
      </div>
    </div>
    <hr class="featurette-divider">

    <!-- /END THE FEATURETTES -->
  </div>

  <!-- /.container -->

  `
  let animado = document.querySelectorAll(".animadoservices");

  function mostrarScroll () {
    let scrollTop = document.documentElement.scrollTop;
    for ( var i = 0; i < animado.length; i++){
      let alturaAnimado = animado [i].offsetTop;
       if(alturaAnimado - 500 < scrollTop){
         animado[i].style.opacity = 1;
         animado[i].classList.add("mostrarArribaService");
       }
    }
  }
  
  window.addEventListener("scroll", mostrarScroll);

}

export default Services;