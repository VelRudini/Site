document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[data-page]");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      window.location.href = page;
    });
  });
});