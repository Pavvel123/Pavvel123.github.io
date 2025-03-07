const timetable = [
    {
      day: "Poniedziałek",
      classes: [
        {
          time: "07:15 - 08:00",
        },
        {
          time: "08:15 - 09:00",
        },
        {
          time: "09:15 - 10:00",
          subject: "Metody numeryczne",
          room: "EA 507",
          teacher: "dr inż. Piotr Sypek",
          type: "L",
          week: "A"
        },
        {
          time: "10:15 - 11:00",
          subject: "Metody numeryczne",
          room: "EA 507",
          teacher: "dr inż. Piotr Sypek",
          type: "L",
          week: "A"
        },
        {
          time: "11:15 - 12:00",
          subject: "Przetwarzanie rozproszone",
          room: "EA 504",
          teacher: "mgr Anna Domagalska",
          type: "P",
          week: "A"
        },
        {
          time: "12:15 - 13:00",
          subject: "Przetwarzanie rozproszone",
          room: "EA 504",
          teacher: "mgr Anna Domagalska",
          type: "P",
          week: "A"
        },
        {
          time: "13:15 - 14:00",
          subject: "Systemy wbudowane i mikroprocesory",
          room: "NE AUD1L",
          teacher: "dr inż. Krzysztof Bikonis",
          type: "W",
          week: "AB",
          EndDate: "2025-04-14"
        },
        {
          time: "14:15 - 15:00",
          subject: "Systemy wbudowane i mikroprocesory",
          room: "NE AUD1L",
          teacher: "dr inż. Maciej Kokot",
          type: "W",
          week: "AB",
          EndDate: "2025-04-14"
        },
        {
          time: "15:15 - 16:00",
          subject: "Wprowadzenie do cyberbezpieczeństwa",
          room: "NE AUD1L",
          teacher: "dr inż. Wojciech Gumiński",
          type: "W",
          week: "AB",
          EndDate: "2025-04-14"
        },
        {
          time: "16:15 - 17:00",
          subject: "Wprowadzenie do cyberbezpieczeństwa",
          room: "NE AUD1L",
          teacher: "dr inż. Wojciech Gumiński",
          type: "W",
          week: "AB",
          EndDate: "2025-04-14"
        },
        {
          time: "17:15 - 18:00",
        },
        {
          time: "18:15 - 19:00",
          subject: "Metody probabilistyczne w informatyce",
          room: "NE 205",
          teacher: "dr inż. Maciej Sac",
          type: "Ć",
          week: "AB"
        },
      ]
    },
    {
      day: "Wtorek",
      classes: [
        {
          time: "07:15 - 08:00",
        },
        {
          time: "08:15 - 09:00",
        },
        {
          time: "09:15 - 10:00",
        },
        {
          time: "10:15 - 11:00",
        },
        {
          time: "11:15 - 12:00",
          subject: "Sztuczna inteligencja",
          room: "NE AUD1P",
          teacher: "dr hab. Julian Szymański",
          type: "W",
          week: "AB",
        },
        {
          time: "12:15 - 13:00",
          subject: "Sztuczna inteligencja",
          room: "NE AUD1P",
          teacher: "dr hab. Julian Szymański",
          type: "W",
          week: "AB",
        },
        {
          time: "13:15 - 14:00",
          subject: "Sztuczna inteligencja",
          room: "EA 507",
          teacher: "mgr inż. Szymon Olewniczak",
          type: "P",
          week: "AB",
          StartDate: "2025-04-29"
        },
        {
          time: "14:15 - 15:00",
          subject: "Sztuczna inteligencja",
          room: "EA 507",
          teacher: "mgr inż. Szymon Olewniczak",
          type: "P",
          week: "AB",
          StartDate: "2025-04-29"
        },
        {
          time: "15:15 - 16:00",
        },
        {
          time: "16:15 - 17:00",
        },
        {
          time: "17:15 - 18:00",
          subject: "System operacyjny MAC OS X i iOS",
          room: "zajęcia zdalne",
          teacher: "mgr inż. Tomasz Idzi",
          type: "W",
          week: "AB",
          EndDate: "2025-04-15"
        },
        {
          time: "18:15 - 19:00",
          subject: "System operacyjny MAC OS X i iOS",
          room: "zajęcia zdalne",
          teacher: "mgr inż. Tomasz Idzi",
          type: "W",
          week: "AB",
          EndDate: "2025-04-15"
        },
        {
          time: "19:15 - 20:00",
          subject: "System operacyjny MAC OS X i iOS",
          room: "zajęcia zdalne",
          teacher: "mgr inż. Tomasz Idzi",
          type: "L",
          week: "AB",
          EndDate: "2025-04-15"
        },
        {
          time: "20:15 - 21:00",
          subject: "System operacyjny MAC OS X i iOS",
          room: "zajęcia zdalne",
          teacher: "mgr inż. Tomasz Idzi",
          type: "L",
          week: "AB",
          EndDate: "2025-04-15"
        },
      ]
    },
    {
      day: "Środa",
      classes: [
        {
          time: "07:15 - 08:00",
        },
        {
          time: "08:15 - 09:00",
        },
        {
          time: "09:15 - 10:00",
          subject: "Systemy wbudowane i mikroprocesory",
          room: "EA 438",
          teacher: "dr inż. Krzysztof Bikonis",
          type: "L",
          week: "AB",
        },
        {
          time: "10:15 - 11:00",
          subject: "Systemy wbudowane i mikroprocesory",
          room: "EA 438",
          teacher: "dr inż. Krzysztof Bikonis",
          type: "L",
          week: "AB",
        },
        {
          time: "11:15 - 12:00",
          subject: "Platformy technologiczne",
          room: "EA 507",
          teacher: "dr inż. Wojciech Siwicki",
          type: "L",
          week: "AB",
        },
        {
          time: "12:15 - 13:00",
          subject: "Platformy technologiczne",
          room: "EA 507",
          teacher: "dr inż. Wojciech Siwicki",
          type: "L",
          week: "AB",
        },
        {
          time: "13:15 - 14:00",
          subject: "Język angielski III",
          room: "Gmach B 313",
          teacher: "mgr Ewa Rogala",
          type: "Ć",
          week: "AB",
        },
        {
          time: "14:15 - 15:00",
          subject: "Język angielski III",
          room: "Gmach B 313",
          teacher: "mgr Ewa Rogala",
          type: "Ć",
          week: "AB",
        },
        {
          time: "15:15 - 16:00",
          subject: "Metody probabilistyczne w informatyce",
          room: "NE AUD1L",
          teacher: "dr hab. Jerzy Konorski",
          type: "W",
          week: "AB",
        },
        {
          time: "16:15 - 17:00",
          subject: "Metody probabilistyczne w informatyce",
          room: "NE AUD1L",
          teacher: "dr hab. Jerzy Konorski",
          type: "W",
          week: "AB",
        },
        {
          time: "17:15 - 18:00",
          subject: "Wprowadzenie do cyberbezpieczeństwa",
          room: "NE 207",
          teacher: "dr inż. Krzysztof Gierłowski",
          type: "P",
          week: "AB",
          StartDate: "2025-04-30"
        },
        {
          time: "18:15 - 19:00",
          subject: "Wprowadzenie do cyberbezpieczeństwa",
          room: "NE 207",
          teacher: "dr inż. Krzysztof Gierłowski",
          type: "P",
          week: "AB",
          StartDate: "2025-04-30"
        },
      ]
    },
    {
      day: "Czwartek",
      classes: [
        {
          time: "07:15 - 08:00",
        },
        {
          time: "08:15 - 09:00",
        },
        {
          time: "09:15 - 10:00",
        },
        {
          time: "10:15 - 11:00",
          subject: "Platformy technologiczne",
          room: "EA AUD2",
          teacher: "dr inż. Krzysztof Cwalina",
          type: "W",
          week: "AB",
          EndDate: "2025-04-17"
        },
        {
          time: "11:15 - 12:00",
          subject: "Platformy technologiczne",
          room: "EA AUD2",
          teacher: "dr inż. Krzysztof Cwalina",
          type: "W",
          week: "AB",
          EndDate: "2025-04-17"
        },
        {
          time: "12:15 - 13:00",
          subject: "Przetwarzanie rozproszone",
          room: "EA AUD2",
          teacher: "dr inż. Mariusz Matuszek",
          type: "W",
          week: "AB",
        },
        {
          time: "13:15 - 14:00",
        },
        {
          time: "14:15 - 15:00",
        },
        {
          time: "15:15 - 16:00",
        },
        {
          time: "16:15 - 17:00",
          subject: "Przetwarzanie rozproszone",
          room: "EA 527",
          teacher: "mgr inż. Michał Kościowski",
          type: "L",
          week: "AB",
        },
        {
          time: "17:15 - 18:00",
          subject: "Przetwarzanie rozproszone",
          room: "EA 527",
          teacher: "mgr inż. Michał Kościowski",
          type: "L",
          week: "AB",
        },
      ]
    },
    {
      day: "Piątek",
      classes: [
        {
          time: "07:15 - 08:00",
        },
        {
          time: "08:15 - 09:00",
        },
        {
          time: "09:15 - 10:00",
          subject: "Sieci komputerowe",
          room: "NE AUD1P",
          teacher: "dr inż. Krzysztof Nowicki",
          type: "W",
          week: "AB",
        },
        {
          time: "10:15 - 11:00",
          subject: "Sieci komputerowe",
          room: "NE AUD1P",
          teacher: "dr inż. Krzysztof Nowicki",
          type: "W",
          week: "AB",
        },
        {
          time: "11:15 - 12:00",
          subject: "Metody numeryczne",
          room: "NE AUD1L",
          teacher: "dr hab. Grzegorz Fotyga",
          type: "W",
          week: "AB",
        },
        {
          time: "12:15 - 13:00",
          subject: "Sztuczna inteligencja",
          room: "EA 527",
          teacher: "mgr inż. Szymon Olewniczak",
          type: "L",
          week: "A",
        },
        {
          time: "13:15 - 14:00",
          subject: "Sztuczna inteligencja",
          room: "EA 527",
          teacher: "mgr inż. Szymon Olewniczak",
          type: "L",
          week: "A",
        },
        {
          time: "14:15 - 15:00",
          subject: "Metody numeryczne",
          room: "EA 507",
          teacher: "dr inż. Piotr Sypek",
          type: "P",
          week: "A"
        },
        {
          time: "15:15 - 16:00",
          subject: "Metody numeryczne",
          room: "EA 507",
          teacher: "dr inż. Piotr Sypek",
          type: "P",
          week: "A"
        },
        {
          time: "16:15 - 17:00",
          subject: "Metody probabilistyczne w informatyce",
          room: "NE 239",
          teacher: "dr hab. Jacek Rak",
          type: "L",
          week: "A"
        },
        {
          time: "17:15 - 18:00",
          subject: "Metody probabilistyczne w informatyce",
          room: "NE 239",
          teacher: "dr hab. Jacek Rak",
          type: "L",
          week: "A"
        },
      ]
    }
  ];


