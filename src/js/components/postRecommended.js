const postRecommended = (json) => {
  let widthWindows = 0;

  if (window.innerWidth <= 568) {
    widthWindows = 200;
  } else {
    widthWindows = 290;
  }
  const contentPostRecommended = document.getElementById("postrecommended");

  contentPostRecommended.innerHTML += `
  <div class="post-recomendados container-fluid p-0 pt-md-0 pr-md-5 pb-md-5 pl-md-5 m-0 m-md-0">
    <div class="row w-100 m-0">
      <div class="col-12 col-md-6  p-3 p-md-5" >
        <h4 class="text-center text-md-left">Recomendado</h4>
        <div class="card">
          <div class="card-header p-0 ">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height=${widthWindows}
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
          </div>
          <div class="card-body">
            <h5 class="card-title">${json.postRecommended[0].title}</h5>
            <p class="card-text">${json.postRecommended[0].summary}</p>
          </div>
          <div class="card-footer text-muted">${json.postRecommended[0].publicationdDate}</div>
        </div>
      </div>

      <div class="col-12 col-md-6  p-3 pt-md-5 pr-md-5 pb-md-5 ">
        <h4 class="text-center text-md-left">Lo más leído</h4>
        <div id="masvistos"></div>
      </div>

    </div>
  </div>

  `;
  
};

export default postRecommended;
