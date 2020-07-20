let opened = false;

function openNav() {
  if (opened) document.getElementById('mobileNavBar').style.width = "0%";
  else document.getElementById('mobileNavBar').style.width = "100%";
  opened = !opened;
}
