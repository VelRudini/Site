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
           <style>h2{
  margin-top:35px;
  margin-bottom:15px;
  color:var(--primary);
}

ul{
  padding-left:25px;
  line-height:1.9;
  font-size:19px;
}

blockquote{
  margin-top:20px;
  padding:20px 25px;
  border-left:5px solid var(--primary);
  background:#eef5ff;
  border-radius:12px;
  font-size:18px;
  font-style:italic; font-style:bold;
}</style>

</br></br>
<p>
  <strong>Wielkopolska Spółdzielcza Składnica Mleczarska</strong>
  z siedzibą w Murowanej Goślinie przy ul. Przemysłowej 12 została
  założona w 2002 roku i wpisana do rejestru przedsiębiorstw KRS
  prowadzonego przez Sąd Rejonowy Poznań – Nowe Miasto i Wilda
  w Poznaniu, VIII Wydział Gospodarczy Krajowego Rejestru Sądowego.
</p>

<p>
  <strong>KRS:</strong> 0000141813<br>
  <strong>REGON:</strong> 000440118<br>
  <strong>NIP:</strong> 7770001559
</p>

<p>
  Prezesem Zarządu Spółdzielni jest
  <strong>Pan Jacek Andrzej Raj</strong>.
</p>

<h2>Zakres działalności</h2>

<ul>
  <li>Zakup i sprzedaż hurtowa wyrobów mleczarskich, olejów i tłuszczów jadalnych.</li>
  <li>Sprzedaż detaliczna wyrobów mleczarskich.</li>
  <li>Sprzedaż detaliczna artykułów spożywczych.</li>
  <li>Pozostała sprzedaż detaliczna.</li>
  <li>Magazynowanie i przechowywanie towarów.</li>
  <li>Pozostała sprzedaż hurtowa wyspecjalizowana w zakresie produkcji mleczarskiej.</li>
  <li>Wynajem nieruchomości na własny rachunek.</li>
</ul>

<h2>Dotacja KPO</h2>

<p>
  W 2024 roku Wielkopolska Spółdzielcza Składnica Mleczarska otrzymała
  dofinansowanie w ramach programu
  <strong>KPO A1.4.1 – Inwestycje na rzecz dywersyfikacji i skracania
  łańcucha dostaw produktów rolnych i spożywczych oraz budowy odporności
  podmiotów uczestniczących w łańcuchu dostaw.</strong>
</p>
</br>
<p>
  Dzięki pozyskanym środkom zrealizowano inwestycję:
  <blockquote><b>
  Utworzenie centrum przechowalniczo–magazynowo–dystrybucyjnego
  wraz z infrastrukturą towarzyszącą niezbędną do świadczenia usług
  przygotowania do sprzedaży i pakowania musów owocowych.</b>
</blockquote>
</p>

</br></br>


          </div>
          <div class="banner-container">
      <img src="assets/banerKPO.jpg" class="baner" alt="Baner ">
    </div>
        `;
        break;

      case "dotacje":
        loadDotacje();
        return;

      case "oferta":
        app.innerHTML = `<h1>Oferta</h1><p>W związku z rozszerzeniem działalności spółdzielni o:</br>
Utworzenie centrum przechowalniczo – magazynowo - dystrybucyjnego wraz z infrastrukturą
towarzyszącą niezbędną do świadczenia usługi przygotowania do sprzedaży i pakowania musów owocowych
<b></br></br>
Serdecznie zapraszamy do składania zapytań ofertowych  w zakresie rozlewu, pakowania i konfekcjonowania gęstych musów owocowych w opakowaniach typu pouch.
</b></br></br>
Możliwości techniczne:</br>
- produkt rozlewany – analizowany indywidualnie wg potrzeb zamawiającego,</br>
- opakowanie typu POUCH (doypack) o gramaturze od 80g do 200g,</br>
- szerokość i wysokość opakowania analizowana indywidualnie wg potrzeb zamawiającego,</br>
- nakrętka typu Choke Free Caps.</br>
- pakowane w karton jednorzędowy o maksymalnej głębokości 400mm typu wrap-around (pełny).</br>

Zapytania prosimy kierować na adres mailowy:  <a href="mailto: sekretariat@wssm.pl ">sekretariat@wssm.pl</a></p> 

</br></br>

<div class="banner-container">
      <img src="assets/banerKPO.jpg" class="baner" alt="Baner ">
    </div>
    <div class="gallery-grid">`;
        break;

      case "galeria":
        
        
        loadGaleria();
        return;

      case "rodo":
        app.innerHTML = `<style>
        .rodo{
        text-align: center;
        margin-top: 40px;
        }
        
        
        </style><h1>RODO</h1><p><h2 class="rodo">Informacja o przetwarzaniu przez WIELKOPOLSKĄ SPÓŁDZIELCZĄ</br>
