const tbody = document.querySelector("tbody");
const body = document.querySelector("body");

body.addEventListener("keydown", (event) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${event.key}</td>
    <td>${event.code}</td>
    <td>${event.keyCode}</td>
    <td>${event.altKey}</td>
    <td>${event.ctrlKey}</td>
    <td>${event.shiftKey}</td>
    <td>${event.timeStamp.toFixed(2)}</td>
  `;
  tbody.appendChild(tr);
});
