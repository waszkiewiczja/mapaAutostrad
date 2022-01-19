//
// Początek hamburger menu:
const body = document.querySelector("body");
const menuGlowne = document.querySelector(".menuGlowne");
const przycisk3linieOrazX = document.querySelector(".przycisk3linieOrazX");
const lewyPrzycisk = document.querySelector(".lewyPrzycisk");
const srodkowyPrzycisk = document.querySelector(".srodkowyPrzycisk");
const prawyPrzycisk = document.querySelector(".prawyPrzycisk");

przycisk3linieOrazX.addEventListener("click", () => {
  body.classList.toggle("bodyoverflow");
  menuGlowne.classList.toggle("menuGlowneMobile");
  przycisk3linieOrazX.classList.toggle("zmiana3liniiNaX");

  lewyPrzycisk.classList.toggle("lewyPrzyciskWidocznosc");
  srodkowyPrzycisk.classList.toggle("srodkowyPrzyciskWidocznosc");
  prawyPrzycisk.classList.toggle("prawyPrzyciskWidocznosc");
});
//
// Koniec hamburger menu

//
// Początek dropdown menu
const buttons = document.querySelectorAll(".nazwaGlownaDropdownMenu");
const zbiorWszystkichWierszy = document.querySelectorAll(".zbiorWierszyMenu");
const zbiorPojedynczaKolumnaMenu = document.querySelectorAll(
  ".pojedynczaKolumnaMenu"
);

//Wyswietlanie menu po kliknięciu:
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // Wyłączenie NazwaGlowna Active
    for (let i = 0; i < zbiorPojedynczaKolumnaMenu.length; i++) {
      buttons[i].classList.remove("nazwaGlownaDropdownMenuAktywna");
    }
    //Kliknięcie ponownie w button zamyka button:
    for (let j = 0; j < buttons.length; j++) {
      if (i == j) {
        continue;
      } else {
        zbiorWszystkichWierszy[j].classList.remove("wyswietlMenu");
      }
    }
    //Wyświetlenie menu:
    zbiorWszystkichWierszy[i].classList.toggle("wyswietlMenu");
  });
}

//Kliknięcie poza menu zamyka menu:
window.addEventListener("click", (event) => {
  if (!event.target.matches(".nazwaGlownaDropdownMenu")) {
    for (let i = 0; i < buttons.length; i++) {
      if (zbiorWszystkichWierszy[i].classList.contains("wyswietlMenu")) {
        zbiorWszystkichWierszy[i].classList.remove("wyswietlMenu");
      }
    }
    // Wyłączenie NazwaGlowna Active
    for (let i = 0; i < zbiorPojedynczaKolumnaMenu.length; i++) {
      buttons[i].classList.remove("nazwaGlownaDropdownMenuAktywna");
    }
  }
});

// Zapala przycisk NazwaGlowna Active gdy myszka nad this.div
for (let i = 0; i < zbiorPojedynczaKolumnaMenu.length; i++) {
  zbiorPojedynczaKolumnaMenu[i].addEventListener("click", function () {
    if (i === 0) {
      // j = i+1
      j = 1;
    } else if (i === 1) {
      j = 2;
    } else if (i === 2) {
      j = 3;
    }

    try {
      if (this.parentNode.childNodes[i + j].childNodes[1].matches("button")) {
        this.parentNode.childNodes[i + j].childNodes[1].classList.add(
          "nazwaGlownaDropdownMenuAktywna"
        );
      }
    } catch {}
  });
}
//
// Koniec dropdown menu
//

//modal
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");

//zamkniecie modal
modalClose.addEventListener("click", () => {
  modalBg.classList.remove("modal-bg-active");
  map.setView([52.0589, 19.2004], 6);
  map.closePopup();
});

// //funkcja pobieranie pojedynczej strony
// const buildList = () => {
//   const modal = document.querySelector(".modal");
//   console.log(activeRoad);

//   const url = `http://127.0.0.1:8000/api/road-detail/${activeRoad}/`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       const new_data = data;

//       console.log(`${new_data.id}`);

//       const nazwaOdcinkaSzczegoly = document.querySelector(
//         ".nazwaOdcinkaSzczegoly"
//       );
//       nazwaOdcinkaSzczegoly.innerHTML = `${new_data.droga} ${new_data.odcinek}`;
//       console.log(nazwaOdcinkaSzczegoly.innerHTML);

//       const dlugoscOdcinkaSzczegoly = document.querySelector(
//         ".dlugoscOdcinkaSzczegoly"
//       );
//       dlugoscOdcinkaSzczegoly.innerHTML = `Długość ${new_data.km} km, kwota ${new_data.koszt} mln zł, wykonawca ${new_data.wykonawca}`;

//       const wykonawcaOdcinkaSzczegoly = document.querySelector(
//         ".wykonawcaOdcinkaSzczegoly"
//       );
//       wykonawcaOdcinkaSzczegoly.innerHTML = `Umowa podpisana ${new_data.podpisane} z terminem realizacji ${new_data.czas} miesięcy`;

//       const obj1 = [new_data.map1_x, new_data.map1_y];
//       const obj2 = [
//         [new_data.map1_x, new_data.map1_y],
//         [new_data.map2_x, new_data.map2_y],
//       ];

