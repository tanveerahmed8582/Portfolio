// creating a portfolio tabbed conponent   //

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelector(".img-overlay");

p_btns.addEventListener('click', (e) => {
   const p_btn_clicked = e.target;

   p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

   p_btn_clicked.classList.add("p-btn-active");

   //to find the number in data attr
   const btn_num = p_btn_clicked.dataset.btnNum;
  
   const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

   p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

   img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));
});


//Swiper js code

var swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,
   spaceBetween: 30,
   autoplay:{
    delay: 2500,
    disableOnInteraction: false
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
 });



 //scroll to top botton 

 const heroSection = document.querySelector(".section-hero")

 const footerElem = document.querySelector(".section-footer");

 const scrollElement = document.createElement("div");
 scrollElement.classList.add("scrollTop-style");

 scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({behavior: "smooth"});
};

scrollElement.addEventListener("click", scrollTop);