SKŁADNICE MLECZARSKĄ danych osobowych</h2></br></br></br>

W związku z wejściem w życie Rozporządzenia Parlamentu Europejskiego (UE) nr
2016/679 z dnia 27.04.2016r w sprawie ochrony osób fizycznych w związku z
przetwarzaniem danych osobowych i sprawie swobodnego przepływu takich danych
oraz uchylenia dyrektyw 95/46/WE (ogólne rozporządzenie o ochronie danych) –
czyli <b>RODO</b>, pragniemy poinformować Państwa o przetwarzaniu
przez WIELKOPOLSKĄ SPÓŁDZIELCZĄ SKŁADNICE MLECZARSKĄ oraz o
zasadach na jakich się to będzie odbywać. <u>Jednocześnie Zarząd Spółdzielni
zapewnia, że dbamy o bezpieczeństwo danych i korzystamy z nich wyłącznie dla
celów prowadzonej działalności.</u></br></br>
<h2>Klauzula informacyjna:</h2></br></br>
1. Administratorem Pani/Pana danych osobowych jest <b>WIELKOPOLSKA
SPÓŁDZIELCZA SKŁADNICA MLECZARSKA</b>  Przemysłowa 12, 62-095 Murowana
Goślina, Polska (NIP 777 000 15 59) zwany dalej Administratorem. Administrator
prowadzi operacje przetwarzania Pani/Pana danych osobowych.</br></br>
2. Z Administratorem można się skontaktować:</br></br>
- listownie na adres korespondencyjny: <b>WSSM</b>; ul. Orlikowa 15, Tymienice; 98-220
Zduńska Wola </br>
- przez email: <a href="mailto: sekretariat@wssm.pl ">sekretariat@wssm.pl</a></br></br>
3. Pani/Pana dane osobowe przetwarzane będą w konkretnych o prawnie
uzasadnionych celach realizowanych przez Administratora, co oznacza w
szczególności:</br></br>
a/ zawarcie i wykonanie umowy, w której jest Pani/Pan stroną na podstawie art. 6
ust. 1 lit. b Rozporządzenia Parlamentu Europejskiego (UE) nr 2016/679 z dnia
27.04.2016r (RODO).</br></br>
b/ ustalenie, dochodzenie lub obrona w razie zaistnienia wzajemnych roszczeń na
podstawie art. 6 ust. 1 lit. f Rozporządzenia Parlamentu Europejskiego (UE) nr
2016/679 z dnia 27.04.2016r (RODO).</br></br>
c/ wypełnienie obowiązku prawnego na podstawie art. 6 ust. 1 lit. f Rozporządzenia
Parlamentu Europejskiego (UE) nr 2016/679 z dnia 27.04.2016r (RODO).</br></br>
d/ przetwarzanie jest niezbędne do celów wynikających z prawnie interesów
realizowanych przez Administratora i Rady (UE) z dnia 27.04.2016r (RODO).
</br></br>
4. Pani/ Pana dane osobowe będą przetwarzane przez okres obowiązywania umowy,
a w przypadku danych podanych fakultatywnie – do czasu wycofania zgody. Okres
przetwarzania danych osobowych może zostać przedłużony do czasu wygaśnięcia
wzajemnych roszczeń wynikających z umowy. Dane przetwarzane w celu
wypełnienia ciążących na Administratorze obowiązków prawnych przetwarzanie będą
w zakresie i przez cały czas wymagany przepisami prawa.</br></br>
5. Pani/ Pana dane osobowe będą przekazywane podmiotom, którym zostanie
zlecone przetwarzanie danych, np. dostawcom usług IT, księgowości. Podmioty te
przetwarzają dane na podstawie umowy powierzenia przetwarzania danych i tylko
zgodnie z poleceniami Administratora.</br></br>
6. Pani/Pana dane osobowe nie będą przekazywane do państwa trzeciego lub
organizacji międzynarodowych.</br></br>
7. Podanie danych jest dobrowolne, ale niezbędne do zawarcia umowy,
konsekwencją niepodania danych wymaganych obligatoryjnie jest brak możliwości
zawarcia i wykonania umowy.</br></br>
8. Posiada Pani/Pan następujące prawa związane z przetwarzaniem danych
osobowych:</br></br>
a/ prawo wycofania zgody na przetwarzanie danych osobowych/ jeśli była udzielona,</br></br>
b/ prawo dostępu do treści danych osobowych oraz żądania ich sprostowania
(poprawienie, uzupełnienia), usunięcia, ograniczenia przetwarzania, przenoszenia
danych oraz prawo wniesienia sprzeciwu względem przetwarzania danych
osobowych,</br></br>
9. W zakresie, w jakim dane są przetwarzane na podstawie zgody – Pani/Pan prawo
wycofania zgody na przetwarzanie danych osobowych w dowolnym momencie.
Wycofanie zgody nie ma wpływu na zgodność z prawem przetwarzania, którego
dokonano na podstawie udzielonej uprzednio zgody, a przed jej wycofaniem. Zgodę
można wycofać poprzez wysłanie oświadczenia o wycofaniu zgody na wskazany
adres korespondencyjny lub email.</br></br>
10. Pani/Pana dane osobowe nie podlegają zautomatyzowaniu podejmowaniu
decyzji. W tym profilowaniu.</br></br>
11. Przysługuje Pani/Panu prawo wniesienia skargi do organu nadzorczego
zajmującego się ochroną danych osobowych.</p>`;
        break;

      case "lokalizacja":
        app.innerHTML = `
        <style>
        .lokalizacja{
        text-align: center;
        margin-top: 40px;
    }
        .kontaktMapa{
    text-align:center;
}

