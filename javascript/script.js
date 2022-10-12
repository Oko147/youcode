let button = document.getElementById("main__headerButton--button");
let header = document.querySelector("header");

button.addEventListener("click", () => {
  header.classList.toggle("header--shadow");
  if (header.classList.contains("header--shadow")) {
    button.innerText = "Wyłącz podświetlenie logo";
  } else {
    button.innerText = "Włącz podświetlenie logo";
  }
});
