async function loadDocuments(jsonPath, containerId) {
  const res = await fetch(jsonPath);
  const data = await res.json();

  const container = document.getElementById(containerId);
  container.innerHTML = "";

  data.forEach(doc => {
    const el = document.createElement("div");
    el.className = "doc";

    el.innerHTML = `
      <div>
        <strong>${doc.title}</strong><br>
        <small>${doc.description || ""}</small>
      </div>
      <a href="${doc.file}" target="_blank">Pobierz</a>
    `;

    container.appendChild(el);
  });
}