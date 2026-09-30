import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth || 1280;
      canvas.height = window.innerHeight || 720;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle array for atmospheric sunset dust & oilfield ambient glow
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * (canvas.width || 1280),
      y: Math.random() * (canvas.height || 720),
      radius: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.6 + 0.2,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.4 - 0.1,
      color: Math.random() > 0.4 ? '#35E6A1' : '#20C98A'
    }));

    // Active well pulse laser variables
    let pulseAngle = 0;

    const render = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw floating particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * 0.7;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      // 2. Draw subtle vertical emerald laser energy beam for Active Well
      pulseAngle += 0.03;
      const beamAlpha = 0.25 + Math.sin(pulseAngle) * 0.1;
      
      // Calculate scaled position based on typical desktop view
      const activeWellX = canvas.width * 0.325;
      const wellStartY = canvas.height * 0.54;
      const wellEndY = canvas.height * 0.95;

      const gradient = ctx.createLinearGradient(activeWellX, wellStartY, activeWellX, wellEndY);
      gradient.addColorStop(0, 'rgba(53, 230, 161, 0.9)');
      gradient.addColorStop(0.5, 'rgba(32, 201, 138, 0.6)');
      gradient.addColorStop(1, 'rgba(6, 19, 15, 0.2)');

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(activeWellX - 2, wellStartY);
      ctx.lineTo(activeWellX + 2, wellStartY);
      ctx.lineTo(activeWellX + 3, wellEndY);
      ctx.lineTo(activeWellX - 3, wellEndY);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.globalAlpha = beamAlpha;
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#35E6A1';
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
    />
  );
}
