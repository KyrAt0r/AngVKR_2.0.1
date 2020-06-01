$(document).ready(function() {
  $("table").hide();
  $("h3 span").click(function() {
    $(this).parent().next('table').slideToggle();
  });
});
