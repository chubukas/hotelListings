const postServers = (link, data) => {
  console.log(data);

  $.ajax({
    method: "POST",
    url: link,
    data: data,
    success: function(result) {},
    error: function(error) {
      console.log(error);
    }
  });
};

$(document).ready(function() {
  $("#hotelForm").on("submit", function(e) {
    e.preventDefault();

    let hotelName = document.getElementById("hotelname").value;
    let hotelAddress = document.getElementById("hoteladdress").value;
    let pics = $("#hotelpictures").val();
    let email = $("#hidenemail").val();
    let hotelInformation = $("#Hotelfacilities").val();
    let about = $.trim($("#aboutthehotel").val());
    let price = $.trim($("#hotelprice").val());
    let discountprice = $.trim($("#discountprice").val());
    let hotelarea = $.trim($("#hotelarea").val());
    let hotelstate = $.trim($("#hotelstate").val());

    let picture1 = pics[0];
    let picture2 = pics[1];
    let picture3 = pics[2];

    const data = {
      hotelName,
      hotelAddress,
      hotelarea,
      hotelstate,
      price,
      discountprice,
      picture1,
      picture2,
      picture3,
      hotelInformation,
      aboutHotel: about,
      email
    };

    const link = "http://localhost:3000/hotels";

    postServers(link, data);
  });
});
