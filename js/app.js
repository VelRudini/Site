const app = document.getElementById("app");

let gallery = [];
let index = 0;

showPage("firma");

function setActive(btn){
  document.querySelectorAll(".navBtn").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
}

function showPage(page){

  app.innerHTML = "";

  switch(page){

    case "firma":
      app.innerHTML = `
        <h1>O firmie</h1>
        <div class="twoCol">
          <img src="assets/firma.jpg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer nec odio. Praesent libero. Sed cursus ante dapibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      `;
      break;

    case "dotacje":
      loadDotacje();
      break;

    case "oferta":
      app.innerHTML = `<h1>Oferta</h1><p>Wkrótce...</p>`;
      break;

    case "galeria":
      loadGaleria();
      break;

    case "rodo":
      app.innerHTML = `
        <h1>RODO</h1>
        <p>
          Klauzula informacyjna RODO...
        </p>
      `;
      break;

    case "lokalizacja":
      app.innerHTML = `
        <h1>Lokalizacja</h1>
        <img src="assets/lokalizacja.jpg" style="width:100%;border-radius:16px;">
      `;
      break;

    case "kontakt":
      app.innerHTML = `
        <h1>Kontakt</h1>
        <p>
          WSSM Sp. z o.o.<br><br>
          ul. Orlikowa 15<br>
          98-220 Zduńska Wola<br><br>
          Tel: +48 43 825 38 00<br>
          Mail: sekretariat@wssm.pl
        </p>
      `;
      break;
  }
}

/* DOTACJE */
async function loadDotacje(){

  const res = await fetch("data/dotacje.json");
  const data = await res.json();

  let html = `<h1>Dotacje</h1><div class="grid">`;

  data.forEach(d=>{
    html += `
      <div class="card">
        <img src="${d.image}">
        <p>${d.desc}</p>
      </div>
    `;
  });

  html += `</div>`;
  app.innerHTML = html;
}

/* GALERIA */
async function loadGaleria(){

  const res = await fetch("data/galeria.json");
  gallery = await res.json();
  index = 0;

  renderGallery();
}

function renderGallery(){

  const g = gallery[index];

  app.innerHTML = `
    <h1>Galeria</h1>

    <div class="gallery">
      <img src="${g.image}">
      <p>${g.desc}</p>

      <div class="controls">
        <button onclick="prev()">←</button>
        <button onclick="next()">→</button>
      </div>
    </div>
  `;
}

function next(){
  index = (index + 1) % gallery.length;
  renderGallery();
}

function prev(){
  index = (index - 1 + gallery.length) % gallery.length;
  renderGallery();
}