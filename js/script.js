var link = document.querySelector(".feedback_btn");
var popup = document.querySelector(".feedback_wrapper");
var popup2 = document.querySelector(".modal_feedback");
var close = popup.querySelector(".modal_close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal_show");
  popup2.classList.add("modal_show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal_show");

  });
