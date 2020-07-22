let opened = false;

function openNav() {
  if (opened)  {
    document.getElementById('mobileNavBar').style.width = "0%";
    //document.getElementsByTagName('body')[0].style.height = "";
    //document.getElementsByTagName('body')[0].style.overflowY = "scroll";
  } else {
  document.getElementById('mobileNavBar').style.width = "100%";
  //document.getElementsByTagName('body')[0].style.height = "100%";
  //document.getElementsByTagName('body')[0].style.overflowY = "hidden";
  }
  opened = !opened;
}
