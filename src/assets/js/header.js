window.addEventListener("scroll", function () {
    debugger
  let navArea = document.getElementById("navArea");
console.log(navArea);

  if (window.pageYOffset > 0) {
    navArea.classList.add("is-sticky");
  } else {
    navArea.classList.remove("is-sticky");
  }
});
