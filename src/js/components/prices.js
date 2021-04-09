let precioBasic = 35000;
let precioPro = 45000;

const Prices = () => {
  const textPrices = document.getElementById("prices");
  textPrices.innerHTML += `
  <h1 class="text-center  mt-4 mb-5">Precios</h1>
  <div class="container mt-5">
  <div class="card-deck mb-3 text-center">

    <div class="card mb-4 shadow-sm complete-card animadoprecios" id="">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Básico</h4>
      </div>
      <div class="card-body ">
        <h1 class="card-title pricing-card-title" id="precioBasico">$${precioBasic}</h1>
        <ul class="list-unstyled mt-3 mb-4 ">
          <li>Formateo completo</li>
          <li>Instalación de programas</li>
          <li style="visibility:hidden">Instalación de programas</li>
          <li style="visibility:hidden">Instalación de programas</li>
        </ul>
        <button type="button" class="btn btn-sm btn-block btn-outline-primary" id="card" >Agregar domicilio</button>
        <button type="button" class="btn btn-lg btn-block btn-primary">Sign up for free</button>
      </div>
    </div>

    <div class="card mb-4 shadow-sm complete-card animadoprecios" id="">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Pro</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title" id="precioPro">$${precioPro}</h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>Formateo completo</li>
          <li>Instalación de programas</li>
          <li>Limpieza de componentes</li>
          <li>Cambio de pasta térmica</li>
        </ul>
        <button type="button" class="btn btn-sm btn-block btn-outline-primary" id="cardPro" >Agregar domicilio</button>
        <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
      </div>
    </div>

    <div class="card mb-4 shadow-sm complete-card animadoprecios " id="">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Personalizado</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$0 </h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>Formateo completo</li>
          <li>Instalación de programas</li>
          <li>Limpieza de componentes</li>
          <li>Cambio de pasta térmica</li>
          <li>Cambio de componentes</li>
        </ul>
        <button type="button" class="btn btn-lg btn-block btn-primary">Cotización</button>
      </div>
    </div>
  </div>
  
  `;

  document.getElementById("card").addEventListener("click", function () {
    if (precioBasic === 35000) {
      precioBasic = precioBasic + 10000;
      document.getElementById("precioBasico").innerHTML = `$${precioBasic}`;
      document.getElementById("card").innerHTML = "Quitar Domicilio";
    } else if (precioBasic === 45000) {
      precioBasic = precioBasic - 10000;
      document.getElementById("precioBasico").innerHTML = `$${precioBasic}`;
      document.getElementById("card").innerHTML = "Agregar Domicilio";
    }
  });

  document.getElementById("cardPro").addEventListener("click", function () {
    if (precioPro === 45000) {
      precioPro = precioPro + 10000;
      document.getElementById("precioPro").innerHTML = `$${precioPro}`;
      document.getElementById("cardPro").innerHTML = "Quitar Domicilio";
    } else if (precioPro === 55000) {
      precioPro = precioPro - 10000;
      document.getElementById("precioPro").innerHTML = `$${precioPro}`;
      document.getElementById("cardPro").innerHTML = "Agregar Domicilio";
    }
  });

  let animado = document.querySelectorAll(".animadoprecios");
  function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++) {
      let alturaAnimado = animado[i].offsetTop;
      if (alturaAnimado - 500 < scrollTop) {
        animado[i].style.opacity = 1;
        animado[0].classList.add("mostrarIzquierda");
        animado[1].classList.add("mostrarArriba");
        animado[2].classList.add("mostrarDerecha");
      }
    }
  }
  window.addEventListener("scroll", mostrarScroll);
};

export default Prices;
