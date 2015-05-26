$(document).ready(function imgMove() {
  $('.thumbnail').click(function() {
    var img = $('.thumbnail .person');
    var bio = $('.slideMe');
    if (img.height() < 200) {
      img.animate({height: "30px"}, "slow");
      img.hide("slow");
      bio.show("slow");
    } else {
      img.style = "normal";
    }
  });
});
