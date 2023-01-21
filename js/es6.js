
// https://openapi.programming-hero.com/api/news/category/01

let loadData = () => {
  try {
    fetch("https://openapi.programming-hero.com/api/news/category/01")
      .then((res) => res.json())
      .then((data) => displayNews(data.data));
    spinnerLoading(true);
  } catch (error) {
    console.log(error);
  }
};

let displayNews = (allNews) => {
  // console.log(allNews);
  let newsField = document.getElementById("news-field");
  newsField.textContent = "";
  newsField.value == "";
  for (news of allNews) {
    // console.log(news);
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card mb-3 shadow-lg" style="max-width: 840px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="${news.image_url}"
          class="img-fluid rounded-start news-img"
          alt="thumbnail"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${news.title}</h5>
          <p class="card-text"></p>
          <p class="card-text news-description">
           ${news.details.slice(0, 300).concat("...")}
          </p>
          <div class="more-detail d-flex justify-content-between">
            <div class="author">
              <img src="${news.author.img}" alt="" />
              <span id="author-name">${
                news.author.name ? news.author.name : "No name given"
              }</span>
            </div>
            <div class="view">
            <p> views : ${news.total_view ? news.total_view : "No views"}</p>
            </div>
        
            <div class="more">
              <button onclick ="showMoreInfo('${
                news._id
              }')" class="trending" data-bs-toggle="modal" data-bs-target="#exampleModal">see more</button>
       
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;

    newsField.append(card);
    spinnerLoading(false);
  }
};   

// show more Details modal

let showMoreInfo = (id) => {
  fetch(`https://openapi.programming-hero.com/api/news/${id}`)
    .then((res) => res.json())
    .then((data) => showmore(data.data[0]));
};


// spinner loader

let spinnerLoading = (spinner) => {
  let loading = document.getElementById("spinner");

  if (spinner) {
    loading.classList.remove("d-none");
  } else {
    loading.classList.add("d-none");
  }
};
// modal
let showmore = (details) => {
  console.log(details);
  let modalBody = document.getElementById("modal");
  modalBody.classList.add("p-4");
  modalBody.classList.add("modalInfo");
  modalBody.innerHTML = `
  <img class="img" src = "${details.author.img}">
  <h2>${details.title}</h2>
  <p>Rating: <span>${details.rating.badge}</span></p>
  <img src ="${details.image_url}">
  <p class="card-text">
  ${details.details}
 </p>
  `;
};



// category list

// sports
document.getElementById("sports").addEventListener("click", function () {
  let url = `https://openapi.programming-hero.com/api/news/category/04`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => cate(data.data));
  spinnerLoading(true);
});


let cate = (sports) => {
  if (sports.length == 0) {
    let myAlert = document.getElementById("no-news");
    myAlert.classList.remove("d-none");
    // show news number
    showNewsNumber = document.getElementById("news-numbers");
    showNewsNumber.innerText = sports.length;
  } else {
    let myAlert = document.getElementById("no-news");
    myAlert.classList.add("d-none");
    // display post numbers
    let showNewsNumber = document.getElementById("news-numbers");
    showNewsNumber.innerText = sports.length;
  }
  let newsField = document.getElementById("news-field");
  newsField.textContent = "";
  for (news of sports) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card mb-3 shadow-lg" style="max-width: 840px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="${news.image_url}"
          class="img-fluid rounded-start news-img"
          alt=""
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${news.title}</h5>
          <p class="card-text"></p>
          <p class="card-text">
           ${news.details.slice(0, 300).concat("...")}
          </p>
          <div class="more-detail d-flex justify-content-between">
            <div class="author">
              <img src="${news.author.img}" alt="" />
              <span id="author-name">${
                news.author.name ? news.author.name : "No name given"
              }</span>
            </div>
            <div class="view">
            <p> views : ${news.total_view ? news.total_view : "No views"}</p>
            </div>
        
            <div class="more">
            <button onclick ="showMoreInfo('${
              news._id
            }')" class="trending" data-bs-toggle="modal" data-bs-target="#exampleModal">see more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    newsField.append(card);
  }
  spinnerLoading(false);
};

// regular News
document.getElementById("regular").addEventListener("click", function () {
  let url = `https://openapi.programming-hero.com/api/news/category/02`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => cate(data.data));
  // loading start icon
  spinnerLoading(true);
});

