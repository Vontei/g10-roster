$(document).ready(function() {
  $('.thumbnail').click(function() {
    var img = $('.thumbnail .person');
    var bio = $('.slideMe');
    if (img.width() < 200) {
      img.animate({height: "30px"}, "slow");
      img.hide("slow");
      bio.show("slow");
    } //else {
      //img.animate({width: img.attr("width"), height: img.attr("height")}, 1000);
    //}
  });
});
