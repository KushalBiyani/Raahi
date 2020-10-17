"use strict";

$(document).ready(function () {
  $('#loginButton').click(function () {
    $('#loginModal').modal('show');
  });
  $('#contactusButton').click(function () {
    $('#contactUs').modal('show');
  });
  $('#carouselExampleIndicators').carousel({
    interval: 2000
  });
  $('#carouselExampleIndicators2').carousel({
    interval: 2000
  });
});