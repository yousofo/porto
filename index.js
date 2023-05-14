const aboutBtn = document.querySelector("#aboutBtn");
const homeBtn = document.querySelector("#homeBtn");
const contactBtn = document.querySelector("#contactBtn");
const workBtn = document.querySelector("#workBtn");
const slides = document.querySelectorAll(".slide-fade");

const swiper1 = new Swiper(".swiper1", {
  loop: true,
  slidesPerView: 1,
  // noSwiping: true,
  // centeredSlides: true,.con-logo
  spaceBetween: 0,
  noSwiping: true,
  allowTouchMove: false,
});
const swiper2 = new Swiper(".swiper2", {
  loop: true,
  slidesPerView: 2,
  // noSwiping: true,
  // centeredSlides: true,.con-logo
  spaceBetween: "10px",
  noSwiping: false,
  allowTouchMove: true,
  navigation: {
    nextEl: ".swiper2 .swiper-button-next",
    prevEl: ".swiper2 .swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 5,
    },
    1100: {
      slidesPerView: 6,
    },
    1400: {
      slidesPerView: 7,
    },
  },
});
swiper1.on("slideChange", () => {
  document.querySelectorAll(".active")
    ? document
        .querySelectorAll(".active")
        .forEach((e) => e.classList.remove("active"))
    : "";

  slides.forEach((e) => e.classList.remove("fade-true"));
  slides[swiper1.activeIndex].classList.add("fade-true");

  switch (swiper1.activeIndex) {
    case 1:
      document
        .querySelectorAll(".cust")
        .forEach((e) => e.classList.add("active"));
      break;
    case 2:
      [
        ...document.querySelectorAll(".con-logo"),
        document.querySelector(".contact .talk"),
        document.querySelector("#form"),
      ].forEach((e) => e.classList.add("active"));
      break;
  }
});
homeBtn.addEventListener("click", () => {
  swiper1.slideTo(0);
  document.querySelector("#homtBtn").classList.add("active");
});
aboutBtn.addEventListener("click", () => {
  swiper1.slideTo(1);
  document.querySelector("#aboutBtn").classList.add("active");
});
contactBtn.addEventListener("click", () => {
  swiper1.slideTo(2);
  document.querySelector("#contactBtn").classList.add("active");
});
workBtn.addEventListener("click", () => {
  swiper1.slideTo(3);
  document.querySelector("#workBtn").classList.add("active");
});

const inName = document.getElementById("name");
const inEmail = document.getElementById("email");
const inMessage = document.getElementById("message");
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

document.querySelector("#submit").addEventListener("click", (e) => {
  if (
    inName.checkValidity() &&
    inEmail.checkValidity() &&
    inMessage.checkValidity()
  ) {
    e.preventDefault();
    sendMail();
  }
});
function suc(e) {
  console.log(e);
}
console.log(navigator.geolocation.getCurrentPosition(suc, suc));
//////////////////
var map = L.map("map").setView([31.03, 31.389], 14);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
var marker = L.marker([31.015, 31.389]).addTo(map);
