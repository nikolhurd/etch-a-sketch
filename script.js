const grid = document.querySelector("#grid");
const btnSize = document.querySelector("#size");
const btnDel = document.querySelector("#delete");
const btnRandom = document.querySelector("#random");
const btnClear = document.querySelector("#clear");

function removeAllChildNodes(grid, callback) {
  let child = grid.lastChild;
  while (child) {
    grid.removeChild(child);
    child = grid.lastChild;
  }
  if (callback) {
    callback();
  }
}

const randomColor = () => {
  "use strict";
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return () => {
    var h = randomInt(0, 360);
    var s = randomInt(42, 98);
    var l = randomInt(40, 90);
    return `hsl(${h},${s}%,${l}%)`;
  };
};

const createGrid = (size) => {
  function intToPx(value) {
    return value + "px";
  }

  const newSize = intToPx(400 / size);
  for (let i = 0; i < size; i++) {
    const newRow = document.createElement("div");
    grid.appendChild(newRow);

    newRow.style.width = newSize;
    newRow.style.height = newSize;
    newRow.style.border = "0.1px solid black";
    newRow.style.backgroundColor = "whitesmoke";
    newRow.addEventListener("mouseover", () => {
      newRow.style.background = "CadetBlue";
    });
    for (let j = 0; j < size; j++) {
      const newCol = document.createElement("div");
      newRow.appendChild(newCol);
      newCol.style.width = newSize;
      newCol.style.height = newSize;
      newCol.style.border = "0.1px solid black";
      newCol.style.backgroundColor = "whitesmoke";
      newCol.addEventListener("mouseover", () => {
        newCol.style.background = "CadetBlue";
      });
      btnRandom.addEventListener("click", () => {
        newCol.addEventListener("mouseover", () => {
          const colorFunction = randomColor(); // Get the color generating function
          newCol.style.background = colorFunction();
        });
      });
      btnClear.addEventListener("click", () => {
        if (newCol.style.background !== "whitesmoke") {
          newCol.style.background = "whitesmoke";
        }
      });
    }
  }
};

btnSize.addEventListener("click", () => {
  let userSize = prompt("Enter number of square line (1 - 100)", 16);

  removeAllChildNodes(grid, () => {
    if (userSize > 101) {
      alert("Choose number between 1-100");
      userSize = prompt("Enter number of square line (1 - 100)", 16);
    }
    createGrid(userSize);
  });
});

btnDel.addEventListener("click", () => {
  removeAllChildNodes(grid);
});
