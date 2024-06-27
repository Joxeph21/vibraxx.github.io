const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Emo girl",
    name: "mgk ft WILLOW",
    source:
      "music/Machine_Gun_Kelly_feat_WILLOW_-_Emo_Girl.mp3",
  },
  {
    title: "No Idea",
    name: "Don Toliver",
    source:
      "music/Don-Toliver-No-Idea-(Bazehits).mp3",
    },
    {
      title: "Million dollar baby",
      name: "Tommy Richman",
      source:
        "music/Tommy-Richman-MILLION-DOLLAR-BABY-VHS-(Bazenation.com).mp3",
    },
  {
    title: "We Still Don't Trust You",
    name: "Future ft Metro Boomin ft The Weekend",
    source:
    "music/Future, Metro Boomin, The Weeknd - We Still Dont Trust You (Official Music Video) (320 kbps).mp3",
  },
  {
    title: "Mystery Lady",
    name: "Masego ft Don Toliver",
    source:
      "music/Masego_Don_Toliver_-_Mystery_Lady (1).mp3",
  },
  {
    title: "Tadow",
    name: "Masego",
    source:
      "music/Masego_FKJ_-_Tadow_@BaseNaija.mp3",
  },

  {
    title: "Sensational",
    name: "Chris Brown ft Davido ft Lojay",
    source:
      "music/Davido-Ft-Chris-Brown-and-Lojay-Sensational-(TrendyBeatz.com).mp3",
  },
  {
    title: "Nobody Gets Me",
    name: "SZA",
    source:
      "music/SZA_-_Nobody_Gets_Me_bazepop.com.ng.mp3",
  },
];

let currentSongIndex = 4;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 4,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});
