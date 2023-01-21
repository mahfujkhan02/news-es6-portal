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
  