// Oblicz aktualny dzień i tydzień
const todayDate = new Date();
const weekdayNames = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
const currentDay = weekdayNames[todayDate.getDay()];

// Załóżmy, że tydzień A zaczyna się 24.02.2025
const refDate = new Date("2025-02-24");
const diffMs = todayDate - refDate;
const diffWeeks = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));
const currentWeekLetter = (diffWeeks % 2 === 0) ? "A" : "B";

document.getElementById("updateParagraph").innerHTML = `Aktualny tydzień: ${currentWeekLetter}<br>Ostatnia aktualizacja: 21 lutego 2025`;

// --- Funkcje pomocnicze ---
function formatTimeRange(timeRange) {
  return timeRange.split(" - ").map(t => t.startsWith("0") ? t.slice(1) : t).join(" - ");
}

function styleType(type, isGreyedOut) {
  if (isGreyedOut) return `<span style="color:rgb(210, 210, 210);">[${type}]</span>`;
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
        let content = `${cls.room}<br>${styleType(cls.type, isGreyedOut)} <strong>${cls.subject}</strong><br>${cls.teacher}`;
        if (cls.StartDate || cls.EndDate) {
          let dateInfo = [];
          if (cls.StartDate) dateInfo.push(`od ${cls.StartDate}`);
          if (cls.EndDate) dateInfo.push(`do ${cls.EndDate}`);
          content += `<br><em>${dateInfo.join(" | ")}</em>`;
        }
        if (isGreyedOut) content = `<span style="color:rgb(210, 210, 210);">${content}</span>`;
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
      let content = `${cls.room}<br>${styleType(cls.type, isGreyedOut)} <strong>${cls.subject}</strong><br>${cls.teacher}`;
      if (cls.StartDate || cls.EndDate) {
        let dateInfo = [];
        if (cls.StartDate) dateInfo.push(`od ${cls.StartDate}`);
        if (cls.EndDate) dateInfo.push(`do ${cls.EndDate}`);
        content += `<br><em>${dateInfo.join(" | ")}</em>`;
      }
      if (isGreyedOut) content = `<span style="color:rgb(210, 210, 210);">${content}</span>`;
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

function setMobileNav()
{
  if (currentDay == "Sobota" || currentDay == "Niedziela")
  {
    selectActualButton.innerText="Plan na najbliższy poniedziałek";
    daySelect.value = "Poniedziałek";
    if (currentWeekLetter == "A")
    {
      weekSelect.value = "B";
    }
    else
    {
      weekSelect.value = "A";
    }
  }
  else
  {
    daySelect.value = currentDay;
    weekSelect.value = currentWeekLetter;
  }
}

// Ustawienie nasłuchiwania zdarzeń
daySelect.addEventListener("change", updateMobileView);
weekSelect.addEventListener("change", updateMobileView);

// Dodanie przycisku "Aktualny termin" do automatycznego ustawienia
const selectActualButton = document.getElementById("selectActual");
setMobileNav();

selectActualButton.addEventListener("click", () => {
  setMobileNav();
  updateMobileView();
});

// Aktualizacja widoku mobilnego przy ładowaniu strony
updateMobileView();