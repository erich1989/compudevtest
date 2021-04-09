import superherue from '../../images/medalla.png';
import car from "../../images/rapido.png";
import saving from "../../images/ahorrar.png";
import support from "../../images/apoyo-tecnico.png";

function Proposal () {

  const textProposal = document.getElementById("proposal");

  textProposal.innerHTML += `
  
  <div class="container-fluid p-3 p-md-5 marketing">

    <div class="text-center mb-5 pb-2">
      <h2 style="style="color:#161c2d;"">Tenemos para ti</h2>
    </div>

    <div class="row mx-0 mx-md-5">

      <div class="col-12 col-md-6 col-lg-3  animadoproposal">
        <div class="p-4 mb-5 mb-md-0 card-proposal rounded">
          <img src=${superherue} alt="..." class=" mb-4" width="60" height="60">
          <h4 style="color:#161c2d;">Calidad en servicio</h4>
          <p style="color:#869ab8!important;">Contamos con los mejores técnicos herramientas para ofrecer un servicio optimo.</p>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3  animadoproposal">
        <div class="p-4 mb-5 mb-md-0 card-proposal rounded">
          <img src=${car} alt="..." class=" mb-4" width="60" height="60">
          <h4 style="color:#161c2d;">Sevicio a domicilio</h4>
          <p style="color:#869ab8!important;">Realizamos un rapido servicio a domicilio en todo el área metropolitana de Medellín.</p>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3 animadoproposal">
        <div class="p-4 mb-5 mb-md-0 card-proposal rounded">
          <img src=${saving} alt="..." class=" mb-4" width="60" height="60">
          <h4 style="color:#161c2d;">Los mejores precios</h4>
          <p style="color:#869ab8!important;">Ofrecemos los mejores precios del mercado para todos nuestros servicios.</p>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3 animadoproposal">
        <div class="p-4 mb-5 mb-md-0 card-proposal rounded">
          <img src=${support} alt="..." class=" mb-4" width="60" height="60">
          <h4 style="color:#161c2d;">Soporte remoto</h4>
          <p style="color:#869ab8!important;">Ofrecemos los mejores precios del mercado para todos nuestros servicios.</p>
        </div>
      </div>
    </div>
  `
  let animado = document.querySelectorAll(".animadoproposal");

  function mostrarScroll () {
    let scrollTop = document.documentElement.scrollTop;
    for ( var i = 0; i < animado.length; i++){
      let alturaAnimado = animado [i].offsetTop;
       if(alturaAnimado - 500 < scrollTop){
         animado[i].style.opacity = 1;
         animado[0].classList.add("mostrarIzquierdaProposal");
         animado[1].classList.add("mostrarArribaProposal");
         animado[2].classList.add("mostrarArribaProposal");
         animado[3].classList.add("mostrarDerechaProposal");

       }
    }
  }
  
  window.addEventListener("scroll", mostrarScroll);

}

export default Proposal;