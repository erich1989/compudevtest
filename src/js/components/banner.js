

const Banner = (text) => {

  const contentBanner = document.getElementById("banner");
  contentBanner.innerHTML += `
  
  <div class="container-fluid cabecera-nosotros p-0 mb-5">
    <div class="fundo-imagen p-0"></div>
    <div class="cabecera-title-about col-10 col-md-6">
      <h5>${text}</h5>
    </div>
  </div>
  
  `
  
  
  
  }
  
  export default Banner;