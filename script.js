import timetable from "./timetable.js";
// Get the current date in YYYY-MM-DD format
const today = new Date().toISOString().split("T")[0];

// Helper function to format time range
function formatTimeRange(timeRange) {
  return timeRange.split(" - ").map(time => time.startsWith("0") ? time.slice(1) : time).join(" - ");
}

// Helper function to style the type field
function styleType(type, isGreyedOut) {
  if (isGreyedOut) return `<span style="color: #A0A0A0;">[${type}]</span>`;
  switch(type) {
    case "W": return `<span style="color: white; background-color: blue; padding: 2px 4px;">[W]</span>`;
    case "L": return `<span style="color: white; background-color: purple; padding: 2px 4px;">[L]</span>`;
    case "Ć": return `<span style="color: black; background-color: pink; padding: 2px 4px;">[Ć]</span>`;
    case "P": return `<span style="color: black; background-color: orange; padding: 2px 4px;">[P]</span>`;
    default: return `<span>[${type}]</span>`;
  }
}

// Get list of days from the data
const days = timetable.map(dayObj => dayObj.day);

// Get unique time slots
const timeSlotsSet = new Set();
timetable.forEach(dayObj => {
  dayObj.classes.forEach(cls => timeSlotsSet.add(cls.time));
});
const timeSlots = Array.from(timeSlotsSet).sort();

// Build table headers
function buildHeaders() {
  const mainHeader = document.getElementById("mainHeader");
  const subHeader = document.getElementById("subHeader");

  // Time column header
  const timeTh = document.createElement("th");
  timeTh.rowSpan = 2;
  timeTh.textContent = "Time";
  mainHeader.appendChild(timeTh);

  // Day headers
  days.forEach(day => {
    const dayTh = document.createElement("th");
    dayTh.colSpan = 2;
    dayTh.textContent = day;
    mainHeader.appendChild(dayTh);
  });

  // "A" and "B" subheaders for weeks
  days.forEach(() => {
    const aTh = document.createElement("th");
    aTh.textContent = "A";
    const bTh = document.createElement("th");
    bTh.textContent = "B";
    subHeader.appendChild(aTh);
    subHeader.appendChild(bTh);
  });
}

// Build table body
function buildTableBody() {
  const tableBody = document.getElementById("tableBody");

  timeSlots.forEach(timeSlot => {
    const row = document.createElement("tr");

    // Time column
    const timeCell = document.createElement("td");
    timeCell.textContent = formatTimeRange(timeSlot);
    row.appendChild(timeCell);

    // Fill schedule for each day
    days.forEach(day => {
      const dayData = timetable.find(d => d.day === day);
      const classes = dayData.classes.filter(cls => cls.time === timeSlot);

      let classesA = [];
      let classesB = [];
      let classesAB = [];

      classes.forEach(cls => {
        let isGreyedOut = (cls.StartDate && cls.StartDate > today) || (cls.EndDate && cls.EndDate < today);

        let content = `
          ${cls.room}<br>
          <strong>${styleType(cls.type, isGreyedOut)} ${cls.subject}</strong><br>
          ${cls.teacher}
        `;

        if (cls.StartDate || cls.EndDate) {
          let dateInfo = [];
          if (cls.StartDate) dateInfo.push(`Start: ${cls.StartDate}`);
          if (cls.EndDate) dateInfo.push(`End: ${cls.EndDate}`);
          content += `<br><em>${dateInfo.join(" | ")}</em>`;
        }

        if (isGreyedOut) content = `<span style="color: #A0A0A0;">${content}</span>`;

        if (cls.week === "AB") {
          classesAB.push(content);
        } else if (cls.week === "A") {
          classesA.push(content);
        } else if (cls.week === "B") {
          classesB.push(content);
        }
      });

      if (classesAB.length > 0) {
        // Merge A and B columns if "AB" exists
        const mergedCell = document.createElement("td");
        mergedCell.colSpan = 2;
        mergedCell.innerHTML = classesAB.join("<br><br>");
        row.appendChild(mergedCell);
      } else {
        // Separate A and B columns if "AB" does not exist
        const cellA = document.createElement("td");
        const cellB = document.createElement("td");

        cellA.innerHTML = classesA.length ? classesA.join("<br><br>") : "";
        cellB.innerHTML = classesB.length ? classesB.join("<br><br>") : "";

        row.appendChild(cellA);
        row.appendChild(cellB);
      }
    });

    tableBody.appendChild(row);
  });
}

// Build table
buildHeaders();
buildTableBody();
