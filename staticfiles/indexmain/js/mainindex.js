// console.log("js22 test");

// const buildList = () => {
//   const fetchdiv = document.querySelector(".fetchdiv");

//   const url = "http://127.0.0.1:8000/api/road-list/";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       const new_data = data;
//       for (let i = 0; i < new_data.length; i++) {
//         const new_p = document.createElement("p");
//         new_p.innerHTML = `Droga ${new_data[i].title}, skończona? ${new_data[i].completed}`;
//         fetchdiv.append(new_p);
//       }
//     });
// };

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   buildList();
// });
