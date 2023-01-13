function validate() {
  var username = document.getElementById("name");
  var mail = document.getElementById("email");
  var mobile = document.getElementById("phone");
  var text = document.getElementById("message");
  if (
    username === "madan ,abhireddy" &&
    mail === "reddymadan0512@gmail.com,abhi9391@gamil.com" &&
    mobile === "960618314,9391244973" &&
    text === "return the product"
  ) {
    alert("send message");
    return false;
  } else {
    alert("send error");
  }
}

let btnclear = document.querySelectorAll("message");
let inputs = document.querySelectorAll("phone");
btnclear.addEventListener("click", () => {
  inputs.forEach((phone) => (phone.value = ""));
});
