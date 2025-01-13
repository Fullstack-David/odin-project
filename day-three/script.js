const container = document.getElementById("container");
const clearBtn = document.getElementById("clear");
const gridBtn = document.getElementById("grid-button");
const yellowBtn = document.querySelector(".yellow_btn");
const greenBtn = document.querySelector(".green_btn");
const blueBtn = document.querySelector(".blue_btn");

function applyBackgroundColor(baseClass) {
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((gridCell) => {
    gridCell.classList.remove(
      "grid_cell_blue",
      "grid_cell_yellow",
      "grid_cell_green"
    );
    gridCell.classList.add(baseClass);
  });
}

yellowBtn.addEventListener("click", () => {
  applyBackgroundColor("grid_cell_yellow");
  console.log("hej");
});

blueBtn.addEventListener("click", () => {
  applyBackgroundColor("grid_cell_blue");
  console.log("hej");
});

greenBtn.addEventListener("click", () => {
  applyBackgroundColor("grid_cell_green");
  console.log("hej");
});

gridBtn.addEventListener("click", () => {
  const gridAmount = prompt("What size grid would you like? ");
  // om gridAmount är större än 0 så kör for-loopen
  if (gridAmount > 0) {
    //   widthen på skärmen delat på user-input
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

clearBtn.addEventListener("click", () => {
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((gridCell) => {
    gridCell.className = "gird_cell";
  });
});
