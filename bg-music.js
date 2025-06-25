document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-music");
  
    // ✅ Skip music on specific page (e.g., Page 3)
   // const currentPage = window.location.href;
  
    //if (currentPage.includes("page3.html")) {
      // Stop or pause music if loaded on Page 3
     // audio.pause();
     // audio.currentTime = 0;
      //return;
    //}
  
    // ✅ Try to autoplay after slight delay
    const tryPlay = () => {
      audio.play().catch(() => {
        // ❗ Fallback: Wait for user interaction
        document.body.addEventListener("click", () => {
          audio.play();
        }, { once: true });
      });
    };
  
    setTimeout(tryPlay, 300); // Small delay to let page load
  });
  