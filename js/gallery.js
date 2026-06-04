document.addEventListener("DOMContentLoaded", () => {
  loadGallery();
});

async function loadGallery() {
  try {
    const res = await fetch("data/gallery.json");

    if (!res.ok) {
      throw new Error("Nie można załadować gallery.json");
    }

    const data = await res.json();

    const gallery = document.getElementById("gallery");

    if (!gallery) {
      console.error("Brak elementu #gallery");
      return;
    }

    gallery.innerHTML = "";

    data.forEach(img => {
      const image = document.createElement("img");
      image.src = img.src;
      image.alt = img.alt || "Fortuna";

      image.addEventListener("click", () => {
        window.open(img.src, "_blank");
      });

      gallery.appendChild(image);
    });

  } catch (err) {
    console.error("Błąd galerii:", err);
  }
}