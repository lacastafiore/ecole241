document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left'
  });
});
// Or with jQuery
$(document).ready(function () {
  $('.tooltipped').tooltip();
  $('select').formSelect();
  $(".dropdown-trigger").dropdown();
  $('.sidenav').sidenav();
  $('.tabs').tabs();
  $('.materialboxed').materialbox();
  $('.materialboxed').materialbox();
  $('.modal').modal();
  $("#search-icon").click(function (e) {
    $("#search-icon").hide();
    $("#search-form").show();
    $("#search-txt").focus();
    $("#logo").hide();
    $("#menu").hide();
  });
  $("#close").click(function (e) {
    $("#search-icon").show();
    $("#search-form").hide();
    $("#logo").show();
    $("#menu").show();
  });
  $('input.autocomplete').autocomplete({
    data: {
      "Akanda , Gabon": null,
      "Libreville, Gabon": null,
      "Owendo, Gabon": null,
    },
  });
  $("#send").click(function (e) {
    e.preventDefault();
    var label = $('#label').val();
    $("#form_test").prepend('<div class="input-field col s12 l6"><input type="text" class"validate" ><label for="label">' + label + '</label></div>');
  });
});  