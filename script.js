/* MUSIC */
let music = document.getElementById("bgmusic");

/* iPhone unlock */
document.addEventListener("click", function(){
    if(music.paused){
        music.play().catch(()=>{});
    }
}, { once: true });

/* OPEN LETTER */
function openLetter(){

    music.muted=false;
    music.volume=1;
    music.play().catch(()=>{});

    document.getElementById("screen1").classList.remove("active");
    document.getElementById("screen2").classList.add("active");

    startAnimations();
}

/* ANIMATIONS */
function startAnimations(){

setTimeout(()=>{document.getElementById("pic1").classList.add("show");},1000);
setTimeout(()=>{document.getElementById("pic2").classList.add("show");},2000);

const text="I love you Princess ❤️. We and our parents will be happy together forever ra. I will take care of everything I promise.";
let i=0;

function typeWriter(){
if(i<text.length){
document.getElementById("message").innerHTML+=text.charAt(i);
i++;
setTimeout(typeWriter,50);
}
}
setTimeout(typeWriter,2500);

setTimeout(()=>{document.getElementById("roseBtn").style.display="block";},8000);
}

/* GO TO PROPOSAL */
function openProposal(){
document.getElementById("screen2").classList.remove("active");
document.getElementById("screen3").classList.add("active");
}

/* YES CLICK */
function yesClick(){

document.getElementById("screen3").classList.remove("active");
document.getElementById("screen4").classList.add("active");

/* animate card */
setTimeout(()=>{
document.querySelector(".final-card").classList.add("showFinal");
},300);

/* animate text */
setTimeout(()=>{
document.getElementById("finalText").classList.add("showText");
},1700);
}

/* NO button runs away */
const noBtn=document.getElementById("noBtn");
if(noBtn){
noBtn.addEventListener("touchstart",()=>{
noBtn.style.position="absolute";
noBtn.style.left=Math.random()*80+"%";
noBtn.style.top=Math.random()*80+"%";
});
}

/* falling roses */
function createRose(){
const rose=document.createElement("div");
rose.classList.add("rose");
rose.innerHTML="🌹";
rose.style.left=Math.random()*100+"vw";
rose.style.animationDuration=(5+Math.random()*5)+"s";
document.body.appendChild(rose);
setTimeout(()=>{rose.remove();},10000);
}
setInterval(createRose,400);