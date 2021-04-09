import portatil from '../../images/imageheader.svg';

function Header() {
  const textHeader = document.getElementById("header");

  textHeader.innerHTML += `
<section class="pt-3  pb-4 header">
<div class="container">
<div class="row">
  <div class="col-sm-12 col-md-7  div-text-header d-flex flex-column justify-content-center align-items-start">
    <h1 class="display-5 mb-3 text-sm-center text-md-left font-weight-normal animado  h1-header">
      Bienveinido a <span class="text-primary">CompuDev</span>. Dale vida a tu PC
    </h1>
    <p class="lead font-weight-normal animado  mb-4">
    Mantenimiento y reparación de computadoras con calidad y oportuno. 
    </p>
    <div>
    <a
      class="btn btn-primary  button animado"
      href="https://wa.link/cfb2fh"
      target="_blank"
      ><i class="fa fa-whatsapp fa-lg mr-2"></i>Contáctanos</a
    >
    <a
      class="btn btn-outline-primary button animado"
      href="https://m.me/607459153245623"
      target="_blank"
      ><i class="fab fa-facebook-f mr-2"></i>Contáctanos</a
    >
    </div>
  </div>
  <div class="col-sm-12 col-md-5 p-sm-0 pl-md-5 d-flex d-flex justify-content-start align-items-center  animado"><img src=${portatil} alt=""width="100%" 
  height="100%" ></div>
</div>
</div>
</section>

`;
  let animado = document.querySelectorAll(".animado");

  function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++) {
      let alturaAnimado = animado[i].offsetTop;
      if (alturaAnimado - 500 < scrollTop) {
        animado[i].style.opacity = 1;
        animado[0].classList.add("mostrarArribaHeader"); //h1
        animado[1].classList.add("mostrarArribaHeader"); //p
        animado[2].classList.add("mostrarArribaHeader"); //a 1
        animado[3].classList.add("mostrarArribaHeader"); //a 2
        animado[4].classList.add("mostrarDerechaHeader"); //a img
      }
    }
  }

  window.addEventListener("load", mostrarScroll);
}

export default Header;
