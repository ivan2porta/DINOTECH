
function toogleMobileMenu(element) {
    element.classList.toggle("open");
}

function displayHide() {
    const hiddenDivs = document.querySelectorAll('.brands-div');
    hiddenDivs.forEach(div => {
      div.classList.toggle('d-none');
      div.classList.toggle('d-flex');
    });

    if (document.getElementById("display-hide").textContent == "See more brands") {
      document.getElementById("display-hide").textContent = "Hide brands";
    } else {
      document.getElementById("display-hide").textContent = "See more brands";
    }
}