.mapBtn{
    display:inline-block;
    margin-top:15px;
    padding:12px 24px;
    background:#2563eb;
    color:white;
    text-decoration:none;
    border-radius:10px;
    font-weight:600;
    transition:0.3s;
}

.mapBtn:hover{
    background:#1d4ed8;
    transform:translateY(-2px);
}
        </style>
          <h1>Lokalizacja</h1>
          <img src="assets/mapa.png" style="width:100%;border-radius:24px;">





          <br><p class="lokalizacja"><b>ul. Orlikowa 15, Tymienice
          98-220 Zduńska Wola</b></p>

          <div class="kontaktMapa">
    <a href="https://maps.app.goo.gl/H4SDzKUNiDZLMk3R7"
       target="_blank"
       class="mapBtn">
        📍 Otwórz w Google Maps
    </a>
</div>

<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d520.796840980747!2d18.91311129308074!3d51.61695805956566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDM3JzAxLjIiTiAxOMKwNTQnNDcuNCJF!5e0!3m2!1spl!2spl!4v1781198260349!5m2!1spl!2spl" width="800" height="600" style="border:5;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
          ul. Orlikowa 15, Tymienice<br>
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
async function loadGaleria() {
  const res = await fetch("data/galeria.json");
  gallery = await res.json();
  renderGallery();
}

function renderGallery() {
  let html = `
    
    <h1 style="text-align:center;">Galeria</h1>
     <div class="banner-container">
      <img src="assets/banerKPO.jpg" class="baner" alt="Baner ">
    </div>
    <div class="gallery-grid">
  `;

  gallery.forEach((item, idx) => {
    html += `
      <img src="${item.image}" alt="${item.desc}" class="thumbnail" onclick="openLightbox(${idx})">
    `;
  });

  html += `</div>

  <!-- Lightbox -->
  <div class="lightbox" id="lightbox">
    <div class="lightbox-controls">
      <button class="lightbox-btn" id="prevBtn" onclick="prevLightbox()">❮</button>
      <button class="lightbox-btn" id="closeBtn" onclick="closeLightbox()">×</button>
      <button class="lightbox-btn" id="nextBtn" onclick="nextLightbox()">❯</button>
    </div>
    <img src="" alt="" id="lightbox-img">
  </div>
  `;

  app.innerHTML = html;

  // Inicjujemy zmienne do lightbox
  window.currentIndex = 0;

  // Funkcje obsługi lightbox
  window.openLightbox = (idx) => {
    window.currentIndex = idx;
    document.getElementById('lightbox').classList.add('show');
    document.getElementById('lightbox-img').src = gallery[idx].image;
  };

  window.closeLightbox = () => {
    document.getElementById('lightbox').classList.remove('show');
  };

  window.nextLightbox = () => {
    window.currentIndex = (window.currentIndex + 1) % gallery.length;
    document.getElementById('lightbox-img').src = gallery[window.currentIndex].image;
  };

  window.prevLightbox = () => {
    window.currentIndex = (window.currentIndex - 1 + gallery.length) % gallery.length;
    document.getElementById('lightbox-img').src = gallery[window.currentIndex].image;
  };

  app.style.opacity = 1;
}
/*
function next(){
  index = (index + 1) % gallery.length;
  renderGallery();
}

function prev(){
  index = (index - 1 + gallery.length) % gallery.length;
  renderGallery();
}*/