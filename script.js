// Hero Section Text Animation
// Hero section and paragraph  select
const heroSectionDiv = document.querySelector(".heroSectionDiv");
const heroSectionDivPera = document.querySelector(".heroSectionDiv p");

// Paragraph text convert into character
const heroSectionDivPeraText = heroSectionDivPera.innerText.split("");

// add every character into span
let sum = "";
heroSectionDivPeraText.forEach((elem) => {
  sum += `<span>${elem}</span>`;
});

// Original content replace by spans
heroSectionDiv.innerHTML = sum;

// select all spans
const heroSectionSpan = document.querySelectorAll(".heroSectionDiv span");

// Animation control variables
let interval = null;
let count = 0;

// Text animation function
function heroSectionAnimation() {
  clearInterval(interval);

  interval = setInterval(() => {
    heroSectionSpan[count].style.opacity = 1;

    if (count === heroSectionDivPeraText.length - 1) {
      clearInterval(interval);
    }

    count++;
  }, 250);
}
// heroSectionAnimation();

// page open and close code
const homeButton = document.querySelector(".homeButton");
const musicSection = document.querySelector(".music");
const backButton = document.querySelector(".backButton");
homeButton.addEventListener("click", () => {
  musicSection.style.display = "block";
});

backButton.addEventListener("click", () => {
  musicSection.style.display = "none";
});

const songArray = [
  {
    song: "ikoliks_aj-hindi-song-indian-bollywood-background-music-386994.mp3",
    img: "image/img-1.jpg",
  },
  {
    song: "musiclaundry-khwaab-ka-musafir-romantic-hindi-song-ai-music-original-lyrics-477286.mp3",
    img: "image/img-2.jpg",
  },
  {
    song: "dkfilms-zara-zara-hindi-sad-song-bollywood-385896.mp3",
    img: "image/img-3.jpg",
  },
  {
    song: "hitslab-indian-hindi-song-bollywood-music-351439.mp3",
    img: "image/img-4.jpg",
  },
  {
    song: "hitslab-indian-bollywood-hindi-song-music-390984.mp3",
    img: "image/img-5.jpg",
  },
  { song: "the_mountain-reels-song-576585.mp3", img: "image/img-6.jpg" },
  {
    song: "the_mountain-ambient-ambient-song-576559.mp3",
    img: "image/img-7.jpg",
  },
  { song: "ikoliks-hindi.mp3 ", img: "image/img-8.jpg" },
  { song: "said-song.mp3 ", img: "image/img-9.jpg" },
  { song: "the-feel-reels-song.mp3", img: "image/img-10.jpg" },
];

const songShow = document.querySelector(".songShow");
const songShowUl = document.querySelector(".songShow ul");
let allSongs=""
songArray.forEach((val,id)=>{
  allSongs+=`<li>
  <audio src="${val.song}" muted loop></audio>
  <p>
  ${val.song.replaceAll(".mp3","")}
  </p>
  </li>`
})
console.log(songShowUl)
songShowUl.innerHTML = allSongs






// // const song = document.querySelectorAll(".songShow audio");
// const songP = document.querySelectorAll(".songShow p");

// song.forEach((val, id) => {
//   console.dir(val.src);
//   console.log(val);
//   songP[id].addEventListener("click", () => {
//     console.log("cl");
//     val.play();
//   });
// });
