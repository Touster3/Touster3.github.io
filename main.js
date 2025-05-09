
const artists = {
  Jazz: [
    { name: "Miles Davis", page: "webmiles.html" },
    { name: "Ella Fitzgerald", page: "webella.html" },
    { name: "Nina Simone", page: "webnina.html" },
    { name: "Billie Holiday", page: "webholiday.html" },
    { name: "Louis Armstrong", page: "weblouis.html" },
    { name: "John Coltrane", page: "webcoltrane.html" },
    { name: "Ray Charles", page: "webray.html" },
    { name: "Nat King Cole", page: "webking.html" },
    { name: "Frank Sinistra", page: "websinistra.html" },
    { name: "Dean Martin", page: "webdean.html" },
    { name: "Stan Getz", page: "webgetz.html" },
    { name: "The Cinematic Orchestra", page: "webosrcherstra.html" },
    { name: "Michael Bublé", page: "webbuble.html" },
    { name: "Norah Jones", page: "webjones.html" },
    { name: "Chet Baker", page: "webchet.html" }
  ],
  Rock: [
    { name: "Led Zeppelin", page: "webzepplin.html" },
    { name: "The Rolling Stones", page: "webrolling.html" },
    { name: "Queen", page: "webqueen.html" },
    { name: "Fleetwood Mac", page: "webmac.html" },
    { name: "Pink Floyd", page: "webfloyd.html" },
    { name: "The Who", page: "webwho.html" },
    { name: "The Doors", page: "webdoors.html" },
    { name: "Rush", page: "webrush.html" },
    { name: "U2", page: "webu2.html" },
    { name: "Nirvana", page: "webnirvana.html" },
    { name: "Linkin Park", page: "weblinkin.html" },
    { name: "Red Hot Chili Peppers", page: "webchilli.html" },
    { name: "Pearl Jam", page: "webjam.html" },
    { name: "Foo Fighters", page: "webfoo.html" },
    { name: "AC/DC", page: "webacdc.html" }
  ],
  Metal: [
    { name: "Black Sabbath", page: "webblack.html" },
    { name: "Metallica", page: "webmetallica.html" },
    { name: "Iron Maiden", page: "webiron.html" },
    { name: "Megadeth", page: "webmegadeth.html" },
    { name: "Pantera", page: "webpantera.html" },
    { name: "Slipknot", page: "webslipknot.html" },
    { name: "Motörhead", page: "webhead.html" },
    { name: "Slayer", page: "webslayer.html" },
    { name: "Tool", page: "webtool.html" },
    { name: "Judas Priest", page: "webjudas.html" },
    { name: "Ozzy Osbourne", page: "webozzy.html" },
    { name: "Anthrax", page: "webanthrax.html" },
    { name: "System of Down", page: "websystem.html" },
    { name: "Lamb of God", page: "webgod.html" },
    { name: "Rammstein", page: "webramm.html" }
  ],
  Techno: [
    { name: "Gesaffelstein", page: "webgase.html" },
    { name: "Scooter", page: "webscooter.html" },
    { name: "Brutalismus 3000", page: "webbrutalism.html" },
    { name: "Overmono", page: "webover.html" },
    { name: "Daniel Avery", page: "webdaniel.html" },
    { name: "southstar", page: "websouth.html" },
    { name: "Matt Sassari", page: "webmatt.html" },
    { name: "Workals", page: "webworkals.html" },
    { name: "Skee Mask", page: "webskee.html" },
    { name: "MCR-T", page: "webmcr.html" },
    { name: "PAWSA", page: "webpawsa.html" },
    { name: "LFO", page: "weblfo.html" },
    { name: "Charlotte de Witte", page: "webcharlotte.html" },
    { name: "Amelie Lens", page: "webamelie.html" },
    { name: "Klaus Veen", page: "webklaus.html" }
  ],
  Pop: [
    { name: "Taylor Swift", page: "webswift.html" },
    { name: "Billie Eilish", page: "webbillie.html" },
    { name: "Ariana Grande", page: "webariana.html" },
    { name: "Dua Lipa", page: "webdua.html" },
    { name: "Olivia Rodrigo", page: "webolivia.html" },
    { name: "Chappell Roan", page: "webroan.html" },
    { name: "Miley Cyrus", page: "webmylie.html" },
    { name: "Harry Styles", page: "webharry.html" },
    { name: "Justin Bieber", page: "webbieber.html" },
    { name: "Lady GaGa", page: "webgaga.html" },
    { name: "Rihanna", page: "webrihanna.html" },
    { name: "Sabrina Carpenter", page: "websabrina.html" },
    { name: "Bruno Mars", page: "webbruno.html" },
    { name: "Madonna", page: "webmadona.html" },
    { name: "Charli XCX", page: "webxcx.html" }
  ],
  Rap: [
    { name: "Kendrick Lamar", page: "webkendrick.html" },
    { name: "J. Cole", page: "webcole.html" },
    { name: "Drake", page: "webdrake.html" },
    { name: "Travis Scott", page: "webscott.html" },
    { name: "Kanye West", page: "webwest.html" },
    { name: "Nicki Minaj", page: "webnicki.html" },
    { name: "Lil Uzi Vert", page: "weblil.html" },
    { name: "Tyler, The Creator", page: "webtyler.html" },
    { name: "21 Savage", page: "web21.html" },
    { name: "Future", page: "webfuture.html" },
    { name: "A$AP Rocky", page: "webrocky.html" },
    { name: "P. Diddy", page: "webdiddy.html" },
    { name: "Ice Spice", page: "ice.html" },
    { name: "Post Malone", page: "webpost.html" },
    { name: "Doja Cat", page: "webdoja.html" }
  ],
  Klasika: [
    { name: "Bach", page: "webbach.html" },
    { name: "Mozart", page: "webmozart.html" },
    { name: "Beethoven", page: "webbeet.html" },
    { name: "Čajkovskij", page: "webcaj.html" },
    { name: "Vivaldi", page: "webvivaldi.html" },
    { name: "Chopin", page: "webchopin.html" },
    { name: "Debussy", page: "webdebussy.html" },
    { name: "Wagner", page: "webwagner.html" },
    { name: "Brahms", page: "webbrahams.html" },
    { name: "Mahler", page: "webmahler.html" },
    { name: "Schubert", page: "webschubert.html" },
    { name: "Handel", page: "webhandel.html" },
    { name: "Haydn", page: "webhaydn.html" },
    { name: "Stravinsky", page: "webstravinsky.html" },
    { name: "Verdi", page: "webverdi.html" }
  ]
};

