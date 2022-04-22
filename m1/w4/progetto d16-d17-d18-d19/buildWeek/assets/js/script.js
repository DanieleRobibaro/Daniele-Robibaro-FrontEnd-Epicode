let nImg = 0;

function prossima() {
  nImg++;

  if (nImg > 4) {
    nImg = 0;
  }

  currentSlide(nImg)
}
function currentSlide(n) {
  nImg=n
  document.getElementsByClassName("slider-container")[0].style.transform = "translateX(" + -265 * n + "px)";
}


//onscroll-blog//

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top; //sua posizione dall'inizio della nostra viewport
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){ //sua posizione rispetto a top < rispetto a finestra
      reveals[i].classList.add('revealed');
    }
  }
}


window.addEventListener('scroll', reveal2);

function reveal2(){
  var reveals = document.querySelectorAll('.reveal2');

  for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('revealed');
    }
  }
}

window.addEventListener('scroll', reveal3);

function reveal3(){
  var reveals = document.querySelectorAll('.reveal3');

  for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('revealed');
    }
  }
}

window.addEventListener('scroll', reveal4);

function reveal4(){
  var reveals = document.querySelectorAll('.reveal4');

  for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('revealed');
    }
  }
}

window.addEventListener('scroll', reveal5);

function reveal5(){
  var reveals = document.querySelectorAll('.reveal5');

  for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('revealed');
    }
  }
}