const NUM_OF_PHOTOS = 21;

function loadImages() {

  let grid = document.getElementById("grid");

  for (let x = 0; x < NUM_OF_PHOTOS; x++) {
    let image = "image" + (x + 1);
    grid.innerHTML += `<div class="card" style="background-image: url('images/cakes/${image}.jpg')"></div>`
  }

}
