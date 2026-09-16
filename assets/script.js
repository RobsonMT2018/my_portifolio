document.addEventListener("DOMContentLoaded", () => {
  // ELEMENTOS DO SLIDER E NAVEGAÇÃO
  const slider = document.querySelector(".dashboard-grid");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebar-overlay");
  const menuToggle = document.getElementById("menu-toggle");
  const sidebarClose = document.getElementById("sidebar-close");
  const navLinks = document.querySelectorAll(".nav-desktop a, .nav-mobile a");
  const themeToggle = document.getElementById("theme-toggle");

  // ELEMENTOS DO MODAL INTERATIVO
  const modal = document.getElementById("tech-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalSubtitle = document.getElementById("modal-subtitle");
  const modalDesc = document.getElementById("modal-desc");
  const modalClose = document.getElementById("modal-close");

  let currentIndex = 0;
  const sections = ["#home", "#about", "#portfolio", "#skills", "#contact"];
  let isScrolling = false;

  // 1. NAVEGAÇÃO ENTRE SEÇÕES (SLIDER HORIZONTAL)
  const goToSection = (index) => {
    if (index < 0 || index >= sections.length) return;
    currentIndex = index;

    slider.style.transform = `translateX(-${currentIndex * 20}%)`;

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === sections[currentIndex]) {
        link.classList.add("active");
      }
    });
  };

  // Clique nos links do menu
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      const targetIndex = sections.indexOf(href);

      if (targetIndex !== -1) {
        goToSection(targetIndex);
        toggleSidebar(false);
      }
    });
  });

  // Navegação via Roda do Mouse (Desktop)
  window.addEventListener(
    "wheel",
    (e) => {
      if (isScrolling) return;

      if (e.deltaY > 30 && currentIndex < sections.length - 1) {
        isScrolling = true;
        goToSection(currentIndex + 1);
        setTimeout(() => { isScrolling = false; }, 600);
      } else if (e.deltaY < -30 && currentIndex > 0) {
        isScrolling = true;
        goToSection(currentIndex - 1);
        setTimeout(() => { isScrolling = false; }, 600);
      }
    },
    { passive: true }
  );

  // Navegação via Gestos Swipe (Mobile)
  let touchStartX = 0;
  let touchEndX = 0;

  window.addEventListener(
    "touchstart",
    (e) => { touchStartX = e.changedTouches[0].screenX; },
    { passive: true }
  );

  window.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    { passive: true }
  );

  const handleSwipe = () => {
    const swipeThreshold = 40;
    const diffX = touchStartX - touchEndX;

    if (Math.abs(diffX) > swipeThreshold) {
      if (diffX > 0 && currentIndex < sections.length - 1) {
        goToSection(currentIndex + 1);
      } else if (diffX < 0 && currentIndex > 0) {
        goToSection(currentIndex - 1);
      }
    }
  };

  // 2. CONTROLE DA SIDEBAR MOBILE
  const toggleSidebar = (state) => {
    if (sidebar) sidebar.classList.toggle("open", state);
    if (sidebarOverlay) sidebarOverlay.classList.toggle("show", state);
  };

  if (menuToggle) menuToggle.addEventListener("click", () => toggleSidebar(true));
  if (sidebarClose) sidebarClose.addEventListener("click", () => toggleSidebar(false));
  if (sidebarOverlay) sidebarOverlay.addEventListener("click", () => toggleSidebar(false));

  // 3. ALTERNÂNCIA DE TEMA (CLARO / ESCURO)
  if (themeToggle) {
    if (localStorage.getItem("theme") === "light") {
      document.body.classList.add("light");
      themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", () => {
      if (themeToggle.checked) {
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
      } else {
        document.body.classList.remove("light");
        localStorage.setItem("theme", "dark");
      }
    });
  }

  // 4. LÓGICA DO MODAL DE SKILLS/IMAGEM
  document.querySelectorAll(".skill-card-item").forEach((card) => {
    card.addEventListener("click", () => {
      if (modal) {
        modalImg.src = card.dataset.image || "https://via.placeholder.com/400x250";
        modalTitle.textContent = card.dataset.title;
        modalSubtitle.textContent = card.dataset.subtitle;
        modalDesc.textContent = card.dataset.desc;

        modal.classList.add("active");
      }
    });
  });

  const closeModal = () => {
    if (modal) modal.classList.remove("active");
  };

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
});