let regularNews = (regulars) => {
  if (regulars.length == 0) {
    let myAlert = document.getElementById("no-news");
    myAlert.classList.remove("d-none");
    // display post numbers
    let showNewsNumber = document.getElementById("news-numbers");
    showNewsNumber.innerText = regulars.length;
  } else {
    let myAlert = document.getElementById("no-news");
    myAlert.classList.add("d-none");
    // display post numbers
    let showNewsNumber = document.getElementById("news-numbers");
    showNewsNumber.innerText = regulars.length;
  }
  let newsField = document.getElementById("news-field");
  newsField.textContent = "";
  for (news of regulars) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card mb-3 shadow-lg" style="max-width: 840px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="${news.image_url}"
          class="img-fluid rounded-start news-img"
          alt=""
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${news.title}</h5>
          <p class="card-text"></p>
          <p class="card-text">
           ${news.details.slice(0, 300).concat("...")}
          </p>
          <div class="more-detail d-flex justify-content-between">
            <div class="author">
              <img src="${news.author.img}" alt="" />
              <span id="author-name">${
                news.author.name ? news.author.name : "No name given"
              }</span>
              <p>${news.author.published_date}</p>
            </div>
            <div class="view">
            <p> views : ${news.total_view ? news.total_view : "No views"}</p>
            </div>
        
            <div class="more">
            <button onclick ="showMoreInfo('${
              news._id
            }')" class="trending" data-bs-toggle="modal" data-bs-target="#exampleModal">see more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    newsField.append(card);
  }
  // loading stop icon
  spinnerLoading(false);
};
// breaking News

document.getElementById("breakingNews").addEventListener("click", function () {
  let url = `https://openapi.programming-hero.com/api/news/category/01`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => breakingNews(data.data));
  // spinner loadnig icon
  spinnerLoading(true);
});

let breakingNews = (breaking) => {
  if (breaking.length == 0) {
    let myAlert = document.getElementById("no-news");
    myAlert.classList.remove("d-none");
    // display post numbers
    let showNewsNumber = document.getElementById("news-numbers");
    showNewsNumber.innerText = breaking.length;
  } else {
    let myAlert = document.getElementById("no-news");
    myAlert.classList.add("d-none");

    // display post numbers
    let showNewsNumber = document.getElementById("news-numbers");
    showNewsNumber.innerText = breaking.length;
  }
  let newsField = document.getElementById("news-field");
  newsField.textContent = "";
  for (news of breaking) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card mb-3 shadow-lg" style="max-width: 840px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="${news.image_url}"
          class="img-fluid rounded-start news-img"
          alt=""
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${news.title}</h5>
          <p class="card-text"></p>
          <p class="card-text">
           ${news.details.slice(0, 300).concat("...")}
          </p>
          <div class="more-detail d-flex justify-content-between">
            <div class="author">
              <img src="${news.author.img}" alt="" />
              <span id="author-name">${
                news.author.name ? news.author.name : "No name given"
              }</span>
              <p>${news.author.published_date}</p>
            </div>
            <div class="view">
            <p> views : ${news.total_view ? news.total_view : "No views"}</p>
            </div>
        
            <div class="more">
            <button onclick ="showMoreInfo('${
              news._id
            }')" class="trending" data-bs-toggle="modal" data-bs-target="#exampleModal">see more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    newsField.append(card);
  }
  spinnerLoading(false);
};

// InterNational News

document
  .getElementById("internationalNews")
  .addEventListener("click", function () {
    let url = `https://openapi.programming-hero.com/api/news/category/03`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => internationalNews(data.data));
    // spinner loader
    spinnerLoading(true);
  });

let internationalNews = (interNews) => {
  if (interNews.length == 0) {
    let myAlert = document.getElementById("no-news");
    myAlert.classList.remove("d-none");
    // display post numbers
    let showNewsNumber = document.getElementById("news-numbers");
    showNewsNumber.innerText = interNews.length;
  } else {
    let myAlert = document.getElementById("no-news");
    myAlert.classList.add("d-none");
    // display post numbers
    let showNewsNumber = document.getElementById("news-numbers");
    showNewsNumber.innerText = interNews.length;
  }
  let newsField = document.getElementById("news-field");
  newsField.textContent = "";
  for (news of interNews) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card mb-3 shadow-lg" style="max-width: 840px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="${news.image_url}"
          class="img-fluid rounded-start news-img"
          alt=""
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${news.title}</h5>
          <p class="card-text"></p>
          <p class="card-text">
           ${news.details.slice(0, 300).concat("...")}
          </p>
          <div class="more-detail d-flex justify-content-between">
            <div class="author">
              <img src="${news.author.img}" alt="" />
              <span id="author-name">${
                news.author.name ? news.author.name : "No name given"
              }</span>
            </div>
            <div class="view">
            <p> views : ${news.total_view ? news.total_view : "No views"}</p>
            </div>
        
            <div class="more">
            <button onclick ="showMoreInfo('${
              news._id
            }')" class="trending" data-bs-toggle="modal" data-bs-target="#exampleModal">see more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    newsField.append(card);
  }
  // spinner loading stop
  spinnerLoading(false);
};

