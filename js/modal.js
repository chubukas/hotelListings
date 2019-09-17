$(document).ready(function() {
  let modal = document.getElementById("loginmodal");
  modal.style.display = "none";

  let signinBtn = document.getElementById("signinBtn");

  registermodal = document.getElementById("registermodal");
  registermodal.style.display = "none";

  registerlink = document.getElementById("registerlink");
  // let close = document.getElementById("close");

  let button = document.getElementById("send");

  const show = () => {
    modal.style.display = "block";
    registermodal.style.display = "none";
  };

  const shows = () => {
    registermodal.style.display = "block";
    modal.style.display = "none";
  };

  // const nonShow = () => {
  //   modal.style.display = "none";
  // };

  signinBtn.addEventListener("click", show);
  registerlink.addEventListener("click", shows);
});
