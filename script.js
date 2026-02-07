let music = document.getElementById("bgmusic");

function openLetter(){
    music.play();

    document.getElementById("screen1").classList.remove("active");
    document.getElementById("screen2").classList.add("active");

    startAnimations();
}

function openProposal(){
    document.getElementById("screen2").classList.remove("active");
    document.getElementById("screen3").classList.add("active");

    // reset button position properly
    const noBtn=document.getElementById("noBtn");
    noBtn.style.position="relative";
}

/* animations */

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

/* proposal */

function yesClick(){
document.body.innerHTML="<h1 class='final'>I Love You Forever Ritika ❤️</h1>";
}

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