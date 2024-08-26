document.addEventListener("DOMContentLoaded", function () {
  const bossContent = document.querySelectorAll(".menu a[href^='#']");

  bossContent.forEach((links) => {
    links.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});
