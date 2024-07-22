let img=document.querySelector("img");
let songName=document.querySelector("h4");
let duration=document.querySelectorAll("input")[0];
let volume=document.querySelectorAll("input")[1];
let previous=document.querySelector(".fa-backward");
let pauseBtn=document.querySelector(".fa-pause");
let playBtn=document.querySelector(".fa-play");
let nextBtn=document.querySelector(".fa-forward");
let favBtn=document.querySelector(".fa-heart");

let videoPlayer=document.querySelector("video");
// console.log(img, songName, duration, volume, previous, pauseBtn, playBtn, nextBtn, favBtn);
let storage=[{
    name:"Satranga",
    songImage:"./Images/Satranga.jpg",
    videoSource:"./Images/Video1.mp4",
},
{
    name:"Kushi",
    songImage:"./Images/Kushi.jpg",
    videoSource:"./Images/Video2.mp4",
},
{
    name:"Kaun Tujhe",
    songImage:"./Images/MSDhoni.jpg",
    videoSource:"./Images/Video3.mp4",

}];
let index=0;
let realTime=0;


pauseBtn.style.display= "none";
function playfun()
{

    img.src=storage[index].songImage;
    songName.innerHTML=storage[index].name;
    videoPlayer.src=storage[index].videoSource;
    videoPlayer.currentTime=realTime;

    videoPlayer.play();
    playBtn.style.display="none";
    pauseBtn.style.display="block";
    realTime=videoPlayer.currentTime
}
playBtn.addEventListener("click",playfun)
pauseBtn.addEventListener("click",()=>{

    videoPlayer.pause();
    pauseBtn.style.display="none";
    playBtn.style.display="block";
    realTime= videoPlayer.currentTime;

});
nextBtn.addEventListener("click",()=>
{
    index=(index+1)%storage.length;
    realTime=0;
    playfun();

});
previous.addEventListener("click",()=>{

    index=(index-1+storage.length)%storage.length;
    realTime=0;
    playfun();


});

duration.addEventListener("input",()=>
{
    videoPlayer.currentTime=(duration.value*videoPlayer.duration)/100;

});

videoPlayer.addEventListener("ended",()=>
{
    index=(index+1)%storage.length;
    realTime=0;
    playfun();
});
volume.addEventListener("input",()=>
{
    videoPlayer.volume=volume.value/100;
});