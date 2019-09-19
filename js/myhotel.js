const showServer = (link, myhotels) => {
  $.ajax({
    method: "GET",
    url: link,
    success: function(result) {
      let myData = "";

      for (const key in result) {
        const element = result[key];

        myData += `<div class="col-md-3">
          <div class='card mt-2'>
            <img class="card-img deal" src="${element.picture1}" alt="" />
            <div class="card-img-overlay">
              "<p class="overlay-price">45%<i>off</i></p>
            </div>
          </div>
          <div class="card-body">
            <a class="card-link" href="hotel.html?id=${element.id}"><b> ${element.hotelName}</b></a>
            <small><p> ${element.hotelarea} , ${element.hotelstate}</p></small>
           <button class ="btn btn-primary" data-toggle="modal" data-target="#myModal">Update</button>
           <span> <button class ="btn btn-danger">Delete</button> </span>
          </div>
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
        <form id="hotelForm">
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
        <button class="btn btn-success" type="submit">
          <i class="fas fa-message"></i> Send
        </button>
      </form>
                      </div>
                  
                  </div>
              </div>
          </div>
          <!--888888888888888888888888888 END OF Modal 888888888888888888888888-->
          
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

// const postServers = (link, data) => {
//   console.log(data);

//   $.ajax({
//     method: "POST",
//     url: link,
//     data: data,
//     success: function(result) {},
//     error: function(error) {
//       console.log(error);
//     }
//   });
// };

// $(document).ready(function() {
//   $("#hotelForm").on("submit", function(e) {
//     e.preventDefault();

//     let hotelName = document.getElementById("hotelname").value;
//     let hotelAddress = document.getElementById("hoteladdress").value;
//     let pics = $("#hotelpictures").val();
//     let email = $("#hidenemail").val();
//     let hotelInformation = $("#Hotelfacilities").val();
//     let about = $.trim($("#aboutthehotel").val());
//     let price = $.trim($("#hotelprice").val());
//     let hotelarea = $.trim($("#hotelarea").val());
//     let hotelstate = $.trim($("#hotelstate").val());
//     let hidemail = $("#hidemail").val();

//     let picture1 = pics[0];
//     let picture2 = pics[1];
//     let picture3 = pics[2];

//     const data = {
//       hotelName,
//       hotelAddress,
//       hotelarea,
//       hotelstate,
//       price,
//       picture1,
//       picture2,
//       picture3,
//       hotelInformation,
//       aboutHotel: about
//     };

//     const link = `http://localhost:3000/hotels?email=${hidemail}`;

//     postServers(link, data);
//   });
// });
