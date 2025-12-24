import { useEffect, useRef } from "react";
import "./Confetti.css";

class ConfettiParticle {
  constructor(canvas) {
    this.x = Math.random() * canvas.width;
    this.y = -10 - Math.random() * 100;
    this.size = Math.random() * 14 + 8;
    this.speedY = Math.random() * 4 + 3;
    this.speedX = Math.random() * 3 - 1.5;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = Math.random() * 8 - 4;
    this.opacity = 1;
    this.wobble = Math.random() * Math.PI * 2;
    this.wobbleSpeed = Math.random() * 0.05 + 0.02;
    
    // Cute emoji confetti
    this.emojis = ["✨", "💖", "🎀", "💝", "⭐", "🌟", "💫", "🎉", "🎊", "💕"];
    this.emoji = this.emojis[Math.floor(Math.random() * this.emojis.length)];
  }

  update() {
    this.y += this.speedY;
    this.wobble += this.wobbleSpeed;
    this.x += this.speedX + Math.sin(this.wobble) * 0.5;
    this.rotation += this.rotationSpeed;
    this.speedY += 0.1;
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.font = `${this.size}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.emoji, 0, 0);
    ctx.restore();
  }
}

function Confetti() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    console.log("Confetti effect started!"); // Debug log

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const particleCount = 200; // More particles
    for (let i = 0; i < particleCount; i++) {
      setTimeout(() => {
        particles.current.push(new ConfettiParticle(canvas));
      }, i * 10); // Faster spawn rate
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((particle) => {
        particle.update();
        particle.draw(ctx);
        return particle.y < canvas.height + 50;
      });

      if (particles.current.length > 0) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        console.log("Confetti animation complete"); // Debug log
      }
    };

    animate();

    return () => {
      console.log("Confetti cleanup"); // Debug log
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      particles.current = [];
    };
  }, []);

  return <canvas ref={canvasRef} className="confetti-canvas" />;
}

export default Confetti;
