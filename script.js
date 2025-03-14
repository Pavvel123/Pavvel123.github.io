import timetable from "./timetable.js";

// Oblicz aktualny dzień i tydzień
const todayDate = new Date();
const weekdayNames = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
const currentDay = weekdayNames[todayDate.getDay()];

// Załóżmy, że tydzień A zaczyna się 24.02.2025
const refDate = new Date("2025-02-24");
const diffMs = todayDate - refDate;
const diffWeeks = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));
const currentWeekLetter = (diffWeeks % 2 === 0) ? "A" : "B";

// --- Funkcje pomocnicze ---
function formatTimeRange(timeRange) {
  return timeRange.split(" - ").map(t => t.startsWith("0") ? t.slice(1) : t).join(" - ");
}

function styleType(type, isGreyedOut) {
  if (isGreyedOut) return `<span style="color:rgb(200, 200, 200);">[${type}]</span>`;
  switch(type) {
    case "W": return `<span style="color: white; background-color: blue; padding: 1px;">[W]</span>`;
    case "L": return `<span style="color: white; background-color: purple; padding: 1px;">[L]</span>`;
    case "Ć": return `<span style="color: black; background-color: pink; padding: 1px;">[Ć]</span>`;
    case "P": return `<span style="color: black; background-color: orange; padding: 1px;">[P]</span>`;
    default: return `<span>[${type}]</span>`;
  }
}

// --- Widok desktopowy ---
function buildDesktopTimetable() {
  const desktopTable = document.getElementById("desktopTimetable");
  desktopTable.innerHTML = "";

  const mainHeader = document.createElement("tr");
  const timeTh = document.createElement("th");
  timeTh.rowSpan = 2;
  timeTh.textContent = "Czas";
  mainHeader.appendChild(timeTh);

  timetable.forEach(dayObj => {
    const dayTh = document.createElement("th");
    dayTh.colSpan = 2;
    dayTh.textContent = dayObj.day;
    mainHeader.appendChild(dayTh);
  });
  desktopTable.appendChild(mainHeader);

  const subHeader = document.createElement("tr");
  timetable.forEach(() => {
    const aTh = document.createElement("th");
    aTh.textContent = "A";
    const bTh = document.createElement("th");
    bTh.textContent = "B";
    subHeader.appendChild(aTh);
    subHeader.appendChild(bTh);
  });
  desktopTable.appendChild(subHeader);

  let timeSlotsSet = new Set();
  timetable.forEach(dayObj => {
    dayObj.classes.forEach(cls => timeSlotsSet.add(cls.time));
  });
  const timeSlots = Array.from(timeSlotsSet).sort();

  timeSlots.forEach(timeSlot => {
    const row = document.createElement("tr");
    const timeCell = document.createElement("td");
    timeCell.textContent = formatTimeRange(timeSlot);
    row.appendChild(timeCell);

    timetable.forEach(dayObj => {
      const classes = dayObj.classes.filter(cls => cls.time === timeSlot);
      let classesA = [];
      let classesB = [];
      let classesAB = [];

      classes.forEach(cls => {
        const isGreyedOut = (cls.StartDate && cls.StartDate > todayDate.toISOString().split("T")[0]) ||
                             (cls.EndDate && cls.EndDate < todayDate.toISOString().split("T")[0]);
        let content = `${cls.room}<br><strong>${styleType(cls.type, isGreyedOut)} ${cls.subject}</strong><br>${cls.teacher}`;
        if (cls.StartDate || cls.EndDate) {
          let dateInfo = [];
          if (cls.StartDate) dateInfo.push(`od ${cls.StartDate}`);
          if (cls.EndDate) dateInfo.push(`do ${cls.EndDate}`);
          content += `<br><em>${dateInfo.join(" | ")}</em>`;
        }
        if (isGreyedOut) content = `<span style="color:rgb(200, 200, 200);">${content}</span>`;
        if (cls.week === "AB") {
          classesAB.push(content);
        } else if (cls.week === "A") {
          classesA.push(content);
        } else if (cls.week === "B") {
          classesB.push(content);
        }
      });

      if (classesAB.length > 0) {
        const cell = document.createElement("td");
        cell.colSpan = 2;
        cell.innerHTML = classesAB.join("<br><br>");
        if (dayObj.day === currentDay) {
          cell.style.backgroundColor = "lightgreen";
        }
        row.appendChild(cell);
      } else {
        const cellA = document.createElement("td");
        cellA.innerHTML = classesA.join("<br><br>") || "";
        if (dayObj.day === currentDay && currentWeekLetter === "A") {
          cellA.style.backgroundColor = "lightgreen";
        }
        const cellB = document.createElement("td");
        cellB.innerHTML = classesB.join("<br><br>") || "";
        if (dayObj.day === currentDay && currentWeekLetter === "B") {
          cellB.style.backgroundColor = "lightgreen";
        }
        row.appendChild(cellA);
        row.appendChild(cellB);
      }
    });
    desktopTable.appendChild(row);
  });
}

