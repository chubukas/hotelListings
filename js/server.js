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

const getServer = link => {
  $.ajax({
    method: "GET",
    url: link,
    success: function(result) {
      console.log(result);
      return result;
    },
    error: function(error) {
      console.log(error);
    }
  });
};

module.exports = (postServer, getServer);
