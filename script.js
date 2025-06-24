function checkName() {
    const input = document.getElementById('nickname').value.trim().toLowerCase();
    const error = document.getElementById('error');
  
    if (input === "santa") {
      window.location.href = "page2.html";
    } else {
      error.textContent = "Oops! That’s not your nickname 👀";
    }
  }
  

  // Navigate to the photo gallery
function goToPhotos() {
    window.location.href = "page3.html";
  }
  
  // Make the "No" button run away from cursor
  function moveNoBtn() {
    const noBtn = document.getElementById("noBtn");
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 50));
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  }
  

  // Confetti burst for final page
if (window.location.pathname.includes("page4.html")) {
    const canvas = document.getElementById("confetti-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
  
    const pieces = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 5 + 2,
      speed: Math.random() * 3 + 1,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`
    }));
  
    function drawConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.y += p.speed;
        if (p.y > canvas.height) p.y = 0;
      });
      requestAnimationFrame(drawConfetti);
    }
  
    drawConfetti();
  }



  function goToFinalPage() {
    window.location.href = "final.html"; // Make sure final.html is the name of Page 4
  }
 
  

  // Page3
 
  
  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carousel");
    const items = document.querySelectorAll(".carousel-item");
    const total = items.length;
    const rotateAngle = 360 / total;
    let angle = 0;
  
    items.forEach((item, i) => {
      const rotation = rotateAngle * i;
      item.style.transform = `rotateY(${rotation}deg) translateZ(900px)`;
    });
  
    window.rotateCarousel = function (direction) {
      angle += rotateAngle * direction;
      carousel.style.transform = `rotateY(${angle}deg)`;
    };
  });
  

  item.style.transform = `rotateY(${rotation}deg) translateZ(900px)`;



  
  const playBtn = document.getElementById("play-btn");
  const audio = document.getElementById("voiceMsg");
  const heartbeat = document.getElementById("heartbeat");
  let isPlaying = false;

  playBtn.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      playBtn.textContent = "▶️ Play Message";
    } else {
      audio.play();
      playBtn.textContent = "⏸️ Pause";
    }
  });

  audio.onplaying = () => {
    isPlaying = true;
    heartbeat.style.display = "block";  // This makes it appear
  };

  audio.onpause = () => {
    isPlaying = false;
    heartbeat.style.display = "none";   // Hide when paused
  };


  heartbeat.scrollIntoView({ behavior: "smooth", block: "center" });

  const wave = document.getElementById("wave");

  audio.onplaying = () => {
    isPlaying = true;
    heartbeat.style.display = "block";
    wave.style.display = "flex";
  };
  
  audio.onpause = () => {
    isPlaying = false;
    heartbeat.style.display = "none";
    wave.style.display = "none";
  };

  
 

  

  function goToVoicePage() {
    window.location.href = "voice.html"; // ✅ make sure this matches the filename
  }


  

  

