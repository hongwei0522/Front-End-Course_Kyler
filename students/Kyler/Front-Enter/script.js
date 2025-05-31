console.log('JS is working');
const header = document.querySelector('header'); 
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
//loading handle
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.intro-screen').classList.add('slide-up');
  }, 1500); // 等 1.5 秒才開始動畫
});
//search btn
const searchToggle = document.querySelector(".search-toggle");
const searchPanel = document.querySelector(".search-panel");
const shadowMask = document.querySelector(".shadow-mask");

searchToggle.addEventListener("click",function(){
  searchPanel.classList.toggle("active");
  shadowMask.classList.toggle("active");
})

// back to top
const scrollToBtn = document.querySelector(".scroll-top");
scrollToBtn.addEventListener("click",function(){
   document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});