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