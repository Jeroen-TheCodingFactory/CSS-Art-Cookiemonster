const eyes = Array.from(document.getElementsByClassName("cookiemonster__innerEye"));
const width = window.innerWidth;
const height = window.innerHeight;
const cookies = Array.from(document.getElementsByClassName("cookie"));
let cookieIsDragged = false;
let target;

window.onmousemove = function(event){

    if(cookieIsDragged === false) return;
    
    target.style.top = event.clientY + "px";
    target.style.left = event.clientX + "px";

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

cookies.forEach(function(cookie){
    cookie.onclick = function(event){
        cookieIsDragged = !cookieIsDragged;
        if(event.target.classList.contains("cookie__spot")){
            target = event.target.parentNode;
            return;
        }
        target = event.target;
    }
});