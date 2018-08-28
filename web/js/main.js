define([
  "jquery",
], 
function($) {
  "use strict";

  //navigation toggle
  $('.nav-toggle').click(function () {
    $(this).toggleClass('fa-close');
    $('.nav-sections-item-content ul').toggleClass('open');
  });

  return;
});