// EnterTainment News

document.getElementById("entertainment").addEventListener("click", function () {
  let url = `https://openapi.programming-hero.com/api/news/category/05`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => internationalNews(data.data));
  // spinner loading start
  spinnerLoading(true);
});

let entertainmentNews = (entertainment) => {
  if (entertainment.length == 0) {
    let myAlert = document.getElementById("no-news");
    myAlert.classList.remove("d-none");
    // show post numbers
  } else {
    let myAlert = document.getElementById("no-news");
    myAlert.classList.add("d-none");
    // display post numbers
  }
  let newsField = document.getElementById("news-field");
  newsField.textContent = "";
  for (news of entertainment) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card mb-3 shadow-lg" style="max-width: 840px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="${news.image_url}"
          class="img-fluid rounded-start news-img"
          alt=""
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${news.title}</h5>
          <p class="card-text"></p>
          <p class="card-text">
           ${news.details.slice(0, 300).concat("...")}
          </p>
          <div class="more-detail d-flex justify-content-between">
            <div class="author">
              <img src="${news.author.img}" alt="" />
              <span id="author-name">${
                news.author.name ? news.author.name : "No name given"
              }</span>
            </div>
            <div class="view">
            <p> views : ${news.total_view ? news.total_view : "No views"}</p>
            </div>
        
            <div class="more">
            <button onclick ="showMoreInfo('${
              news._id
            }')" class="trending" data-bs-toggle="modal" data-bs-target="#exampleModal">see more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    newsField.append(card);
  }
  // spinner-loading stop
  spinnerLoading(false);
};

// arts

document.getElementById("arts").addEventListener("click", function () {
  let url = `https://openapi.programming-hero.com/api/news/category/07`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => artsNews(data.data));
  // spinner loading start
  spinnerLoading(true);
});

let artsNews = (arts) => {
  if (arts.length == 0) {
    let myAlert = document.getElementById("no-news");
    myAlert.classList.remove("d-none");
  } else {
    let myAlert = document.getElementById("no-news");
    myAlert.classList.add("d-none");
    // display post numbers
    let showNewsNumber = document.getElementById("news-numbers");
    showNewsNumber.innerText = arts.length;
  }
  let newsField = document.getElementById("news-field");
  newsField.textContent = "";
  for (news of arts) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card mb-3 shadow-lg" style="max-width: 840px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="${news.image_url}"
          class="img-fluid rounded-start news-img"
          alt=""
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${news.title}</h5>
          <p class="card-text"></p>
          <p class="card-text">
           ${news.details.slice(0, 300).concat("...")}
          </p>
          <div class="more-detail d-flex justify-content-between">
            <div class="author">
              <img src="${news.author.img}" alt="" />
              <span id="author-name">${
                news.author.name ? news.author.name : "No name given"
              }</span>
            </div>
            <div class="view">
            <p> views : ${news.total_view ? news.total_view : "No views"}</p>
            </div>
        
            <div class="more">
            <button onclick ="showMoreInfo('${
              news._id
            }')" class="trending" data-bs-toggle="modal" data-bs-target="#exampleModal">see more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    newsField.append(card);
  }
  // spinner stop
  spinnerLoading(false);
};
// culture
document.getElementById("culture").addEventListener("click", function () {
  let url = `https://openapi.programming-hero.com/api/news/category/06`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => cultureNews(data.data));
  // spinner start
  spinnerLoading(true);
});

