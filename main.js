const aboutBtn = document.querySelector("#aboutBtn");
const homeBtn = document.querySelector("#homeBtn");
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
aboutBtn.addEventListener("click", () => {
  swiper1.slideTo(1);
});
homeBtn.addEventListener("click", () => {
  swiper1.slideTo(0);
});
// const swiper1Int = setInterval(() => {
//   swiper1.slideNext();
// }, 2000);
// swiper1.on("touchStart",(e)=>clearInterval(swiper1Int));
