const Post = (json) => {

  for (let i = 0; i < json.postHardware.length; i++){
    const contentPost = document.getElementById("peliculas");
    contentPost.innerHTML += `
      <div class="pelicula px-2" ">
        <div class="card  bodycard" id="bodycard" >
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="180"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image cap"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text>
          </svg>
          <div class="card-body">
            <p class="card-text">${json.postHardware[i].summary}</p>
            <p class="card-text">
              <small class="text-muted">${json.postHardware[i].publicationdDate}</small>
            </p>
          </div>
        </div>   
      </div>
    ` 
  }

  const fila = document.querySelector('.contenedor-carousel');
  const peliculas = document.querySelectorAll(".pelicula");
  const flechaIzquierda = document.getElementById("flecha-izquierda");
  const flechaDerecha = document.getElementById("flecha-derecha");

  // -------------------event listener para flecha derecha-------------------

  flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
      indicadorActivo.nextSibling.classList.add('activo');
      indicadorActivo.classList.remove('activo');
    }
  })

  // -------------------event listener para flecha izquierda-------------------

  flechaIzquierda.addEventListener('click', () =>{
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling){
      indicadorActivo.previousSibling.classList.add('activo');
      indicadorActivo.classList.remove('activo');
    }
  
  })

  // -------------------paginación-------------------

  const numeroPaginas = Math.ceil(peliculas.length / 5);

  for(let i = 0; i< numeroPaginas; i++){
    const indicador = document.createElement('button');

    if(i===0){
      indicador.classList.add('activo');
    }
    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click',(e)=> {
      fila.scrollLeft = i * fila.offsetWidth;

      document.querySelector('.indicadores .activo').classList.remove('activo');
    e.target.classList.add('activo');
    });
  
  }

  // -------------------Hover-------------------

  peliculas.forEach((pelicula)=>{
    pelicula.addEventListener('mouseenter',(e) =>{
      const elemto = e.currentTarget; 
      setTimeout(()=>{
        peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
        elemto.classList.add('hover');
      },300);
    });
  });

  fila.addEventListener('mouseleave',()=>{
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
  })

};



export default Post;