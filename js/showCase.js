const showServer = (link, rowDeals, rowOne, rowTwo) => {
  $.ajax({
    method: "GET",
    url: link,
    success: function(result) {
      let myData = "";
      let allData = "";
      let resverse = result.reverse();

      for (const key in result) {
        const element = result[key];

        myData += `<div class="col-md-4">
        <div class='card'>
          <img class="card-img deal" src="${element.picture1}" alt="" />
          <div class="card-img-overlay">
            "<p class="overlay-price">45%<i>off</i></p>
          </div>
        </div>
        <div class="card-body">
          <a class="card-link" href="">${element.hotelName}</a>
        </div>
        </div>`;
        rowDeals.html(myData);

        allData += `<div class="col-md-4">
        <div class='card'>
          <img class="card-img deal" src="${element.picture1}" alt="" />
        </div>
        <div class="card-body">
          <a class="card-link" href="">${element.hotelName}</a>
        </div>
        </div>`;

        rowOne.html(allData);
      }
      let itemTwo = "";
      for (const key in resverse) {
        const item = resverse[key];
        console.log(item);
        itemTwo += `<div class="col-md-4">
        <div class='card'>
          <img class="card-img deal" src="${item.picture1}" alt="" />
        </div>
        <div class="card-body">
          <a class="card-link" href="">${item.hotelName}</a>
        </div>
        </div>`;
        rowTwo.html(itemTwo);
      }
    },
    error: function(error) {
      console.log(error);
    }
  });
};

$(document).ready(function() {
  let rowDeals = $("#deals");
  let rowOne = $("#popular-first-row");
  let rowTwo = $("popular-second-row");

  const link = "http://localhost:3000/hotels";

  showServer(link, rowDeals, rowOne, rowTwo);
});
// });
