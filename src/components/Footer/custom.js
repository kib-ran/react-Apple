import $ from "jquery";

$(function () {
  function updateFooterLinks() {
    if ($(window).width() <= 768) {
      $(".footer-links-wrapper").addClass("someClass");
    } else {
      $(".footer-links-wrapper").removeClass("someClass");
      $(".footer-links-wrapper ul").show(); // Ensure lists are visible on desktop
    }
  }

  updateFooterLinks();

  $(window).on("resize", function () {
    updateFooterLinks();
  });

  $(document).on("click", ".someClass h3", function () {
    $(this).next("ul").slideToggle();
    $(this).toggleClass("expanded");
  });
});
