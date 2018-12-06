$(document).ready(function() {

  let Menu = $('._menu');

  $('._nav-hamburger').click(function (e) {
    e.preventDefault();
    Menu.toggleClass('is-open');
    $(this).toggleClass('is-active');
    return false;
  });

});
