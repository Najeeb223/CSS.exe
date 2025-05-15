document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("start-btn");
    const legendSection = document.querySelector(".legend");
  
    scrollBtn.addEventListener("click", () => {
      legendSection.scrollIntoView({ behavior: "smooth" });
    });
  });