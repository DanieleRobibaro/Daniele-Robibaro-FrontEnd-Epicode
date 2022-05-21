let tabella = document.querySelector("#utenti");
tabella.classList.add("table");
tabella.classList.add("table-dark");
tabella.classList.add("table-hover");

let tHead = document.createElement("thead");
let tBody = document.createElement("tbody");

const USERS = "users.json";

fetch(USERS)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);

    let campiVisualizzati = [
      "username",
      "firstName",
      "lastName",
      "gender",
      "profileURL",
      "email"
    ];

    let trHead = document.createElement("tr");
    for (campo of campiVisualizzati) {
      let th = document.createElement("th");
      th.innerHTML = campo;
      trHead.append(th);
    }
    tHead.append(trHead);
    tabella.append(tHead);

    for (utente of res) {
      let tr = document.createElement("tr");

      for (prop in utente) {
        if (campiVisualizzati.includes(prop)) {
          let key = prop;
          let value = utente[prop];
          if (key === "profileURL") {
            let td = document.createElement("td");
            td.innerHTML = `<img width="65px" class="rounded-circle" src=" ${value} ">`;

            tr.append(td);
          } else {
            let td = document.createElement("td");
            td.innerHTML = value;

            tr.append(td);
          }
        }
      }
      tBody.append(tr);
      tabella.append(tBody);
    }
  });

