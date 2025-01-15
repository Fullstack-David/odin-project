const container = document.getElementById("container");
const clearBtn = document.getElementById("clear");
const gridBtn = document.getElementById("grid-button");
const yellowBtn = document.querySelector(".yellow_btn");
const greenBtn = document.querySelector(".green_btn");
const blueBtn = document.querySelector(".blue_btn");

gridBtn.addEventListener("click", () => {
  const gridAmount = prompt("What size grid would you like? ");
  if (gridAmount > 0) {
    const cellSize = 600 / gridAmount;
    container.innerHTML = "";

    for (let i = 0; i < gridAmount * gridAmount; i++) {
      let gridCell = document.createElement("div");
      gridCell.className = "grid-cell";
      gridCell.style.width = `${cellSize}px`;
      gridCell.style.height = `${cellSize}px`;
      container.appendChild(gridCell);

      gridCell.addEventListener("mouseover", () => {
        gridCell.classList.add("grid_cell_hovered");
      });
    }
  } else alert("Please enter a valid size!");
});

// ändrar backgrundsfärgen
function applyBackgroundColor(baseClass) {
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((gridCell) => {
    gridCell.classList.remove(
      "grid_cell_yellow",
      "grid_cell_blue",
      "grid_cell_green"
    );
    gridCell.classList.add(baseClass);
  });
}

// eventListener for buttons
yellowBtn.addEventListener("click", () => {
  applyBackgroundColor("grid_cell_yellow");
});

blueBtn.addEventListener("click", () => {
  applyBackgroundColor("grid_cell_blue");
});

greenBtn.addEventListener("click", () => {
  applyBackgroundColor("grid_cell_green");
});

clearBtn.addEventListener("click", () => {
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((gridCell) => {
    gridCell.className = "gird_-cell";
  });
});
