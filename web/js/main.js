define([
  "jquery",
], 
function($) {
  "use strict";

  //navigation toggle
  $('.nav-toggle').click(function () {
    $('.nav-sections-item-content ul').toggleClass('open');
  });

  return;
});