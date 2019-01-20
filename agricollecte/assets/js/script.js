// Or with jQuery
$(document).ready(function(){
  $('.tooltipped').tooltip();
    $('select').formSelect();
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.materialboxed').materialbox();
    $('.materialboxed').materialbox();
    $('.modal').modal();
    $("#search-icon").click(function(e) {
      $("#search-icon").hide();
      $("#search-form").show();
      $("#search-txt").focus();
      $("#logo").hide();
      $("#menu").hide();
    });
    $("#close").click(function(e) {
      $("#search-icon").show();
      $("#search-form").hide();
      $("#logo").show();
      $("#menu").show();
    });
  });
  