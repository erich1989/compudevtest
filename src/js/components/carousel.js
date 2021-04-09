import imageSoperte from "../../images/medellin1.jpg";
import mano from "../../images/medellin2.jpg";
import team from "../../images/medellin3.jpg";

const Carousel = () => {
  const contentCarousel = document.getElementById("carousel");
  contentCarousel.innerHTML += ` 

  <div class="d-flex justify-content-center conteiner-carousel">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel" style="width:900px; height:400px" >
    <!--<ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>-->

    <div class="carousel-inner bg-dark" >
    <div class="capa">
      <div class="carousel-item active">
        <img src=${imageSoperte} class="d-block w-100 img-fluid" alt="..." style="width:100%; height:400px; object-fit:cover">
        <div class="carousel-caption d-none d-md-block">
          <!--<h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>-->
        </div>
      </div>

      <div class="carousel-item">
        <img src=${team} class="d-block w-100" alt="..." style="width:100%; height:400px; object-fit:cover">
        <div class="carousel-caption d-none d-md-block">
          <!--<h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->
        </div>
      </div>

      <div class="carousel-item">
        <img src=${mano} class="d-block w-100" alt="..." style="width:100%; height:400px; object-fit:cover">
        <div class="carousel-caption d-none d-md-block">
          <!--<h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>-->
        </div>
      </div>
      </div>
    </div>

  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
  
  `;
};

export default Carousel;
