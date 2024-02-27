import Swiper from "./swiper-bundle.esm.browser.min.js";
import {} from "./jquery-3.7.1.min.js"
const contactBtn = $("#contactBtn");
const slides = $(".slide-fade");
const contactBlob = $(".contact-blob");
const swiper1 = new Swiper(".swiper1", {
  loop: true,
  slidesPerView: 1,
  // noSwiping: true,
  // centeredSlides: true,.con-logo
  spaceBetween: 0,
  noSwiping: true,
  allowTouchMove: false,
});
function removeActive(e) {
  $(".active").each((i, e) => e.classList.remove("active"))
  if (e) $(".activeblob").removeClass("activeblob")
}
$(function () {
  swiper1.on("slideChange", () => {
    removeActive(true)
    slides.each((i, e) => $(e).removeClass("fade-true"))
    slides[swiper1.activeIndex].classList.add("fade-true");

    switch (swiper1.activeIndex) {
      case 0:
        $(".skills").addClass("active");
        break;
      case 1:
        ;
        break;
      case 2:
        [
          ...$(".con-logo"),
          ...$(".contact .talk, #form"),
        ].forEach((e) => e.classList.add("active"));
        break;
    }

  });
  contactBtn.on("click", function () {
    removeActive()
    swiper1.activeIndex == 0 && $(".skills").addClass("active");
    if (contactBlob.hasClass("activeblob")) {
      contactBlob.removeClass("activeblob");
      this.classList.remove("active");
      $(`#${["aboutBtn", "workBtn", , "cvBtn"][swiper1.activeIndex]}`).addClass("active")
    }
    else {
      this.classList.add("active");
      contactBlob.addClass("activeblob active");
    }
  })
  $(".js-activeBtn").each(function () {
    this.addEventListener("click", () => {
      removeActive(true)
      switch (this.id) {
        case "aboutBtn": swiper1.slideTo(0); $(".skills").addClass("active"); break;
        case "workBtn": swiper1.slideTo(1); $("#landingpagesbtn").addClass("active"); break;
        case "cvBtn": swiper1.slideTo(3); break;
      }
      this.classList.add("active");

    })
  })
  $("#workAbout").on("click", () => {
    removeActive(true)
    swiper1.slideTo(0);
    $(".skills").addClass("active");
    $("#aboutBtn").addClass("active");
  })
  })
window.onload = () => {
  $(".skills").addClass("active");
}


