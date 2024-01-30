import Swiper from "./swiper-bundle.esm.browser.min.js";
import { } from "./jquery-3.7.1.min.js"
const aboutBtn = $("#aboutBtn");
const cvBtn = $("#cvBtn");
const contactBtn = $("#contactBtn");
const workBtn = $("#workBtn");
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
window.onload = () => {
  $(".cust").each((i, e) => $(e).addClass("active"));
  //swiper1.slideTo(1);
  //contactBtn.addClass("active")
}
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
      $(`#${["aboutBtn","workBtn",,"cvBtn"][swiper1.activeIndex]}`).addClass("active")
    }
    else {
      this.classList.add("active");
      contactBlob.addClass("activeblob active");
    }
  })
  var activeBtns = $(".js-activeBtn")
  activeBtns.each(function (i) {
    this.addEventListener("click", () => {
      removeActive(true)
      switch (this.id) {
        case "aboutBtn": swiper1.slideTo(0);$(".skills").addClass("active"); break;
        case "workBtn": swiper1.slideTo(1); $("#landingpagesbtn").addClass("active"); break;
        case "cvBtn": swiper1.slideTo(3); break;
      }
      this.classList.add("active");

    })
  })

  //start mail management
  const inName = $("name");
  const inEmail = $("email");
  const inMessage = $("message");
  function sendMail() {
    var params = {
      name: inName.value,
      email: inEmail.value,
      message: inMessage.value,
    };
    emailjs
      .send("service_olca98c", "template_33wsost", params)
      .then((res) => {
        inName.value = "";
        inEmail.value = "";
        inMessage.value = "";
      })
      .catch((err) => console.log(err));
  }
  $("#submit").on("click", (e) => {
    if (
      inName.checkValidity() &&
      inEmail.checkValidity() &&
      inMessage.checkValidity()
    ) {
      e.preventDefault();
      sendMail();
    }
  });
  //end mail management
  //start map
  function suc(e) {
    console.log(e);
  }
  navigator.geolocation.getCurrentPosition(suc, suc);
  var map = L.map("map").setView([31.03, 31.389], 14);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  var marker = L.marker([31.015, 31.389]).addTo(map);
  //end map
})

