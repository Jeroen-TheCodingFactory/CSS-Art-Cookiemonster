const eyes = Array.from(document.getElementsByClassName("cookiemonster__innerEye"));
const width = window.innerWidth;
const height = window.innerHeight;
const cookie = document.getElementById("js--cookie");
let cookieIsDragged = false;

window.onmousemove = function(event){

    if(cookieIsDragged === false) return;
    console.log(event);
    cookie.style.top = event.clientY + "px";
    cookie.style.left = event.clientX + "px"; 

    let left = event.clientX / width * 90;
    let top = event.clientY / height * 90;

    if(left < 0) return;
    if(left > 90) return;
    if(top < 5) return;
    if(top > 100) return;

    eyes.forEach( eye => {
        eye.style.left = left + "%";
        eye.style.top = top + "%";
    });
}  

cookie.onclick = function(event){
    cookieIsDragged = !cookieIsDragged;
    console.log(cookieIsDragged);
}