window.addEventListener("scroll", () => {
  document.getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 60);
});

function validate() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill all fields");
    return false;
  }
  alert("Message sent successfully!");
  return false;
}
