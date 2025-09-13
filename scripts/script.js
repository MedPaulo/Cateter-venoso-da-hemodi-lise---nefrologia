document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Floating Menu Active State
  const sections = document.querySelectorAll("section[id]");
  const navDots = document.querySelectorAll(".nav-dot");

  function updateActiveNavDot() {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navDots.forEach((dot) => {
      dot.classList.remove("bg-yellow-500");
      dot.classList.add("bg-gray-300");
      if (dot.getAttribute("href") === `#${current}`) {
        dot.classList.remove("bg-gray-300");
        dot.classList.add("bg-yellow-500");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNavDot);
  updateActiveNavDot(); // Initial call
});
