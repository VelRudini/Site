const app = document.getElementById("app");

let gallery = [];
let index = 0;

showPage("firma");

/* ACTIVE */
function setActive(page){
  document.querySelectorAll(".navBtn").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.page === page);
  });
}

/* PAGE SWITCH WITH WOW EFFECT */
function showPage(page){

  setActive(page);

  app.style.opacity = 0;
  app.style.transform = "translateY(20px) scale(.98)";

  setTimeout(()=>{

    switch(page){

      case "firma":
        app.innerHTML = `
          <h1>O firmie</h1>
          <div class="twoCol">
            <img src="assets/baner.png" class="baner">
            <p>
              
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        `;
        break;

      case "dotacje":
        loadDotacje();
        return;

      case "oferta":
        app.innerHTML = `<h1>Oferta</h1><p>Wkrótce...</p>`;
        break;

      case "galeria":
        loadGaleria();
        return;

      case "rodo":
        app.innerHTML = `<h1>RODO</h1><p>Klauzula informacyjna...</p>`;
        break;

      case "lokalizacja":
        app.innerHTML = `
          <h1>Lokalizacja</h1>
          <img src="assets/mapa.png" style="width:100%;border-radius:24px;">
        `;
        break;

      case "kontakt":
  app.innerHTML = `
    <style>
      .kontakt-wrap {
        display: flex;
        justify-content: space-between;
        gap: 40px;
        flex-wrap: wrap;
        margin-top: 20px;
      }

      .kontakt-box {
        flex: 1;
        min-width: 280px;
        text-align: center;
      }

      .rejestry {
        text-align: center;
        margin-top: 40px;
      }
    </style>

    <div class="kontakt-wrap">

      <div class="kontakt-box">
        <h1><b>Adres siedziby</b></h1>
        <p>
          <b>WSSM</b><br>
          ul. Przemysłowa 12<br>
          62-095 Murowana Goślina<br><br>
        </p>
      </div>

      <div class="kontakt-box">
        <h1><b>Adres korespondencyjny</b></h1>
        <p>
          <b>WSSM</b><br>
          ul. Orlikowa 15<br>
          98-220 Zduńska Wola<br>
          Tel: +48 43 825 38 00<br>
          sekretariat@wssm.pl
        </p>
      </div>

    </div>

    <div class="rejestry">
      <br><br><p>
        KRS:<b> 0000141813 </b></t>
        NIP:<b> 7770001559 </b>
        REGON:<b >000440118 </b>
      </p>
    </div>
  `;
  break;
    }

    app.style.opacity = 1;
    app.style.transform = "translateY(0) scale(1)";

  },150);
}

/* DOTACJE */
async function loadDotacje(){

  const res = await fetch("data/dotacje.json");
  const data = await res.json();

  let html = `<h1>Dotacje</h1><div class="grid">`;

  data.forEach(d=>{
    html += `
      <div class="dotCard">
        <img src="${d.image}">
        <p>${d.desc}</p>
      </div>
    `;
  });

  html += `</div>`;

  app.innerHTML = html;
  app.style.opacity = 1;
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

  app.style.opacity = 1;
}

function next(){
  index = (index + 1) % gallery.length;
  renderGallery();
}

function prev(){
  index = (index - 1 + gallery.length) % gallery.length;
  renderGallery();
}