const contentBox = document.getElementById("contentBox");

let galleryData = [];
let galleryIndex = 0;

showPage("firma");

async function showPage(page){

    switch(page){

        case "firma":
            contentBox.innerHTML = `
                <h1 class="pageTitle">O Firmie</h1>

                <img src="assets/firma-placeholder.jpg" class="placeholder">

                <br><br>

                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            `;
            break;

        case "dotacje":
            loadDotacje();
            break;

        case "oferta":
            contentBox.innerHTML = `
                <h1 class="pageTitle">Oferta</h1>
                <p>Oferta zostanie uzupełniona.</p>
            `;
            break;

        case "galeria":
            loadGaleria();
            break;

        case "rodo":
            contentBox.innerHTML = `
                <h1 class="pageTitle">RODO</h1>

                <p>
                Tutaj wstawisz docelową klauzulę RODO.
                </p>
            `;
            break;

        case "lokalizacja":
            contentBox.innerHTML = `
                <h1 class="pageTitle">Lokalizacja</h1>

                <img src="assets/lokalizacja.jpg"
                     class="placeholder">
            `;
            break;

        case "kontakt":
            contentBox.innerHTML = `
                <h1 class="pageTitle">Kontakt</h1>

                <p><b>Fortuna Sp. z o.o.</b></p>

                <br>

                <p>
                ul. Orlikowa 15<br>
                Tymienice<br>
                98-220 Zduńska Wola
                </p>

                <br>

                <p>
                Tel.: +48 43 825 38 00
                </p>

                <br>

                <p>
                sekretariat@fortuna.com.pl
                </p>
            `;
            break;
    }
}

async function loadDotacje(){

    const response = await fetch("data/dotacje.json");
    const data = await response.json();

    let html = `
        <h1 class="pageTitle">Dotacje</h1>
        <div class="grid">
    `;

    data.forEach(item=>{

        html += `
            <div class="card">
                <img src="${item.image}">
                <p>${item.description}</p>
            </div>
        `;
    });

    html += "</div>";

    contentBox.innerHTML = html;
}

async function loadGaleria(){

    const response = await fetch("data/galeria.json");
    galleryData = await response.json();

    galleryIndex = 0;

    renderGallery();
}

function renderGallery(){

    const item = galleryData[galleryIndex];

    contentBox.innerHTML = `
        <h1 class="pageTitle">Galeria</h1>

        <div class="galleryContainer">

            <img src="${item.image}"
                 class="galleryImage">

            <p>${item.description}</p>

            <div class="galleryButtons">

                <button onclick="prevImage()">
                    ← Poprzednie
                </button>

                <button onclick="nextImage()">
                    Następne →
                </button>

            </div>

        </div>
    `;
}

function nextImage(){

    galleryIndex++;

    if(galleryIndex >= galleryData.length){
        galleryIndex = 0;
    }

    renderGallery();
}

function prevImage(){

    galleryIndex--;

    if(galleryIndex < 0){
        galleryIndex = galleryData.length - 1;
    }

    renderGallery();
}