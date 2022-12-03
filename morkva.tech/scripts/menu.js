function RemoveBlanket() { document.getElementById("menu-blanket").classList.remove("on"); }

function ToggleMenu() {
  if(document.body.classList.contains("menu-open")) {
    document.body.classList.remove("menu-open");
    document.body.classList.add("menu-close");
    setTimeout(RemoveBlanket, 250);
  } else {
    document.body.classList.remove("menu-close");
    document.body.classList.add("menu-open");
    document.getElementById("menu-blanket").classList.add("on");
  }
  return false;
}

document.getElementById("menu-button").onclick = ToggleMenu;
document.getElementById("menu-blanket").onclick = ToggleMenu;
