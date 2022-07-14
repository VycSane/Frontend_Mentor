// Accessing Dom Elements
const ratingNums = document.querySelectorAll("#rating-state .default-state");
const submitButton = document.querySelector("#rating-state button");
const ratingStateEl = document.getElementById("rating-state");
const thankYouStateEl = document.getElementById("thank-you-state");
const userRatingEl = document.getElementById("user-rating");

// Event Listeners

ratingNums.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.id == "") {
      e.target.id = "active";
      userRatingEl.textContent = e.target.textContent;
    } else {
      e.target.id = "";
      userRatingEl.textContent = "0";
    }
    ratingNums.forEach((el) => {
      if (el != e.target) {
        el.id = "";
      }
    });
  });
});

submitButton.addEventListener("click", (e) => {
  ratingStateEl.style.display = "none";
  thankYouStateEl.style.display = "flex";
});
