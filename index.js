document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementById("main-section");
  const skipButton = document.querySelector(".skip");

  setTimeout(function () {
    skipButton.classList.add("show");
  }, 3000);

  skipButton.addEventListener("click", function () {
    section.classList.add("slide-up");
  });

  setTimeout(function () {
    section.classList.add("slide-up");
  }, 12000);
});

document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementById("main-section");
});
