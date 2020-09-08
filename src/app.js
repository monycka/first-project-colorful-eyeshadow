function buyingEyeshadow() {
  let name = prompt("What is your name?");
  let color = prompt("What is your favorite color?");
  let email = prompt("What is your email address?");

  let h3 = document.querySelector("h3");
  h3.innerHTML =
    "Thank you " +
    name +
    " for buying with us! We'll be in touch by email soon to tell you more about our " +
    color +
    " eyeshadows.";
}
let contactButton = document.querySelector("button");

contactButton.addEventListener("click", buyingEyeshadow);