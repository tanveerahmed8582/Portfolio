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