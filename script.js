// Toggle some classes to make the mobile nav button work
$(function () {
   $(".fa-bars").on("click", function () {
      $("nav ul").toggleClass("nav-slide-in");
      $(".fa-bars").toggleClass("bars-slide");
   })
});