//       map.setView(obj1, 9);

//       L.polyline(obj2, {
//         color: "rgb(163,87,222)",
//         weight: 10,
//       })
//         .addTo(map)
//         .bindPopup(`${new_data.droga} ${new_data.odcinek}`)
//         .openPopup();
//     });
// };

// // wyswietlenie pojedynczej drogi
// let activeRoad = 0;
// const allRoads = document.querySelectorAll(".single_road");
// console.log(allRoads.length);
// allRoads.forEach((road) =>
//   road.addEventListener("click", (e) => {
//     activeRoad = e.currentTarget.id;

//     modalBg.classList.add("modal-bg-active");
//     buildList();
//   })
// );

// Kliknięcie na mapie

// const klikniecieNaMape = function () {
//   for (let i = 0; i < wszystkiePolylyne.length; i++) {
//     wszystkiePolylyne[i].addEventListener("click", () => {
//       map.fitBounds(wszystkiePolylyne[i].getBounds(), { maxZoom: 9 });
//       console.log("yeah", i + 1);

//       activeRoad = i + 1;
//       modalBg.classList.add("modal-bg-active");
//       buildList(activeRoad);
//     });
//   }
// };

// setTimeout(klikniecieNaMape, 3000);

// const klikniecieNaMape = function () {
//   wszystkiePolylyne.forEach(function (polyline, i) {
//     polyline.on("click", () => {
//       console.log("wchodzi");
//       // map.fitBounds(polyline.getBounds(), { maxZoom: 9 });
//       console.log("yeah", mojeId[i], polyline);
//       activeRoad = mojeId[i];
//       buildList();
//     });
//   });
// };
// setTimeout(klikniecieNaMape, 2000);

// async function klikniecieNaMape() {
//   wszystkiePolylyne.forEach(function (polyline, i) {
//     polyline.on("click", () => {
//       console.log("wchodzi");
//       // map.fitBounds(polyline.getBounds(), { maxZoom: 9 });
//       console.log("yeah", mojeId[i], polyline);
//       activeRoad = mojeId[i];
//       buildList();
//     });
//   });
// }

// klikniecieNaMape();

// Use async/await :

// async function firstFunction(){
//   for(i=0;i<x;i++){
//     // do something
//   }
//   return;
// };
// then use await in your other function to wait for it to return:

// async function secondFunction(){
//   await firstFunction();
//   // now wait for firstFunction to finish...
//   // do something else
// };

// const klikniecieNaMape = function () {
//   for (let i = 0; i < iloscPozycjiwBazie; i++) {
//     wszystkiePunkty[i].addEventListener("click", () => {
//       map.fitBounds(wszystkiePunkty[i].getBounds(), { maxZoom: 9 });
//       window.location = `../mapainwestycji/#jSzczegoly${i}`;
//       zbiorListaInwestycji.style.display = "none";
//       for (let i = 0; i < iloscPozycjiwBazie; i++) {
//         zbiorSzczegoly[i].style.display = "none";
//       }
//       zbiorSzczegoly[i].style.display = "grid";
//       // Otwarcie popup na mapie:
//       const wyswietlPopup = () => {
//         wszystkiePunkty[i].openPopup();
//       };
//       setTimeout(wyswietlPopup, 1000);
//     });
//   }
// };
// setTimeout(klikniecieNaMape, 3000);

//
// Podswietlenie na mapie:
//
// const podswietlenieNaMapie = function (j) {
//   for (let i = 0; i < iloscPozycjiwBazie; i++) {
//     zbiorJednaInwestycja[i].addEventListener("mouseover", function (event) {
//       if (event.target.parentNode.className === "zbiorListaInwestycji") {
//         L.polyline(wMapa[kolejnoscSortowania[i]], {
//           color: "rgb(163,87,222)",
//           weight: 10,
//         })
//           .addTo(map)
//           .bindPopup(`${wOdcinki[kolejnoscSortowania[i]]}`)
//           .openPopup();
//       }
//     });
//   }
// };
// podswietlenieNaMapie();

// Koniec podswietlenia na mapie

// Kliknięcie na Regiony:
//
const kol1wiersz1 = document.querySelector(".kol1wiersz1");
const kol1wiersz2 = document.querySelector(".kol1wiersz2");
const kol1wiersz3 = document.querySelector(".kol1wiersz3");
const kol1wiersz4 = document.querySelector(".kol1wiersz4");
const kol1wiersz5 = document.querySelector(".kol1wiersz5");
const kol1wiersz6 = document.querySelector(".kol1wiersz6");

kol1wiersz1.addEventListener("click", () => {
  map.setView([54.2038, 17.8022], 8);
});

kol1wiersz2.addEventListener("click", () => {
  map.setView([50.005, 22.022], 8);
});

kol1wiersz3.addEventListener("click", () => {
  map.setView([52.0589, 19.2004], 8);
});

kol1wiersz4.addEventListener("click", () => {
  map.setView([52.2411, 21.0127], 8);
});

kol1wiersz5.addEventListener("click", () => {
  map.setView([52.0589, 15.2004], 8);
});

kol1wiersz6.addEventListener("click", () => {
  map.setView([52.0589, 19.2004], 7);
});
