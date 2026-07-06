/*function myFunction() {
    var x = document.getElementById("myheader");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  };*/
  const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".sections");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});
const submitBtn = document.querySelector(".btn");
const firstCard = document.querySelector("#card1");
const secondCard = document.querySelector("#card2");
const ratingNumbers = document.querySelectorAll(".number");
const selectedNumber = document.querySelector(".selected");
let number = 0;

ratingNumbers.forEach(num => {
    num.addEventListener('click', function () {
        number = this.textContent;
        ratingNumbers.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
});

submitBtn.addEventListener("click", rateUs);

function rateUs() {
    selectedNumber.textContent = number;
    firstCard.style.display = "none";
    secondCard.style.display = "block";
}