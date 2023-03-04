// lear
// Easybank Landing Page

window.addEventListener("DOMContentLoaded", () => {
  const closeLinksBtn = document.querySelector(".close-links");
  const openLinksBtn = document.querySelector(".open-links");
  const links = document.querySelector(".links");

  // Open Links
  openLinksBtn.addEventListener("click", () => {
    links.style.right = "0";
  });

  // Close Links
  closeLinksBtn.addEventListener("click", () => {
    links.style.right = "-160px";
  });
});
