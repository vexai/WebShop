$(function() { 



  $(document).scroll(function () {
    let $nav = $(".header");
    let $sideNav = $("#sidebarMenu");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $sideNav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});



const modal = document.getElementsByClassName("modal");
const imgModal = document.getElementsByClassName("imgModal");
const span = document.getElementsByClassName("close");

imgModal[0].onclick = function() {
  modal[0].style.display = "block";
}
span[0].onclick = function() {
  modal[0].style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
}

imgModal[1].onclick = function() {
  modal[1].style.display = "block";
}
span[1].onclick = function() {
  modal[1].style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal[1]) {
    modal[1].style.display = "none";
  }
}

imgModal[2].onclick = function() {
  modal[2].style.display = "block";
}
span[2].onclick = function() {
  modal[2].style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal[2]) {
    modal[2].style.display = "none";
  }
}

imgModal[3].onclick = function() {
  modal[3].style.display = "block";
}
span[3].onclick = function() {
  modal[3].style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal[3]) {
    modal[3].style.display = "none";
  }
}
imgModal[4].onclick = function() {
  modal[4].style.display = "block";
}
span[4].onclick = function() {
  modal[4].style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal[4]) {
    modal[4].style.display = "none";
  }
}
imgModal[5].onclick = function() {
  modal[5].style.display = "block";
}
span[5].onclick = function() {
  modal[5].style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal[5]) {
    modal[5].style.display = "none";
  }
}
imgModal[6].onclick = function() {
  modal[6].style.display = "block";
}
span[6].onclick = function() {
  modal[6].style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal[6]) {
    modal[6].style.display = "none";
  }
}
imgModal[7].onclick = function() {
  modal[7].style.display = "block";
}
span[7].onclick = function() {
  modal[7].style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal[7]) {
    modal[7].style.display = "none";
  }
}
imgModal[8].onclick = function() {
  modal[8].style.display = "block";
}
span[8].onclick = function() {
  modal[8].style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal[8]) {
    modal[8].style.display = "none";
  }
}
imgModal[9].onclick = function() {
  modal[9].style.display = "block";
}
span[9].onclick = function() {
  modal[9].style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal[9]) {
    modal[9].style.display = "none";
  }
}

})
  


