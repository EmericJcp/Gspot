const One = document.querySelector(".One"),
  img1 = document.querySelector(".img1");

  const Two = document.querySelector(".Two"),
  img2 = document.querySelector(".img2");

window.addEventListener("mousemove", (e) => {
  let x = e.offsetX,
    y = e.offsetY;

  if (e.target.classList.contains("One")) {
    img1.style.left = `${x}px`;
    img1.style.top = `${y}px`;
  }
  if (e.target.classList.contains("Two")) {
    img2.style.left = `${x}px`;
    img2.style.top = `${y}px`;
  }
});

One.addEventListener("mouseover", () => {
  img1.style.display = "block";
});

One.addEventListener("mouseleave", () => {
  img1.style.display = "";
});

Two.addEventListener("mouseover", () => {
    img2.style.display = "block";
  });
  
  Two.addEventListener("mouseleave", () => {
    img2.style.display = "";
  });