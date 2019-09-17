const loginServer = (link, input) => {
  $.ajax({
    method: "GET",
    url: link,
    success: function(result) {
      console.log(result);
      for (let index = 0; index < result.length; index++) {
        const element = result[index];
        console.log(element.email);
        console.log(element.password);

        if (
          element.email == input.email &&
          element.password == input.password
        ) {
          alert(`Welcome ${element.name}`);
            let registeredUser = document.getElementById("registeredUser");
            
          document.location = "../registerHotel.html";
        } else {
          alert(`Incorrect Password Or Email`);
          input.password = " ";
          input.email = " ";
        }
      }
    },
    error: function(error) {
      console.log(error);
    }
  });
};

$(document).ready(function() {
  $("#loginForm").on("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("signEmail").value;
    let password = document.getElementById("signPassword").value;

    const link = "http://localhost:3000/newuser?email=" + email;

    const input = {
      password,
      email
    };

    loginServer(link, input);
  });
});
