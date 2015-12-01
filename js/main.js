/*
 * This script requires JQuery, so be sure to load it beforehand.
 */

/** @type {String} Value of nav list that indicate the list is open. */
var nav_list_open = 'open';

/**
 * Initialize event listeners.
 * @return {undefined}
 */

var initialize = function(){
  var main = document.getElementsByTagName('main')[0];
  var nav_menu_icon = document.getElementById('nav_menu_icon');

  nav_menu_icon.addEventListener('click', toggle_nav_list_open);
  main.addEventListener('click', remove_open);

  // Add animations for the item images.
  $(".item_image").hover(
    function() {$(this).addClass("animated bounce"); },
    function() {$(this).removeClass("animated bounce"); }
  );
};

/**
 * Toggle the nav list's value of nav_list_open.
 * @return {undefined}
 */
var toggle_nav_list_open = function() {
  console.log('toggle_nav_list_open called.');

  var nav_list = document.getElementById('nav_list');
  nav_list.classList.toggle(nav_list_open);
};

/**
 * Removes nav_list_open value from the nav list.
 * @return {undefined}
 */
var remove_open = function() {
  console.log('remove_open called.');

  var nav_list = document.getElementById('nav_list');

  nav_list.classList.remove(nav_list_open);
};

// Bind initialize function.
$(window).bind('load', initialize);
