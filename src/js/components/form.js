
const formAndInvoice = () =>{
  document.getElementById('formandinvoice').innerHTML = `

  <div class="container-fluid">
  <div class="row">
    <div class=" col-12 col-md-6 p-2 p-md-5">
      <div class="bd-example bd-example-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="false"
              >Formateo</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="true"
              >Reparación</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#contact"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
              >Como funciona</a
            >
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <form class="border mt-4 ml-3 mr-3 mb-3 p-5 rounded" id="formularioformateo" name="formularioformateo">
              <div class="row mb-3">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre"
                    id="valornombre"
                  />
                  <p class="text-validar" id="text-validar-nombre">Obligatorio</p>
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Apellido"
                    id="valorapellido"
                  />
                  <p class="text-validar" id="text-validar-apellido">Obligatorio</p>
                </div>
              </div>
              <div class="form-group">
                <label for="valortel">Telefono</label>
                <input
                  type="text"
                  class="form-control"
                  id="valortel"
                  placeholder="Cel - tel"
                />
                <p class="text-validar" id="text-validar-tel">Obligatorio</p>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="valoremail"
                  placeholder="name@example.com"
                />
                <p class="text-validar" id="text-validar-email">Obligatorio</p>
              </div>
              <div class="form-group">
                <label for="tipoformateo"
                  >Tipo de formateo</label
                >
                <select class="form-control" id="tipoformateo" required>
                  <option value="0">Selecciona...</option>
                  <option value="1">Básico</option>
                  <option value="2">Pro</option>
                </select>
                <p class="text-validar" id="text-validar-tipoformateo">Obligatorio</p>
              </div>
              <div class="form-group">
                <label for="valorprogramasinstalar">Programas</label>
                <textarea
                  class="form-control"
                  id="valorprogramasinstalar"
                  rows="3"
                  placeholder="Escribe los programas que deseas instalar"
                ></textarea>
                <p class="text-validar" id="text-validar-programas">Obligatorio</p>
              </div>
              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">
                    Domicilio
                  </legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios2"
                        value="SI"
                      />
                      <label class="form-check-label" for="gridRadios2">
                        Si
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios1"
                        value="NO"
                      />
                      <label class="form-check-label" for="gridRadios1">
                        No
                      </label>
                    </div>
                    
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col address1">
                    <div class="form-group">
                      <label for="formulario">Ciudad</label>
                      <select
                        class="form-control formulario custom-select"
                        id="formulario"
                      >
                        <option selected>Selecciona...</option>
                        <option value="1">Coopacabana</option>
                        <option value="2">Bello</option>
                        <option value="3">Medellín</option>
                        <option value="4">Envigado</option>
                        <option value="5">Sabaneta</option>
                        <option value="6">Itagui</option>
                        <option value="7">La estrella</option>
                      </select>
                      <p class="text-validar" id="text-validar-ciudad">Obligatorio</p>
                    </div>
                  </div>
                  <div class="form-group col address1">
                    <div class="">
                      <label for="barrio">Barrio</label>
                      <input
                      type="text"
                      class="form-control"
                      id="barrio"
                      disabled
                    />
                    <p class="text-validar" id="text-validar-barrio">Obligatorio</p>
                      <!-- <select id="inputState" class="form-control" disabled>
                        <option selected>Selecciona...</option>
                        <option value="">Comuna 1</option>
                        <option value="">Comuna 2</option>
                        <option value="">Comuna 3</option>
                        <option value="">Comuna 4</option>
                        <option value="">Comuna 5</option>
                        <option value="">Comuna 6</option>
                        <option value="">Comuna 7</option>
                        <option value="">Comuna 8</option>
                        <option value="">Comuna 9</option>
                        <option value="">Comuna 10</option>
                        <option value="">Comuna 11</option>
                        <option value="">Comuna 12</option>
                        <option value="">Comuna 13</option>
                        <option value="">Comuna 14</option>
                        <option value="">Comuna 15</option>
                        <option value="">Comuna 16</option>
                      </select> -->
                    </div>
                  </div>
                  <div class="col-12 address1">
                    <label for="inputCity">Dirección</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputCity"
                    />
                    <p class="text-validar" id="text-validar-direccion">Obligatorio</p>
                  </div>
                </div>
              </fieldset>
              <div class="form-group">
                <label for="comentarios">Comentario</label>
                <textarea
                  class="form-control"
                  id="comentarios"
                  rows="3"
                ></textarea>
              </div>
              <div>
                <button class="btn btn-primary btn-block" type="submit">Enviar</button>
              </div>
            </form>
          </div>
          <div
            class="tab-pane fade active show"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
          <form class="border mt-4 ml-3 mr-3 mb-3 p-5 rounded" id="formularioformateo" name="formularioformateo">
          <div class="row mb-3">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Nombre"
                id="valornombre"
              />
              <p class="text-validar" id="text-validar-nombre">Obligatorio</p>
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Apellido"
                id="valorapellido"
              />
              <p class="text-validar" id="text-validar-apellido">Obligatorio</p>
            </div>
          </div>
          <div class="form-group">
            <label for="valortel">Telefono</label>
            <input
              type="text"
              class="form-control"
              id="valortel"
              placeholder="Cel - tel"
            />
            <p class="text-validar" id="text-validar-tel">Obligatorio</p>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email</label>
            <input
              type="email"
              class="form-control"
              id="valoremail"
              placeholder="name@example.com"
            />
            <p class="text-validar" id="text-validar-email">Obligatorio</p>
          </div>
          <div class="form-group">
            <label for="tipoformateo"
              >Tipo de formateo</label
            >
            <select class="form-control" id="tipoformateo" required>
              <option value="0">Selecciona...</option>
              <option value="1">Básico</option>
              <option value="2">Pro</option>
            </select>
            <p class="text-validar" id="text-validar-tipoformateo">Obligatorio</p>
          </div>
          <div class="form-group">
            <label for="valorprogramasinstalar">Programas</label>
            <textarea
              class="form-control"
              id="valorprogramasinstalar"
              rows="3"
              placeholder="Escribe los programas que deseas instalar"
            ></textarea>
            <p class="text-validar" id="text-validar-programas">Obligatorio</p>
          </div>
          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-2 pt-0">
                Domicilio
              </legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="SI"
                  />
                  <label class="form-check-label" for="gridRadios2">
                    Si
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="NO"
                  />
                  <label class="form-check-label" for="gridRadios1">
                    No
                  </label>
                </div>
                
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col address1">
                <div class="form-group">
                  <label for="formulario">Ciudad</label>
                  <select
                    class="form-control formulario custom-select"
                    id="formulario"
                  >
                    <option selected>Selecciona...</option>
                    <option value="1">Coopacabana</option>
                    <option value="2">Bello</option>
                    <option value="3">Medellín</option>
                    <option value="4">Envigado</option>
                    <option value="5">Sabaneta</option>
                    <option value="6">Itagui</option>
                    <option value="7">La estrella</option>
                  </select>
                  <p class="text-validar" id="text-validar-ciudad">Obligatorio</p>
                </div>
              </div>
              <div class="form-group col address1">
                <div class="">
                  <label for="barrio">Barrio</label>
                  <input
                  type="text"
                  class="form-control"
                  id="barrio"
                  disabled
                />
                <p class="text-validar" id="text-validar-barrio">Obligatorio</p>
                  <!-- <select id="inputState" class="form-control" disabled>
                    <option selected>Selecciona...</option>
                    <option value="">Comuna 1</option>
                    <option value="">Comuna 2</option>
                    <option value="">Comuna 3</option>
                    <option value="">Comuna 4</option>
                    <option value="">Comuna 5</option>
                    <option value="">Comuna 6</option>
                    <option value="">Comuna 7</option>
                    <option value="">Comuna 8</option>
                    <option value="">Comuna 9</option>
                    <option value="">Comuna 10</option>
                    <option value="">Comuna 11</option>
                    <option value="">Comuna 12</option>
                    <option value="">Comuna 13</option>
                    <option value="">Comuna 14</option>
                    <option value="">Comuna 15</option>
                    <option value="">Comuna 16</option>
                  </select> -->
                </div>
              </div>
              <div class="col-12 address1">
                <label for="inputCity">Dirección</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputCity"
                />
                <p class="text-validar" id="text-validar-direccion">Obligatorio</p>
              </div>
            </div>
          </fieldset>
          <div class="form-group">
            <label for="comentarios">Comentario</label>
            <textarea
              class="form-control"
              id="comentarios"
              rows="3"
            ></textarea>
          </div>
          <div>
            <button class="btn btn-primary btn-block" type="submit">Enviar</button>
          </div>
        </form>

          </div>
          <div
            class="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <p>
              Etsy mixtape wayfarers, ethical wes anderson tofu before they
              sold out mcsweeney's organic lomo retro fanny pack lo-fi
              farm-to-table readymade. Messenger bag gentrify pitchfork
              tattooed craft beer, iphone skateboard locavore carles etsy
              salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
              Leggings gentrify squid 8-bit cred pitchfork. Williamsburg
              banh mi whatever gluten-free, carles pitchfork biodiesel fixie
              etsy retro mlkshk vice blog. Scenester cred you probably
              haven't heard of them, vinyl craft beer blog stumptown.
              Pitchfork sustainable tofu synth chambray yr.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-6 p-5 mt-5 h-100">
      <div class="card">
        <div class="card-header">Featured</div>
        <div class="card-body p-4">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <div class="container mb-3">
            <div class="row">
              <div class="col-2 pr-0 m-0">Nombre:</div>
              <div class="col-4 p-0" id="nombreCard"></div>
            </div>
            <div class="row">
              <div class="col-2 pr-0">Apellido:</div>
              <div class="col-4 p-0" id="apellidoCard"></div>
            </div>
            <div class="row">
              <div class="col-2 pr-0">Telefono:</div>
              <div class="col-4 p-0" id="telefonoCard"></div>
            </div>
            <div class="row">
              <div class="col-2 pr-0">Email:</div>
              <div class="col-6 p-0" id="emailCard"></div>
            </div>
            <div class="row">
              <div class="col-2 pr-0">Ciudad:</div>
              <div class="col-6 p-0" id="ciudadCard"></div>
            </div>
            <div class="row">
              <div class="col-2 pr-0">Barrio:</div>
              <div class="col-6 p-0" id="comunaCard">n/a</div>
            </div>
            <div class="row">
              <div class="col-2 pr-0">Dirección:</div>
              <div class="col-6 p-0" id="direccionCard"></div>
            </div>
          </div>

          <div class="container mb-3  border rounded p-3">
            <div class="row">
              <div class="col-3 pr-0">Formateo:</div>
              <div class="col-6 text-left p-0" id="formateoCard"></div>
              <div class="col-3" id="costoformateo">0</div>
            </div>
            <div class="row">
              <div class="col-3 pr-0">Programas:</div>
              <div class="col-6 text-left p-0" id="programasCard"></div>
            </div>
            <div class="row">
              <div class="col-3 pr-0">Domicilio:</div>
              <div class="col-6 p-0" id="domicilioCard"></div>
              <div class="col-3" id="costoDomicilio">0</div>
            </div>
          </div>

          <p class="pl-3">Comentarios</p>
          <div class="container mb-3  border rounded p-3" style="height: 100px;">
            <div id="comentarioCard"></div>
          </div>

          
          <a href="#" class="btn btn-primary btn-block" id="botonenviar" type="submit">Enviar</a>
        </div>
      </div>
    </div>
  </div>
</div>
  
  `

// ----------- inicia bloque funciones obtener valores imput------------

const divaddress = document.getElementsByClassName("address1");
const valorNombre = document.getElementById("valornombre");
const valorApellido = document.getElementById("valorapellido");
const valorTel = document.getElementById("valortel");
const valorEmail = document.getElementById("valoremail");
const tipoFormateo = document.getElementById("tipoformateo");
const programasParaInstalar = document.getElementById("valorprogramasinstalar");
const domicilio = document.getElementById("gridRadios2");
const domicilioNo = document.getElementById("gridRadios1");
const valorCiudad = document.getElementById("formulario");
const valorComuna = document.getElementById("barrio");
const valorDireccion = document.getElementById("inputCity");
const valorComentarios = document.getElementById("comentarios");

// const tipoFormateoValidar = document.getElementById("tipoformateo").selectedIndex;

const costoFormateoBasico = 35000;
const costoformateoPro = 45000;
const costoDomicilioBasico = 8000;
const costoDomicilioMedio = 10000;
const costoDomicilioPro = 12000;

let InformacionCompletaCliente = [];

// ------------------funcion obtener valor nombre------------

valorNombre.addEventListener("blur", function uno() {
    const nombreCliente = valorNombre.value.toUpperCase();
    document.getElementById("nombreCard").innerHTML = nombreCliente;
    InformacionCompletaCliente.push(nombreCliente);
    console.log(InformacionCompletaCliente);
});

// ------------------funcion obtener valor apellido------------

valorApellido.addEventListener("blur", function () {
    const apellidoCliente = valorApellido.value.toUpperCase();
    document.getElementById("apellidoCard").innerHTML = apellidoCliente;
    InformacionCompletaCliente.push(apellidoCliente);
    console.log(InformacionCompletaCliente);
});

// ------------------funcion obtener valor telefono------------

valorTel.addEventListener("blur", function () {
    const telCliente = valorTel.value.toUpperCase();
    document.getElementById("telefonoCard").innerHTML = telCliente;
    InformacionCompletaCliente.push(telCliente);
    console.log(InformacionCompletaCliente);
});

// ------------------funcion obtener valor email------------

valorEmail.addEventListener("blur", function () {
    const emailCliente = valorEmail.value;
    document.getElementById("emailCard").innerHTML = emailCliente;
    InformacionCompletaCliente.push(emailCliente);
    console.log(InformacionCompletaCliente);
});

// ------------------funcion obtener valor tipo de formateo------------

tipoFormateo.addEventListener("change", function () {
  const selected = tipoFormateo.options[tipoFormateo.selectedIndex].text;
  document.getElementById("formateoCard").innerHTML = selected;
  InformacionCompletaCliente.push(selected);
  console.log(InformacionCompletaCliente);
  if (selected === "Básico") {
    document.getElementById("costoformateo").innerHTML = costoFormateoBasico;
  }
  if (selected === "Pro") {
    document.getElementById("costoformateo").innerHTML = costoformateoPro;
  }
});

// -------------funcion obtener valor programas a instalar------------

programasParaInstalar.addEventListener("blur", function () {
  
    const programasClientes = programasParaInstalar.value;
    document.getElementById("programasCard").innerHTML = programasClientes;
    InformacionCompletaCliente.push(programasClientes);
    console.log(InformacionCompletaCliente);
  }
);

// ------------------funcion obtener valor domicilio------------

domicilio.addEventListener("click", function () {
  const addDimicilio = domicilio.value;
  InformacionCompletaCliente.push(addDimicilio);
  console.log(InformacionCompletaCliente);
  document.getElementById("domicilioCard").innerHTML = addDimicilio;
  var i;
  for (i = 0; i < divaddress.length; i++) {
    divaddress[i].style.display = "inline";
  }
  document.getElementById("costoDomicilio").innerHTML = costoDomicilioBasico;
});

// ------------------funcion obtener valor ciudad------------

valorCiudad.addEventListener("change", function () {
  const ciudadCliente = document.getElementById("formulario").value.toUpperCase();
  const selected = valorCiudad.options[valorCiudad.selectedIndex].text.toUpperCase();
  InformacionCompletaCliente.push(selected);
  console.log(InformacionCompletaCliente);
  document.getElementById("ciudadCard").innerHTML = selected;

  if(ciudadCliente === "1") {
    document.getElementById("costoDomicilio").innerHTML = costoDomicilioPro;
  }

  if(ciudadCliente === "2") {
    document.getElementById("costoDomicilio").innerHTML = costoDomicilioMedio;
  }

  if (ciudadCliente === "3") {
    document.getElementById("barrio").removeAttribute("disabled");
    document.getElementById("costoDomicilio").innerHTML = costoDomicilioBasico;

    valorComuna.addEventListener("blur", function () {
      const comunaCliente =
      valorComuna.value.toUpperCase();
      InformacionCompletaCliente.push(comunaCliente);
      console.log(InformacionCompletaCliente);
      document.getElementById("comunaCard").innerHTML = comunaCliente;
    });
  } else {
    document.getElementById("barrio").setAttribute("disabled", "");
  }

  if(ciudadCliente === "4"){
    document.getElementById("costoDomicilio").innerHTML = costoDomicilioMedio;
  }

  if(ciudadCliente === "5"){
    document.getElementById("costoDomicilio").innerHTML = costoDomicilioMedio;
  }
  if(ciudadCliente === "6"){
    document.getElementById("costoDomicilio").innerHTML = costoDomicilioMedio;
  }
  if(ciudadCliente === "7"){
    document.getElementById("costoDomicilio").innerHTML = costoDomicilioPro;
  }
});


// -----------no añade domicilio----------

domicilioNo.addEventListener("click", function () {
  var i;  
  const noQuiereDomicilio = domicilioNo.value;
  InformacionCompletaCliente.push(noQuiereDomicilio);
  console.log(InformacionCompletaCliente);
  for (i = 0; i < divaddress.length; i++) {
    divaddress[i].style.display = "none";
  }
});

// ------------------funcion obtener valor direccion------------

const obtenerValorDireccion = () => {
    const direccionCleinte = valorDireccion.value.toUpperCase();
    InformacionCompletaCliente.push(direccionCleinte);
    console.log(InformacionCompletaCliente);
    document.getElementById("direccionCard").innerHTML = direccionCleinte;
};
valorDireccion.addEventListener("blur", obtenerValorDireccion);

// ------------------funcion obtener valor comentario------------

  const obtenerValorComentarios = () => {
    const comentarioCliente = valorComentarios.value;
    document.getElementById("comentarioCard").innerHTML = comentarioCliente;
    InformacionCompletaCliente.push(comentarioCliente);
    console.log(InformacionCompletaCliente);
};

valorComentarios.addEventListener("blur", obtenerValorComentarios );




// ----------------valeidacion Formulario-----------------


document.getElementById("formularioformateo").addEventListener("submit", function (e) {
  e.preventDefault();
  if (valorNombre.value === null || valorNombre.value === ""){
    valorNombre.style.borderColor = "red";
    document.getElementById("text-validar-nombre").style.display ="inline";
    valorNombre.focus();
  }
  if (valorApellido.value === null || valorApellido.value === ""){
    valorApellido.style.borderColor = "red";
    document.getElementById("text-validar-apellido").style.display ="inline";
    valorApellido.focus();
  }
  if(valorTel.value === null || valorTel.value === "" ){
    valorTel.style.borderColor = "red";
    document.getElementById("text-validar-tel").style.display = "inline";
  }
  if(valorEmail.value === null || valorEmail.value === ""){
    valorEmail.style.borderColor = "red";
    document.getElementById("text-validar-email").style.display = "inline";
  }
  if (tipoFormateo.selectedIndex === 0 || tipoFormateo.selectedIndex === "") {
    tipoFormateo.style.borderColor = "red";
    document.getElementById("text-validar-tipoformateo").style.display = "inline";
  }

  // if (programasParaInstalar.value === null || programasParaInstalar.value === "") {
  //   programasParaInstalar.style.borderColor = "red";
  //   document.getElementById("text-validar-programas").style.display = "inline";
  // }

  if (document.formularioformateo.gridRadios[0].checked === true || document.formularioformateo.gridRadios[1].checked === true){
  }else {
    // alert("seleccione si desea realizar domicilio");
    document.getElementById("gridRadios2").focus();
    }

  if (document.formularioformateo.gridRadios[0].checked === true &       valorCiudad.selectedIndex === 0){
    valorCiudad.style.borderColor = "red";
    document.getElementById("text-validar-ciudad").style.display = "inline";
  } 
  
  if ( valorCiudad.selectedIndex === 3 & valorComuna.value === "" ){
    valorComuna.style.borderColor = "red";
    document.getElementById("text-validar-barrio").style.display = "inline";
    
  }

  if (document.formularioformateo.gridRadios[0].checked === true &  valorDireccion.value === ""){
    valorDireccion.style.borderColor = "red";
    document.getElementById("text-validar-direccion").style.display = "inline";
  }
 
} );



}

export default formAndInvoice;