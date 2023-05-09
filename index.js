const aboutBtn = document.querySelector("#aboutBtn");
const homeBtn = document.querySelector("#homeBtn");
const contactBtn = document.querySelector("#contactBtn");
const swiper1 = new Swiper(".swiper1", {
  loop: true,
  slidesPerView: 1,
  // noSwiping: true,
  // centeredSlides: true,
  spaceBetween: 0,
  noSwiping: true,
  allowTouchMove: false,
});
swiper1.on("slideChange", () => {
  swiper1.activeIndex === 1
    ? document.querySelectorAll(".cust").forEach((e) => {
        e.classList.add("active");
      })
    : document.querySelectorAll(".cust").forEach((e) => {
        e.classList.remove("active");
      });
});

homeBtn.addEventListener("click", () => {
  swiper1.slideTo(0);
});
aboutBtn.addEventListener("click", () => {
  swiper1.slideTo(1);
});
contactBtn.addEventListener("click", () => {
  swiper1.slideTo(2);
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