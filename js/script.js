var link = document.querySelector(".feedback_btn");
var popup = document.querySelector(".feedback_wrapper");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal_show");
});
