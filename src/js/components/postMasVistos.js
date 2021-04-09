const postMasVistos = (json) => {

  for (let i = 0; i < json.postMasVistos.length; i++) {
    
    document.getElementById("masvistos").innerHTML += `
    
    <div class="card mb-3" style="max-width: 540px">
        <div class="row no-gutters">
          <div class=" col-md-6">
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="150"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: Image"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
              <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
            </svg>
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">${json.postMasVistos[i].title}</h5>
              <!-- <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p> -->
              <p class="card-text">
                <small class="text-muted">${json.postMasVistos[i].publicationdDate}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    `
  }


}

export default postMasVistos;