let cultureNews = (culture) => {
  let newsField = document.getElementById("news-field");
  newsField.textContent = "";
  if (culture.length == 0) {
    let myAlert = document.getElementById("no-news");
    myAlert.classList.remove("d-none");
    // display post numbers
    let showNewsNumber = document.getElementById("news-numbers");
    showNewsNumber.innerText = culture.length;
  } else {
    let myAlert = document.getElementById("no-news");
    myAlert.classList.add("d-none");
    // display post numbers
    let showNewsNumber = document.getElementById("news-numbers");
    showNewsNumber.innerText = culture.length;
  }
  for (news of culture) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card mb-3 shadow-lg" style="max-width: 840px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="${news.image_url}"
          class="img-fluid rounded-start news-img"
          alt=""
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${news.title}</h5>
          <p class="card-text"></p>
          <p class="card-text">
           ${news.details.slice(0, 300)}
          </p>
          <div class="more-detail d-flex justify-content-between">
            <div class="author">
              <img src="${news.author.img}" alt="" />
              <span id="author-name">${
                news.author.name ? news.author.name : "No name given"
              }</span>
              
            </div>
            <div class="view">
            <p> views : ${news.total_view ? news.total_view : "No views"}</p>
            </div>
        
            <div class="more">
            <button onclick ="showMoreInfo('${
              news._id
            }')" class="trending" data-bs-toggle="modal" data-bs-target="#exampleModal">see more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    newsField.append(card);
  }
  // spinner stop
  spinnerLoading(false);
};

// All news

document.getElementById("allnews").addEventListener("click", function () {
  let url = `https://openapi.programming-hero.com/api/news/category/08`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => allnewsDisplay(data.data));
  // spinner start
  spinnerLoading(true);
});

let allnewsDisplay = (allNewsd) => {
  let newsField = document.getElementById("news-field");
  newsField.textContent = "";
  if (allNewsd.length == 0) {
    let myAlert = document.getElementById("no-news");
    myAlert.classList.remove("d-none");
    // display post numbers
    let showNewsNumber = document.getElementById("news-numbers");
    showNewsNumber.innerText = allNewsd.length;
  } else {
    let myAlert = document.getElementById("no-news");
    myAlert.classList.add("d-none");
    // display post numbers
    let showNewsNumber = document.getElementById("news-numbers");
    showNewsNumber.innerText = allNewsd.length;
  }
  for (news of allNewsd) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card mb-3 shadow-lg" style="max-width: 840px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="${news.image_url}"
          class="img-fluid rounded-start news-img"
          alt=""
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${news.title}</h5>
          <p class="card-text"></p>
          <p class="card-text">
           ${news.details.slice(0, 300)}
          </p>
          <div class="more-detail d-flex justify-content-between">
            <div class="author">
              <img src="${news.author.img}" alt="" />
              <span id="author-name">${
                news.author.name ? news.author.name : "No name given"
              }</span>
              
            </div>
            <div class="view">
            <p> views : ${news.total_view ? news.total_view : "No views"}</p>
            </div>
        
            <div class="more">
            <button onclick ="showMoreInfo('${
              news._id
            }')" class="trending" data-bs-toggle="modal" data-bs-target="#exampleModal">see more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    newsField.append(card);
  }
  // spinner stop
  spinnerLoading(false);
};

//home
document.getElementById("home").addEventListener("click", function () {
  let url = `https://openapi.programming-hero.com/api/news/category/08`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => home(data.data));
  // spinner start
  spinnerLoading(true);
});

let home = (homes) => {
  let newsField = document.getElementById("news-field");
  newsField.textContent = "";
  if (homes.length == 0) {
    let myAlert = document.getElementById("no-news");
    myAlert.classList.remove("d-none");
    // display post numbers
    let showNewsNumber = document.getElementById("news-numbers");
    showNewsNumber.innerText = homes.length;
  } else {
    let myAlert = document.getElementById("no-news");
    myAlert.classList.add("d-none");
    // display post numbers
    let showNewsNumber = document.getElementById("news-numbers");
    showNewsNumber.innerText = homes.length;
  }
  for (news of homes) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card mb-3 shadow-lg" style="max-width: 840px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="${news.image_url}"
          class="img-fluid rounded-start news-img"
          alt=""
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${news.title}</h5>
          <p class="card-text"></p>
          <p class="card-text">
           ${news.details.slice(0, 300).concat("...")}
          </p>
          <div class="more-detail d-flex justify-content-between">
            <div class="author">
              <img src="${news.author.img}" alt="" />
              <span id="author-name">${
                news.author.name ? news.author.name : "No name given"
              }</span>
              
            </div>
            <div class="view">
            <p> views : ${news.total_view ? news.total_view : "No views"}</p>
            </div>
        
            <div class="more">
            <button onclick ="showMoreInfo('${
              news._id
            }')" class="trending" data-bs-toggle="modal" data-bs-target="#exampleModal">see more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    newsField.append(card);
  }
  // spinner stop
  spinnerLoading(false);
};

loadData();
entertainment;



