const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalContainer = document.querySelector(".modal-container");
const modalImg = document.querySelectorAll(".modal-img")


modalImg.forEach(images => {
    images.addEventListener('click', () => {
      let src = images.getAttribute('src');
      modalContent.setAttribute('src', src);
      modalContainer.removeAttribute("hidden");
      setTimeout(function(){
        modal.classList.add("modal-background");
        modalContent.classList.add('modal-content-on');
      },100);
    });
});

modalContainer.addEventListener ("click", () => {
    modalContent.classList.remove('modal-content-on');
    modal.classList.remove("modal-background");
    setTimeout(function(){
        modalContainer.setAttribute("hidden", "true");
      },600);
})
  



// setTimeout(function(){
//     modalContainer.removeAttribute("hidden");
//   },1000);
// setTimeout(function(){
//     modalContent.classList.add("modal-content-on");
// },2000);