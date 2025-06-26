document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-open-icon');
    const closeIcon = document.getElementById('menu-close-icon');
  
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      openIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  });

  function loadTableau(vizId, heightRatio = 0.75) {
    const divElement = document.getElementById(vizId);
    const vizElement = divElement.getElementsByTagName("object")[0];
    const width = divElement.offsetWidth;
    vizElement.style.width = "100%";
    vizElement.style.height = (width * heightRatio) + "px";

    const scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }

  window.addEventListener("DOMContentLoaded", () => {
    loadTableau("vizDashboard");
    loadTableau("vizStory", 0.6); // Use a different ratio if needed
  });

  window.addEventListener("resize", () => {
    loadTableau("vizDashboard");
    loadTableau("vizStory", 0.6);
  });
