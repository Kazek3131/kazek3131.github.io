// --- Elementy główne ---
const confirmElement = document.querySelector(".confirm");
const time = document.getElementById("time");
const updateText = document.querySelector(".bottom_update_value");
const unfold = document.querySelector(".info_holder");
const updateButton = document.querySelector(".update");

let date = new Date();

// --- Ustawienie daty aktualizacji ---
if (localStorage.getItem("update") == null) {
  localStorage.setItem("update", "24.12.2024");
}
updateText.textContent = localStorage.getItem("update");

// --- Obsługa przycisku aktualizacji ---
updateButton.addEventListener("click", () => {
  const newDate = date.toLocaleDateString("pl-PL", options);
  localStorage.setItem("update", newDate);
  updateText.textContent = newDate;
  scroll(0, 0);
});

// --- Zegar ---
function setClock() {
  date = new Date();
  time.textContent = `Czas: ${date.toLocaleTimeString("pl-PL", optionsTime)} ${date.toLocaleDateString("pl-PL", options)}`;
  delay(1000).then(setClock);
}
setClock();

// --- Rozwijanie sekcji ---
unfold.addEventListener("click", () => {
  unfold.classList.toggle("unfolded");
});

// --- Zdarzenia zewnętrzne ---
const dataReloadEvent = () => {
  console.log("Dane nie są ładowane (setData wyłączone).");
};

const imageReloadEvent = (image) => {
  setImage(image);
};

// --- Bezpieczna funkcja setImage ---
function setImage(image) {
  const img = document.querySelector(".id_own_image");
  if (image && typeof image === "string" && image.trim() !== "") {
    img.style.backgroundImage = `url(${image})`;
  } else {
    console.warn("Brak obrazu – pozostawiono domyślny.");
  }
}

// --- setData wyłączone ---
function setData(id, value) {
  // Funkcja celowo pusta — dane nie są wstawiane
  console.log(`setData(${id}, ${value}) zablokowane.`);
}
