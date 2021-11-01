//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 1.25rem from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//Of Images in header


function displayNImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("hdstyle").src = images[x];
}

function displayPImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("hdstyle").src = images[x];
}

function startTimer2() {
    setInterval(displayNImage, 2000);
}

var images = [], x = -1;
images[0] = "images/p2.jpeg";
images[1] = "images/p3.jpeg";
images[2] = "images/p11.jpeg";
images[3] = "images/p13.jpg";
images[4] = "images/p2.jpeg";
