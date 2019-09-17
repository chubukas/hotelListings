const server = (method, link, data) => {
  $.ajax({
    method: method,
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
