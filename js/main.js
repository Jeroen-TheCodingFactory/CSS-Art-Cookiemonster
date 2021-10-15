const eyes = Array.from(document.getElementsByClassName("cookiemonster__innerEye"));
const width = window.innerWidth;
const height = window.innerHeight;
const cookies = Array.from(document.getElementsByClassName("cookie"));
let cookieIsDragged = false;
let target;
const mouth = document.getElementById("js--mouth");


/* music from HTML */
const snackTime = document.getElementById("js--snackTime");
const music = Array.from(document.getElementsByClassName("music"));

function onSnackTime(){
    let isPlayed = false;
    return function playSnackTime(){
        if(isPlayed === false){
            snackTime.play();
            isPlayed = true;
        }
    };
}

mouth.onmouseenter = function(event){
    let randomNumber = 1;
    if(!event.relatedTarget.classList.contains("cookie") && cookieIsDragged === false) return;
        event.relatedTarget.classList.add("cookie--eaten--" + event.relatedTarget.dataset.cookie);
        event.relatedTarget.dataset.cookie = parseInt(event.relatedTarget.dataset.cookie) + 1;   
        mouth.classList.toggle("a-eat");
        setTimeout(function(){
            mouth.classList.toggle("a-eat");
        },1600);
        music[randomNumber].play();
}

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

/* call to closure */
let checkSnackTime = onSnackTime();
/* forEach cookie, reference to closure */
cookies.forEach(function(cookie){
    cookie.onclick = function(event){ 
        checkSnackTime();   
        cookieIsDragged = !cookieIsDragged;
        if(event.target.classList.contains("cookie__spot")){
            target = event.target.parentNode;
            return;
        }
        target = event.target;
    }
});