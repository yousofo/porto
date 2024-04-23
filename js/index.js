import Swiper from "./swiper-bundle.esm.browser.min.js";
const swiper1 = new Swiper(".swiper1", {
  loop: true,
  slidesPerView: 1,
  effect: "fade",
  crossFade: true,
  // noSwiping: true,
  // centeredSlides: true,.con-logo
  spaceBetween: 0,
  noSwiping: true,
  allowTouchMove: false,
});
const swiper2 = new Swiper(".swiper2", {
  loop: true,
  speed: 700,
  slidesPerView: 1,
  effect: "coverflow",
  spaceBetween: -20,
  breakpoints: {
    640: {
      spaceBetween: 50,
    }
  },
  coverflowEffect: {
    depth: 50,
    slideShadows: true,
  },
});
function removeActive(e) {
  $(".active").each((i, ele) => ele.classList.remove("active"))
  if (e) $(".activeblob").removeClass("activeblob")
}
$(function () {
  swiper1.on("slideChange", () => {
    removeActive(true)

    switch (swiper1.activeIndex) {
      case 0:
        $(".skills").addClass("active");
        break;
      // case 1:
      // break;
      // case 2:
      //   [
      //     ...$(".con-logo"),
      //     ...$(".contact .talk, #form"),
      //   ].forEach((e) => e.classList.add("active"));
      // break;
    }

  });
  // contactBtn.on("click", function () {
  // removeActive()
  // swiper1.slideTo(2);
  // swiper1.activeIndex == 0 && $(".skills").addClass("active");
  // if (contactBlob.hasClass("activeblob")) {
  //   contactBlob.removeClass("activeblob");
  //   this.classList.remove("active");
  //   $(`#${["aboutBtn", "workBtn", , "cvBtn"][swiper1.activeIndex]}`).addClass("active")
  // }
  // else {
  //   this.classList.add("active");
  //   contactBlob.addClass("activeblob active");
  // }
  // })
  $(".js-activeBtn").each(function () {
    this.addEventListener("click", () => {
      removeActive(true)
      switch (this.id) {
        case "aboutBtn": swiper1.slideTo(0); $(".skills").addClass("active"); break;
        case "workBtn": swiper1.slideTo(1); break;
        case "contactBtn": swiper1.slideTo(2); break;
      }
      this.classList.add("active");
    })
  })
  // $("#workAbout").on("click", () => {
  //   removeActive(true)
  //   swiper1.slideTo(0);
  //   $(".skills").addClass("active");
  //   $("#aboutBtn").addClass("active");
  // })
})

window.onload = () => {
  $(".port").addClass("loaded")
  setTimeout(() => {
    $(".skills").addClass("active");
    $(".loader").hide(100)
  }, 300);
}