// --- Widok mobilny ---
function buildMobileTimetable(selectedDay, selectedWeek) {
  const mobileTable = document.getElementById("mobileTimetable");
  mobileTable.innerHTML = "";

  const dayData = timetable.find(d => d.day === selectedDay);
  if (!dayData) return;

  const headerRow = document.createElement("tr");
  const thTime = document.createElement("th");
  thTime.textContent = "Czas";
  const thInfo = document.createElement("th");
  thInfo.textContent = `${selectedDay} (Tydzień ${selectedWeek})`;
  headerRow.appendChild(thTime);
  headerRow.appendChild(thInfo);
  mobileTable.appendChild(headerRow);

  let timeSlotsSet = new Set();
  dayData.classes.forEach(cls => timeSlotsSet.add(cls.time));
  const timeSlots = Array.from(timeSlotsSet).sort();

  timeSlots.forEach(timeSlot => {
    const row = document.createElement("tr");
    const timeCell = document.createElement("td");
    timeCell.textContent = formatTimeRange(timeSlot);
    row.appendChild(timeCell);

    const classesAtTime = dayData.classes.filter(cls => {
      return cls.time === timeSlot && (cls.week === "AB" || cls.week === selectedWeek);
    });
    let contentArray = [];
    classesAtTime.forEach(cls => {
      const isGreyedOut = (cls.StartDate && cls.StartDate > todayDate.toISOString().split("T")[0]) ||
                           (cls.EndDate && cls.EndDate < todayDate.toISOString().split("T")[0]);
      let content = `${cls.room}<br><strong>${styleType(cls.type, isGreyedOut)} ${cls.subject}</strong><br>${cls.teacher}`;
      if (cls.StartDate || cls.EndDate) {
        let dateInfo = [];
        if (cls.StartDate) dateInfo.push(`od ${cls.StartDate}`);
        if (cls.EndDate) dateInfo.push(`do ${cls.EndDate}`);
        content += `<br><em>${dateInfo.join(" | ")}</em>`;
      }
      if (isGreyedOut) content = `<span style="color:rgb(200, 200, 200);">${content}</span>`;
      contentArray.push(content);
    });
    const infoCell = document.createElement("td");
    infoCell.innerHTML = contentArray.join("<br><br>");
    row.appendChild(infoCell);
    mobileTable.appendChild(row);
  });
}

// --- Aktualizacja tła selectów ---
function updateSelectBackground(selectElement, currentValue) {
  if (selectElement.value === currentValue) {
    selectElement.style.backgroundColor = "lightgreen";
  } else {
    selectElement.style.backgroundColor = "";
  }
}

// --- Inicjalizacja widoków ---

buildDesktopTimetable();

const daySelect = document.getElementById("daySelect");
const weekSelect = document.getElementById("weekSelect");

// Funkcja aktualizująca widok mobilny oraz tło selectów
function updateMobileView() {
  buildMobileTimetable(daySelect.value, weekSelect.value);
  updateSelectBackground(daySelect, currentDay);
  updateSelectBackground(weekSelect, currentWeekLetter);
}

// Ustawienie nasłuchiwania zdarzeń
daySelect.addEventListener("change", updateMobileView);
weekSelect.addEventListener("change", updateMobileView);

// Dodanie przycisku "Aktualny termin" do automatycznego ustawienia
const selectActualButton = document.getElementById("selectActual");
selectActualButton.addEventListener("click", () => {
  daySelect.value = currentDay;
  weekSelect.value = currentWeekLetter;
  updateMobileView();
});

// Aktualizacja widoku mobilnego przy ładowaniu strony
updateMobileView();