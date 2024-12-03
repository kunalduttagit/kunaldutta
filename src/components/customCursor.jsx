"use client";

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [hasPrecisePointer, setHasPrecisePointer] = useState(false);

  useEffect(() => {
    const checkForPointer = () => {
      const hasFine = window.matchMedia("(pointer:fine)").matches;
      const hasCoarse = window.matchMedia("(pointer:coarse)").matches;
      setHasPrecisePointer(hasFine || (hasCoarse && !window.matchMedia('(hover:none)').matches));
    };

    const mediaQuery = window.matchMedia("(pointer:fine), (pointer:coarse)");
    
    checkForPointer();

    mediaQuery.addEventListener("change", checkForPointer);

    return () => mediaQuery.removeEventListener("change", checkForPointer);
  }, []);

  useEffect(() => {
    if (!hasPrecisePointer) return;

    const cursor = document.querySelector('.cursor-dot');
    // Initialize position off-screen
    let currentX = -100;
    let currentY = -100;
    let targetX = -100;
    let targetY = -100;

    const animate = () => {
      const diffX = targetX - currentX;
      const diffY = targetY - currentY;
      
      currentX += diffX * 0.4;
      currentY += diffY * 0.4;
      
      cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
      requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      const target = e.target;
      const isOverArrowCursor = target.closest('.arrow-cursor');
      const isOverBigDotCursor = target.closest('.big-dot-cursor');
      
      cursor.style.opacity = isOverArrowCursor ? '0' : '1';
      cursor.classList.toggle('cursor-dot-large', isOverBigDotCursor);
      
      targetX = e.clientX - cursor.offsetWidth / 2;
      targetY = e.clientY - cursor.offsetHeight / 2;
    };

    document.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [hasPrecisePointer]);

  if (!hasPrecisePointer) return null;

  return (
    <div className="cursor-dot" style={{ transform: 'translate(-100px, -100px)' }}></div>
  );
}