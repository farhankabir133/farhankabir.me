import React, { useEffect, useRef } from "react";
import "../styles/Terminal.css";

interface ParticleEffectProps {
  intensity?: "low" | "medium" | "high";
}

const ParticleEffect: React.FC<ParticleEffectProps> = ({
  intensity = "low",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
       const width = canvas.offsetWidth;
       const height = canvas.offsetHeight;
       canvas.width = width;
       canvas.height = height;

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;

      constructor() {
           this.x = Math.random() * width;
           this.y = height + 10;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = -Math.random() * 3 - 1;
        this.life = 1;
        this.maxLife = Math.random() * 150 + 100;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= 1 / this.maxLife;
      }

      draw() {
        const alpha = this.life;
          if (ctx) {
            ctx.fillStyle = `rgba(20, 184, 166, ${alpha * 0.6})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
          }
      }

      isDead() {
        return this.life <= 0;
      }
    }

    let particles: Particle[] = [];

    const countMap = {
      low: 8,
      medium: 15,
      high: 25,
    };

    const spawnRate = countMap[intensity];

    const animate = () => {
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

      // Spawn new particles
      if (Math.random() < spawnRate / 100) {
        particles.push(new Particle());
      }

      // Update and draw particles
      particles = particles.filter((particle) => {
        particle.update();
        particle.draw();
        return !particle.isDead();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="particle-effect"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticleEffect;
