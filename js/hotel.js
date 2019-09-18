const postServers = (link, data) => {
  console.log(data);

  $.ajax({
    method: "POST",
    url: link,
    data: data,
    success: function(result) {
      //   console.log(result);
    },
    error: function(error) {
      console.log(error);
    }
  });
};

// const loginServers = input => {
//   $.ajax({
//     method: "GET",
//     url: "http://localhost:3000/hotels",
//     success: function(result) {
//       for (let index = 0; index < result.length; index++) {
//         const element = result[index];

//         for (let i = 0; i < element.length; i++) {
//           const item = element[i];
//           console.log(item);

//           if (item.hotelid == input) {
//             console.log(`item.hotelid is ${item.hotelid}`);

//             return Math.floor(Math.random() * 1000000)
//               .toString()
//               .concat("yht");
//           } else {
//             return input;
//           }
//         }
//       }
//     },
//     error: function(error) {
//       console.log(error);
//     }
//   });
// };

$(document).ready(function() {
  $("#hotelForm").on("submit", function(e) {
    e.preventDefault();

    let hotelName = document.getElementById("hotelname").value;
    let hotelAddress = document.getElementById("hoteladdress").value;
    let pics = $("#hotelpictures").val();
    let facility = $("#Hotelfacilities").val();
    let about = $.trim($("#aboutthehotel").val());
    let hotelid = Math.floor(Math.random() * 1000000)
      .toString()
      .concat("yht");

    // hotelid = loginServers(hotelid);
    // console.log(`this hostelid ${hotelid}`);

    // let pictures = pics.reduce((total, cur, index) => {
    //   total = `picture${[index]} : ${cur}`;
    //   return cur;
    // }, {});

    let picture1 = pics[0];
    let picture2 = pics[1];
    let picture3 = pics[2];
    let pictures = { picture1, picture2, picture3 };
    // console.log(pictures);
    const data = {
      hotelid,
      hotelName,
      hotelAddress,
      pictures,
      hotelInformation: { facility, about }
    };

    const link = "http://localhost:3000/hotels";

    postServers(link, data);
  });
});
