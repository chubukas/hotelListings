const showServer = (link, rowDeals, rowOne) => {
  $.ajax({
    method: "GET",
    url: link,
    success: function(result) {
      let myData = "";
      let allData = "";

      for (const key in result) {
        const element = result[key];

        myData += `<div class="col-md-3">
        <div class='card'>
          <img class="card-img deal" src="${element.picture1}" alt="" />
          <div class="card-img-overlay">
            "<p class="overlay-price">${element.discountprice}%<i> off</i></p>
          </div>
        </div>
        <div class="card-body">
          <a class="card-link" href="hotel.html?id=${element.id}"><b> ${element.hotelName}</b></a>
          <small><p> ${element.hotelarea} , ${element.hotelstate}</p></small>
        </div>
        </div>`;
        rowDeals.html(myData);

        // allData += `<div class="col-md-3">
        //     <div class='card'>
        //       <img class="card-img deal" src="${element.picture1}" alt="" />
        //     </div>
        //     <div class="card-body">
        //     <a class="card-link" href=hotel.html?id=${element.id}"> <b> ${element.hotelName}</b></a>
        //     <small><p> ${element.hotelarea} , ${element.hotelstate}</p></small>
        //     </div>
        //     </div>`;

        // rowOne.html(allData);
      }
    },
    error: function(error) {
      console.log(error);
    }
  });
};

const secoundShowServer = (link, rowOne) => {
  $.ajax({
    method: "GET",
    url: link,
    success: function(result) {
      let allData = "";

      for (const key in result) {
        const element = result[key];

        // myData += `<div class="col-md-3">
        //   <div class='card'>
        //     <img class="card-img deal" src="${element.picture1}" alt="" />
        //     <div class="card-img-overlay">
        //       "<p class="overlay-price">${element.discountprice}%<i> off</i></p>
        //     </div>
        //   </div>
        //   <div class="card-body">
        //     <a class="card-link" href="hotel.html?id=${element.id}"><b> ${element.hotelName}</b></a>
        //     <small><p> ${element.hotelarea} , ${element.hotelstate}</p></small>
        //   </div>
        //   </div>`;
        // rowDeals.html(myData);

        allData += `<div class="col-md-3">
              <div class='card'>
                <img class="card-img deal" src="${element.picture1}" alt="" />
              </div>
              <div class="card-body">
              <a class="card-link" href=hotel.html?id=${element.id}"> <b> ${element.hotelName}</b></a>
              <small><p> ${element.hotelarea} , ${element.hotelstate}</p></small>
              </div>
              </div>`;

        rowOne.html(allData);
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

  const link = "http://localhost:3000/hotels?discountprice_gte=0";
  const links = "http://localhost:3000/hotels";

  showServer(link, rowDeals, rowOne);
  secoundShowServer(links, rowOne);
});
