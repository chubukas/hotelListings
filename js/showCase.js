const showServer = (link, come) => {
  $.ajax({
    method: "GET",
    url: link,
    success: function(result) {
      //   console.log(result);
      for (let index = 0; index < result.length; index++) {
        const element = result[index];
        // console.log(element);
        // for (k in element) {
        //   console.log(element[k]);
        // }

        for (let i = 0; i < element.length; i++) {
          const e = element[i];
          console.log(element[e]);
        }

        let deal = document.querySelectorAll(".deal");

        // for (let index = 0; index < deal.length; index++) {
        //   const dealts = deal[index];
        // }
      }
    },
    error: function(error) {
      console.log(error);
    }
  });
};

$(document).ready(function() {
  //   $("#loginForm").on("submit", function(e) {

  // let email = document.getElementById("signEmail").value;
  // let password = document.getElementById("signPassword").value;
  var come = $("#come");
  come.text = "we gooing";
  const link = "http://localhost:3000/hotels";

  // const input = {
  //   password,
  //   email
  // };
  //   let deal = document.querySelectorAll(".deal");

  showServer(link, come);
});
// });
