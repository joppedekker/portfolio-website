console.log("Checking out the code, huh? ;-)\n\nWell, if you're looking for an UX Designer with knowledge of front-end development, you've found me! This website was designed and coded by me in HTML, CSS and javascript.\n\nEnjoy looking through the code and let me know what you think of it!\n\nBest regards, Joppe")

//For projects coming soon
$(document).ready(function() {
  $(".project").on("mouseenter", function() {
    $(this).find(".project-details").fadeIn();
  });
  $(".project").on("mouseleave", function() {
    $(this).find(".project-details").fadeOut();
  });
});

//scroll animation from top to specific section
$('a[href^="#"]').on('click', function(event) {

  var target = $(this.getAttribute('href'));

  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});
