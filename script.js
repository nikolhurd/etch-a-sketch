const grid = document.querySelector("#grid");

const createGrid = (number) => {
  for (let i = 0; i < number; i++) {
    const newRow = document.createElement("div");
    grid.appendChild(newRow);
    newRow.addEventListener("mouseover", () => {
      newRow.style.background = "blue";
    });
    for (let j = 0; j < number - 1; j++) {
      const newCol = document.createElement("div");
      grid.appendChild(newCol);
      newCol.addEventListener("mouseover", () => {
        newCol.style.background = "blue";
      });
    }
  }
};
createGrid(16);
