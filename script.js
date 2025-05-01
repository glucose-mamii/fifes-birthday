function flipCard() {
    const card = document.querySelector('.card');
    const isOpen = card.classList.toggle('open');
    const audio = document.getElementById('yt-audio');
  
    if (isOpen) {
      confetti({
        particleCount: 180,
        spread: 70,
        origin: { y: 0.6 }
      });
  
      // Unmute YouTube and start it
      const src = audio.getAttribute("src");
      if (!src.includes("mute=0")) {
        audio.setAttribute("src", src.replace("mute=1", "mute=0"));
      }
    } else {
      // Reload iframe to reset
      const base = "https://www.youtube.com/embed/bJJn1ECjTww?start=46&autoplay=1&mute=1&controls=0&loop=1&playlist=bJJn1ECjTww";
      document.getElementById("yt-audio").setAttribute("src", base);
    }
  }
  
  