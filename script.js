

console.log("Week 3 JavaScript connected");

/* dark-light mode  */

function toggleMode() {
  document.body.classList.toggle("dark");
}


/* show - hide about section */

function toggleAbout() {
  const about = document.getElementById("about");


  if (about.style.display === "none") {
    about.style.display = "block";
    btn.innerText = "Hide About Me";
  } else {
    about.style.display = "none";
    btn.innerText = "Show About Me";
  }
}



/* form validation */

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stops page reload

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

 const error = document.getElementById("formError");

if (name === "" || email === "" || message === "") {
  error.innerText = "All fields are required!";
  return;
}

error.innerText = "";
alert("Message sent successfully!");
form.reset();

});
