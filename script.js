// script.js - KorsakoV Thrash Metal Band

document.addEventListener("DOMContentLoaded", () => {
  // Scroll suave ao clicar nos links do menu
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Efeito de destaque em seções ao rolar
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-section");
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Botão flutuante "Voltar ao topo"
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑ Topo";
  backToTop.id = "backToTop";
  document.body.appendChild(backToTop);

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });
});
