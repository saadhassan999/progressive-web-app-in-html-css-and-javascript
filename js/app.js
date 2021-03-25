db.enablePersistence().catch(function (err) {
  if (err.code == "failed-precondition") {
    console.log("persistance failed");
  } else if (err.code == "unimplemented") {
    console.log("persistance not available");
  }
});

const mobList = document.querySelector("#mob-list");
const form = document.querySelector("#add-mob-form");

function renderMob(doc) {
  let li = document.createElement("li");
  let name = document.createElement("span");

  li.setAttribute("data-id", doc.id);
  name.textContent = doc.data().name;

  li.appendChild(name);

  mobList.appendChild(li);
}

db.collection("mobile")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderMob(doc);
    });
  });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("mobile").add({
    name: form.name.value,
  });
  form.name.value = "";
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
