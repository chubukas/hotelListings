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
      }
      for (const key in result) {
        const element = result[key];
        //   console.log(element.hotelInformation);
        let facilities = element.hotelInformation;

        fullData += `
        <div class="row m-4" >
            <div class="col-md-6 bg-default">
                <h4 class="text-uppercase"> ${element.hotelName}</h4>
            <small> ${element.hotelAddress}, ${element.hotelarea}, ${
          element.hotelstate
        }</small>
            </div>
            <div class="col-md-6 bg-default text-right">
                <h4> <span>&#8358;</span>${
                  element.price
                } <small>avg/room</small></h4>
                <p>${element.discountprice}% discount </p>
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
        <h4 id="info" class="m-5 bg-warning text-center p-1">Hotel Information</h4>
    </div>
    <div class="mx-4">
    <h5>Facilities</h5>
    </div>
    <div class="row mx-4 text-muted" id='fach'>
    
    ${name(facilities)}
    </div>
    <div class="about m-4 ">
    <h5>About The Hotel<h5>
    <p class="text-muted p-4 about-text"> ${element.aboutHotel} </p>
    
    </div>
    
    <div class="m-5 text-center">
    <button class ="btn btn-primary mx-5 font-weight-bold" data-toggle="modal" data-target="#myModal">Update</button>
    <span> <button class ="btn btn-danger mx-5 font-weight-bold" id="deletebtn">Delete</button> </span>
    
    </div>

            
    <!--888888888888888888888888888 START OF Modal 888888888888888888888888-->
    <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
                
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Update Your Hotel</h5>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
            <form id="updateform">
            <div class="form-row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="hotelname">Hotel Name : </label>
                  <input type="text" class="form-control" name="" id="hotelname" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="hoteladdress">Hotel Address : </label>
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id="hoteladdress"
                  />
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="hotelarea">Hotel Area : </label>
                  <input type="text" class="form-control" name="" id="hotelarea" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="hotelstate">Hotel State : </label>
                  <input type="text" class="form-control" name="" id="hotelstate" />
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="hotelprice">Hotel Price : </label>
                  <input
                    type="number"
                    class="form-control"
                    name=""
                    id="hotelprice"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="discountprice">Discount Price : </label>
                  <input
                    type="number"
                    class="form-control"
                    name=""
                    id="discountprice"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="aboutthehotel ">About The Hotel : </label>
              <textarea
                name=""
                class="form-control"
                id="aboutthehotel"
                cols="30"
                rows="3"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="Hotelfacilities">Hotel Facilities : </label>
              <small class="form-text text-muted"> You select more than one</small>
              <select multiple class="form-control" name="" id="Hotelfacilities">
                <option value="Bar/Lounge">Bar/Lounge</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Security">Security</option>
                <option value="Wireless Internet">Wireless Internet</option>
                <option value="Luggage Storage">Luggage Storage</option>
                <option value="Air Conditioning">Air Conditioning</option>
              </select>
            </div>
    
            <div class="form-group">
              <label for="hotelpictures ">Hotel Pictures : </label>
              <small class="form-text text-muted">
                Select not more than three pictures</small
              >
              <select multiple class="form-control" name="" id="hotelpictures">
                <option value="./pictures/hotel1.jpg">picture1</option>
                <option value="./pictures/images2.jpg">picture2</option>
                <option value="./pictures/images3.jpg">picture3</option>
                <option value="./pictures/images4.jpg">picture4</option>
                <option value="./pictures/images5.jpg">picture5</option>
                <option value="./pictures/images6.jpg">picture6</option>
                <option value="./pictures/images7.jpg">picture7</option>
                <option value="./pictures/images8.jpg">picture8</option>
                <option value="./pictures/images9.jpg">picture9</option>
                <option value="./pictures/images10.jpg">picture10</option>
              </select>
              <input type="type" name="" id="hidenid" value="${element.id}" />
            </div>
            <div class="text-center">
            <button class="btn btn-success " type="submit">
            <a class="card-link text-decoration-none text-white" href="hotel.html?id=${
              element.id
            }"><i class="fas fa-message"></i> Send</a> 
            </button>
            </div>
          </form>
                          </div>
                      
                      </div>
                  </div>
              </div>
              <!--888888888888888888888888888 END OF Modal 888888888888888888888888-->
    
    `;
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

// GETTIN DATA
$(document).ready(function() {
  let rowDeals = $("#abouthotel");
  let rowOne = $("#popular-first-row");
  let rowTwo = $("popular-second-row");

  let url = document.location.search;
  let split = url.split("");

  let thelink = mylink(split);

  const link = `http://localhost:3000/hotels?id=${thelink}`;
  //   console.log(link);

  showServer(link, rowDeals, rowOne, rowTwo);
});

// UPDATING DATA
const putServers = (link, data) => {
  console.log(data);

  $.ajax({
    method: "PUT",
    url: link,
    data: data,
    success: function(result) {},
    error: function(error) {
      console.log(error);
    }
  });
};

$(document).ready(function() {
  $("#updateform").on("submit", function(e) {
    e.preventDefault();

    let hotelName = document.getElementById("hotelname").value;
    let hotelAddress = document.getElementById("hoteladdress").value;
    let pics = $("#hotelpictures").val();
    // let email = $("#hidenemail").val();
    let hotelInformation = $("#Hotelfacilities").val();
    let about = $.trim($("#aboutthehotel").val());
    let price = $.trim($("#hotelprice").val());
    let hotelarea = $.trim($("#hotelarea").val());
    let hotelstate = $.trim($("#hotelstate").val());
    let hidenid = $("#hidenid").val();

    let picture1 = pics[0];
    let picture2 = pics[1];
    let picture3 = pics[2];

    const data = {
      hotelName,
      hotelAddress,
      hotelarea,
      hotelstate,
      price,
      picture1,
      picture2,
      picture3,
      hotelInformation,
      aboutHotel: about
    };
    console.log("comeing");

    let thelinks = mylink(split);
    console.log(thelinks);
    const links = `http://localhost:3000/hotels?id=${thelinks}`;
    console.log(links);

    putServers(links, data);
  });
});

//// DELETE DATA
const deleteServers = (link, data) => {
  console.log(data);

  $.ajax({
    method: "DELETE",
    url: link,
    success: function(result) {},
    error: function(error) {
      console.log(error);
    }
  });
};

$(document).ready(function() {
  $("#deletebtn").on("click", function(e) {
    let thelinks = mylink(split);
    console.log(thelinks);
    const links = `http://localhost:3000/hotels?id=${thelinks}`;
    console.log(links);

    deleteServers(links);
  });
});
