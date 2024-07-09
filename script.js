const grid = document.querySelector("#grid");

for (let i = 0; i < 16; i++) {
  const newRow = document.createElement("div");
  grid.appendChild(newRow);
  newRow.textContent = "row";
  for (let j = 0; j < 15; j++) {
    const newCol = document.createElement("div");
    grid.appendChild(newCol);
    newCol.textContent = "col";
  }
}
