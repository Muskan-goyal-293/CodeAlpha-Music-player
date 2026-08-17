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
heroSectionAnimation();

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



// songs array
const songArray = [
  {
    song: "songs/ikoliks_aj-hindi-song-indian-bollywood-background-music-386994.mp3",
    img: "image/img-1.jpg",
  },
  {
    song: "songs/musiclaundry-khwaab-ka-musafir-romantic-hindi-song-ai-music-original-lyrics-477286.mp3",
    img: "image/img-2.jpg",
  },
  {
    song: "songs/dkfilms-zara-zara-hindi-sad-song-bollywood-385896.mp3",
    img: "image/img-3.jpg",
  },
  {
    song: "songs/hitslab-indian-hindi-song-bollywood-music-351439.mp3",
    img: "image/img-4.jpg",
  },
  {
    song: "songs/hitslab-indian-bollywood-hindi-song-music-390984.mp3",
    img: "image/img-5.jpg",
  },
  { song: "songs/the_mountain-reels-song-576585.mp3", img: "image/img-6.jpg" },
  {
    song: "songs/the_mountain-ambient-ambient-song-576559.mp3",
    img: "image/img-7.jpg",
  },
  { song: "songs/ikoliks-hindi.mp3 ", img: "image/img-8.jpg" },
  { song: "songs/said-song.mp3 ", img: "image/img-9.jpg" },
  { song: "songs/the-feel-reels-song.mp3", img: "image/img-10.jpg" },
];


// song display code
const songShow = document.querySelector(".songShow");
const songShowUl = document.querySelector(".songShow ul");
let allSongs=""
songArray.forEach((val,id)=>{
  allSongs+=`<li>
  <audio src="${val.song}" muted loop></audio>
  <p>
  ${val.song.replaceAll(".mp3","").replaceAll("songs/", "")}
  </p>
  </li>`
})
//  add li in ui
songShowUl.innerHTML = allSongs


const songAudio = document.querySelectorAll(".songShow ul li audio");
const songP = document.querySelectorAll(".songShow ul li p");
const songCardImg = document.querySelector(".songCard img")
const songTextPera = document.querySelector(".songTextPera")
let currentSong = 0;

// Play Song Function
function playSong(index) {

  // Sab songs stop karo
  songAudio.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
    audio.muted = true;
  });

  // Selected song play karo
  songAudio[index].muted = false;
  songAudio[index].play();

  // UI update
  songCardImg.src = songArray[index].img;
  songTextPera.innerText = songP[index].innerText;

  // Current index save
  currentSong = index;
}

// Song Click Events
songP.forEach((p, id) => {
  p.addEventListener("click", () => {
    playSong(id);
  });
});

// Prev Button
const pri = document.querySelector(".pri");
pri.addEventListener("click", () => {
  currentSong--;
  if (currentSong < 0) {
    currentSong = songArray.length - 1;
  }
  playSong(currentSong);
});

// Next Button
const next = document.querySelector(".next");
next.addEventListener("click", () => {
  currentSong++;
  if (currentSong >= songArray.length) {
    currentSong = 0;
  }
  playSong(currentSong);
});

const playBtn = document.querySelector(".play");
playBtn.addEventListener("click", () => {

  if (songAudio[currentSong].paused) {
    songAudio[currentSong].play();
  } else {
    songAudio[currentSong].pause();
  }
});
