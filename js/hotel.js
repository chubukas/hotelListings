const postServer = (link, data) => {
  $.ajax({
    method: "POST",
    url: link,
    data: data,
    success: function(result) {
      console.log(result);
    },
    error: function(error) {
      console.log(error);
    }
  });
};

$(document).ready(function() {
  $("#signForm").on("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("registerName").value;
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;
    let hotelid = Math.floor(Math.random() * 1000)
      .toString()
      .concat("yht");

    const data = {
      name,
      password,
      email,
      isDeleted
    };

    const link = "http://localhost:3000/hotels";

    postServer(link, data);
  });
});
