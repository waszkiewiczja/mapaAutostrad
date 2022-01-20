const map = L.map("mapid", { zoomControl: false }).setView(
  [52.0589, 19.2004],
  6
);
new L.Control.Zoom({ position: "topright" }).addTo(map);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let wszystkiePunkty = [];

const ilosc_inwestycji = Number(
  document.querySelector("#ilosc_inwestycji").innerHTML
);

//funkcja pobieranie pojedynczej strony
const buildList = () => {
  const modal = document.querySelector(".modal");

  const url = `http://www.mapaautostrad.pl/api/road-detail/${activeRoad}/`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const new_data = data;

      const nazwaOdcinkaSzczegoly = document.querySelector(
        ".nazwaOdcinkaSzczegoly"
      );
      nazwaOdcinkaSzczegoly.innerHTML = `${new_data.droga} ${new_data.odcinek}`;

      const dlugoscOdcinkaSzczegoly = document.querySelector(
        ".dlugoscOdcinkaSzczegoly"
      );
      dlugoscOdcinkaSzczegoly.innerHTML = `Długość ${new_data.km} km, kwota ${new_data.koszt} mln zł, wykonawca ${new_data.wykonawca}`;

      const wykonawcaOdcinkaSzczegoly = document.querySelector(
        ".wykonawcaOdcinkaSzczegoly"
      );
      wykonawcaOdcinkaSzczegoly.innerHTML = `Umowa podpisana ${new_data.podpisane} z terminem realizacji ${new_data.czas} miesięcy`;

      const richtexteditor = document.querySelector(".richtexteditor");
      richtexteditor.innerHTML = new_data.opis;

      const obj1 = [new_data.map1_x, new_data.map1_y];

      let popup = L.popup()
        .setLatLng(obj1)
        .setContent(`${new_data.droga} ${new_data.odcinek}`)
        .openOn(map);

      map.setView(obj1, 9);
    });
};

// wyswietlenie pojedynczej drogi
let activeRoad = 0;
const allRoads = document.querySelectorAll(".single_road");
allRoads.forEach((road) =>
  road.addEventListener("click", (e) => {
    activeRoad = e.currentTarget.id;

    modalBg.classList.add("modal-bg-active");
    buildList();
  })
);

const all_id = document.querySelectorAll(".single_road");

let mojeId = [];

all_id.forEach(function (id) {
  mojeId.push(id.getAttribute("data-id"));
});

const all_mapa1_x = document.querySelectorAll("#map1_x");
const all_mapa1_y = document.querySelectorAll("#map1_y");
const all_mapa2_x = document.querySelectorAll("#map2_x");
const all_mapa2_y = document.querySelectorAll("#map2_y");

function tworzenieListypolyline() {
  for (let i = 0; i < all_mapa1_x.length; i++) {
    let obj1 = [
      [all_mapa1_x[i].innerHTML, all_mapa1_y[i].innerHTML],
      [all_mapa2_x[i].innerHTML, all_mapa2_y[i].innerHTML],
    ];

    const polylineJ = L.polyline(obj1, {
      color: "rgb(163,87,222)",
      weight: 10,
    })
      .addTo(map)
      .bindPopup(``);

    polylineJ.on("click", function (event) {
      activeRoad = mojeId[i];
      modalBg.classList.add("modal-bg-active");
      buildList();
    });
  }
}
tworzenieListypolyline();
