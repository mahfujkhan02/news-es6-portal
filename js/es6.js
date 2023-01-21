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
  