function showGenre(genre) {
  const content = document.getElementById("mainContent");
  const artistDetail = document.getElementById("artistDetail");
  artistDetail.innerHTML = "";
  const genreArtists = artists[genre];

  content.innerHTML = "";

  if (!genreArtists || genreArtists.length === 0) {
    content.innerHTML = `<h2>Žáner "${genre}" nebol nájdený.</h2>`;
    return;
  }

  content.innerHTML = `<div class="artists-container"></div>`;
  const container = document.querySelector(".artists-container");

  genreArtists.forEach((artist, index) => {
    const artistCard = document.createElement("div");
    artistCard.className = "artist";
    artistCard.innerHTML = `
      <h3><a href="${artist.page}" style="text-decoration: none; color: inherit;">${artist.name}</a></h3>
    `;
    container.appendChild(artistCard);
  });
}




function goToArtistPage(page) {
  window.location.href = page;
}

function addArtist(event) {
  event.preventDefault();
  const name = document.getElementById("newName").value;
  const description = document.getElementById("newDescription").value;
  const image = document.getElementById("newImage").value;
  const genre = document.getElementById("newGenre").value;

  if (!artists[genre]) {
    artists[genre] = [];
  }

  const page = `${name.toLowerCase().replace(/ /g, '-')}.html`;

  artists[genre].push({ name, description, image, page });

  alert(`Interpret ${name} bol pridaný do žánru ${genre}!`);
  document.getElementById("addArtistForm").reset();
  toggleForm();
  showGenre(genre);
}

function toggleForm() {
  window.location.href = "addArtistForm.html";
}

function searchArtist() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const content = document.getElementById("mainContent");
  content.innerHTML = "";

  let results = [];

  for (let genre in artists) {
    results = results.concat(
      artists[genre].filter((artist) => artist.name.toLowerCase().includes(query))
    );
  }

  if (results.length > 0) {
    content.style.backgroundColor = "#7299d8";
    content.style.margin = "0";
    content.style.padding = "0";

    content.innerHTML = `<h2>Výsledky vyhľadávania:</h2>`;
    results.forEach((artist) => {
      content.innerHTML += `
        <div>
          <h3><a href="${artist.page}" style="text-decoration: none; color: inherit;">${artist.name}</a></h3>
        </div>
      `;
    });
  } else {
    content.style.backgroundColor = "#f0f0f0";
    content.innerHTML = `
      <img src="nenajdene.jpeg" alt="Not Found" style="width: 100%; height: auto; margin-top: 20px;">
    `;
  }

  content.scrollIntoView({ behavior: "smooth", block: "start" });
}