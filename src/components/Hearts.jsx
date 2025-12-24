import { useEffect } from "react";
import "./Hearts.css";

function Hearts() {
  useEffect(() => {
    const spawnHeart = () => {
      const heart = document.createElement("div");
      heart.className = "heart";
      
      // Cute heart emojis
      const hearts = ["💖", "💕", "💗", "💓", "💝", "🥰", "💗", "✨"];
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

      const x = Math.random() * window.innerWidth;
      const size = 18 + Math.random() * 24;
      const drift = -60 + Math.random() * 120;
      const duration = 5000 + Math.random() * 3000;

      heart.style.left = x + "px";
      heart.style.fontSize = size + "px";

      document.querySelector(".hearts").appendChild(heart);

      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(1, elapsed / duration);
        const ease = 1 - Math.pow(1 - progress, 3);
        const bounce = Math.abs(Math.sin(progress * Math.PI * 3)) * 0.3;

        const translateY = -(ease * window.innerHeight);
        const translateX = drift * progress;
        const rotate = progress * 25 + bounce * 10;
        const scale = 1 + bounce * 0.2;
        const opacity = Math.max(0, 1 - progress * 1.5);

        heart.style.transform = `translateY(${translateY}px) translateX(${translateX}px) rotate(${rotate}deg) scale(${scale})`;
        heart.style.opacity = opacity;

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          heart.remove();
        }
      };

      requestAnimationFrame(animate);
    };

    const interval = setInterval(spawnHeart, 500);

    return () => clearInterval(interval);
  }, []);

  return <div className="hearts" aria-hidden="true"></div>;
}

export default Hearts;
