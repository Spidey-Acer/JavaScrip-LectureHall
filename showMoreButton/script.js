function showMore() {
  var tiles = document.getElementsByClassName("tile");
  for (var i = 2; i < tiles.length; i++) {
    tiles[i].style.display = "block";
  }
  document.getElementsByClassName("show-more")[0].style.display = "none";
  document.getElementsByClassName("show-less")[0].style.display = "block";
}

function showLess() {
  var tiles = document.getElementsByClassName("tile");
  for (var i = 2; i < tiles.length; i++) {
    tiles[i].style.display = "none";
  }
  document.getElementsByClassName("show-more")[0].style.display = "block";
  document.getElementsByClassName("show-less")[0].style.display = "none";
}
