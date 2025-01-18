const container = document.getElementById("container");
const btn = document.querySelector("button");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;
    container.appendChild(cell);
    cell.classList.add("grid-item");
  }
  const div = document.createElement("div");
  container.appendChild(div);
}

function askeUser() {
  const numberOfSquars = prompt(
    "Enter number of squeres per side for a new grid."
  );
}

makeRows(2, 2);
