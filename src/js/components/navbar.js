import logoCompudev from '../../images/compudevazuloscuro.png';

const navBar =() => {
  

  const textNavBar = document.getElementById("navbar");
  
    textNavBar.innerHTML += `
  
   <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
   <a class="navbar-brand ml-0 ml-md-5" href="/compudev/"><img src=${logoCompudev} alt="" width="120" height="40"></a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
  
   <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
     <ul class="navbar-nav ml-auto mr-auto mt-2 mt-lg-0">
       <li class="nav-item active">
         <a class="nav-link py-2" href="/compudev/">Home <span class="sr-only">(current)</span></a>
       </li>
       <li class="nav-item">
         <a class="nav-link py-2" href="/compudev/servicios/">Servicios</a>
       </li>
       <li class="nav-item">
         <a class="nav-link py-2" href="/nosotros">Nosotros</a>
       </li>
       <li class="nav-item disabled">
         <a class="nav-link" href="#">Tienda</a>
       </li>
       <li class="nav-item">
         <a class="nav-link py-2" href="/blog">Blog</a>
       </li>
     </ul>
     <form class="form-inline my-2 my-lg-0 " id="barra-busqueda" style="display: none">
       <input class="form-control mr-sm-2" type="search" placeholder="Search">
       <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Buscar</button>
     </form>
   </div>
  </nav>
    
    `
    const locationUrl = String(window.location.pathname);
    if (locationUrl === "/blog") {
      document.getElementById('barra-busqueda').style.display = "inline";
    }
    console.log(locationUrl);
  }

  export default navBar;