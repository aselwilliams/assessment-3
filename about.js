console.log("hello world");
let form = document.querySelector("#contact");
let catImg = document.querySelector("#cat-img");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("The form submitted successfully.");
  document.querySelector("#your-name").value = "";
  document.querySelector("#message").value = "";
}

form.addEventListener("submit", handleSubmit);
catImg.addEventListener("mouseover", () => alert("You're awesome!"));
