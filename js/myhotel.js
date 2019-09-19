const showServer = (link, myhotels) => {
  $.ajax({
    method: "GET",
    url: link,
    success: function(result) {
      let myData = "";
      let array = [];

      function name(params) {
        if (params == "") {
          return "";
        } else {
          return `<p class="overlay-price">${params}%<i>off</i></p>`;
        }
      }

      for (const key in result) {
        const element = result[key];

        // console.log(array.push(...element.id));

        myData += `<div class="col-md-3">
          <div class='card mt-2'>
            <img class="card-img deal" src="${element.picture1}" alt="" />
            <div class="card-img-overlay">
              ${name(element.discountprice)}
            </div>
          </div>
          <div class="card-body">
            <a class="card-link" href="hotel.html?id=${element.id}"><b> ${
          element.hotelName
        }</b></a>
            <small><p> ${element.hotelarea} , ${element.hotelstate}</p></small>
          
          </div>
          </div>
  
          
          `;
        myhotels.html(myData);
      }
    },
    error: function(error) {
      console.log(error);
    }
  });
};

$(document).ready(function() {
  let myhotels = $("#myhotels");

  let hidemail = $("#hidemail").val();

  const link = `http://localhost:3000/hotels?email=${hidemail}`;
  console.log(link);

  showServer(link, myhotels);
});
