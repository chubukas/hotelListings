const showServer = (link, rowDeals, rowOne, rowTwo) => {
  $.ajax({
    method: "GET",
    url: link,
    success: function(result) {
      console.log(result);

      let fullData = "";
      let fac = "";

      function name(facilities) {
        for (let index = 0; index < facilities.length; index++) {
          const e = facilities[index];
          console.log(e);
          fac += `<div class="col-md-3">${e}</div>`;
        }
        return fac;
        console.log(fac);
      }
      for (const key in result) {
        const element = result[key];
        //   console.log(element.hotelInformation);
        let facilities = element.hotelInformation;

        fullData += `<div class="row" >
        <div class="col-md-6 bg-default">
        <h4> ${element.hotelName}</h4>
           <small> ${element.hotelAddress}, ${element.hotelarea}, ${
          element.hotelstate
        }</small>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4"> <div class='card'>
        <img class="card-img " src="${element.picture1}" alt="" />
      </div></div>
        <div class="col-md-4"><div class='card'>
        <img class="card-img" src="${element.picture2}" alt="" />
      </div></div>
        <div class="col-md-4"> <div class='card'>
        <img class="card-img" src="${element.picture3}" alt="" />
      </div></div>
    </div>
    <div>
        <h4>Hotel Information</h4>
    </div>
    <div class="row" id='fach'>
    ${name(facilities)}
    </div>
    <div class="about">about</div>`;
        rowDeals.html(fullData);
      }
    },
    error: function(error) {
      console.log(error);
    }
  });
};

function mylink(split) {
  for (const key in split) {
    const element = split[key];

    if (!isNaN(element)) {
      return (alink = parseInt(element));
    }
  }
}

$(document).ready(function() {
  let rowDeals = $("#abouthotel");
  let rowOne = $("#popular-first-row");
  let rowTwo = $("popular-second-row");

  let url = document.location.search;
  let split = url.split("");

  let thelink = mylink(split);

  const link = `http://localhost:3000/hotels?id=${thelink}`;
  console.log(link);

  showServer(link, rowDeals, rowOne, rowTwo);
});
