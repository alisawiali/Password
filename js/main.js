const eyeicon = document.getElementById("eyeicon");
const password = document.getElementById("password");
console.log(password);

eyeicon.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    eyeicon.style.color = "red";
  } else {
    password.type = "password";
    eyeicon.style.color = "blue";
  }
};
