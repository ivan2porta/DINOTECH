hidden = true;

function toogleMobileMenu(element) {
    element.classList.toggle("open");
}

function displayHide() {
  const hiddenDivs = document.querySelectorAll('.brands-div');
  hiddenDivs.forEach(div => {
      div.classList.toggle('d-none');
      div.classList.toggle('d-flex');
  });

  const button = document.getElementById("display-hide");

  if(hidden == true){
    hidden = false;
    button.textContent = "Hide brands";
  } else{
    hidden = true;
    button.textContent = "See more brands"
  }
}