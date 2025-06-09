const slides=document.getElementById('slides');
const indicatorsContainer=document.getElementById('carousel-indicators');
const totalSlides=5;
let currentIndex=0;
let intervalId;
for(let i=0;i<totalSlides;i++){
const dot=document.createElement('span');
if(i===0)dot.classList.add('active');
dot.addEventListener('click',()=>{goToSlide(i);resetInterval();});
indicatorsContainer.appendChild(dot);
}
function goToSlide(index){
currentIndex=index;
slides.style.transform=`translateX(-${index*20}%)`;
updateIndicators();
}
function updateIndicators(){
const dots=indicatorsContainer.children;
for(let i=0;i<dots.length;i++){
dots[i].classList.toggle('active',i===currentIndex);
}
}
function nextSlide(){
currentIndex=(currentIndex+1)%totalSlides;
goToSlide(currentIndex);
}
function resetInterval(){
clearInterval(intervalId);
intervalId=setInterval(()=>{
nextSlide();
},5000);
}
intervalId=setInterval(()=>{
nextSlide();
},5000);
