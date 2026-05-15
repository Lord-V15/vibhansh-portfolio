"use client";

import { useEffect, useRef } from 'react';

interface MatrixCowsayAnimationProps {
  className?: string;
}

interface FlyingCharacter {
  id: number;
  x: number;
  y: number;
  speed: number;
  character: string;
  opacity: number;
  direction: 'top-left' | 'bottom-left' | 'left';
}

const COWSAY_CHARACTERS = [
  `   ^__^
   (oo)\\_______
   (__)\\       )\\/\\
       ||----w |
       ||     ||`,

  `   ^__^
   (==)\\_______
   (__)\\       )\\/\\
    U  ||----w |
       ||     ||`,

  `  ___
 (o o)
 (   )
  ^^^`,

  `  /\\_/\\
 ( o.o )
  > ^ <`,

  ` |\\_/|
 | o o |
 |  >  |
  \\___/`,

  `   __
  /  \\
 |    |
  \\__/`,

  `  .--.
 |o_o |
 |:_/ |
 //   \\ \\
(|     | )
/'\\_   _/\`\\
\\___)=(___/`,

  `   ___
  {o,o}
  |)__)
  -"-"-`,

  `  /\\___/\\
 (  o.o  )
  >  ^  <
 /|     |\\
(_|     |_)`,

  `   _
  /(|
 (  :
  ||
  ||`,

  `  ____
 |o  o|
 | [] |
  \\__/`,

  ` (\\/)
 (o.o)
 (> <)`,

  `  @..@
 (----)
( >__< )
 ^^ ^^`,

  `   _/\\_
  /o o\\
  \\ ~ /
   ^^^`,
];

export default function MatrixCowsayAnimation({ className = '' }: MatrixCowsayAnimationProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const charactersRef = useRef<FlyingCharacter[]>([]);
  const nextIdRef = useRef(0);
  const lastSpawnTimeRef = useRef(0);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const spawnInterval = 400; // Spawn every 400ms - much more frequent!
    const diagonalSpeed = 0.3; // Slower speed for readability

    // Sphere center is at 75% x, 50% y with radius of 17.5%
    const sphereCenterX = 75;
    const sphereCenterY = 50;
    const sphereRadius = 17.5;

    const createCharacter = (): FlyingCharacter => {
      const randomChar = COWSAY_CHARACTERS[Math.floor(Math.random() * COWSAY_CHARACTERS.length)];

      // Spawn from random position inside the sphere
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * sphereRadius;
      const startX = sphereCenterX + Math.cos(angle) * distance;
      const startY = sphereCenterY + Math.sin(angle) * distance;

      // Randomly choose direction: top-left, bottom-left, or left
      const rand = Math.random();
      const direction = rand < 0.33 ? 'top-left' : rand < 0.67 ? 'bottom-left' : 'left';

      return {
        id: nextIdRef.current++,
        x: startX,
        y: startY,
        speed: diagonalSpeed + Math.random() * 0.15,
        character: randomChar,
        opacity: 0.15 + Math.random() * 0.4, // Random opacity between 0.15 and 0.55
        direction,
      };
    };

    const animate = (timestamp: number) => {
      // Spawn multiple characters at intervals for dense effect
      if (timestamp - lastSpawnTimeRef.current > spawnInterval) {
        // Spawn 2-3 characters at once
        const spawnCount = Math.floor(Math.random() * 2) + 2; // 2 or 3 characters
        for (let i = 0; i < spawnCount; i++) {
          charactersRef.current.push(createCharacter());
        }
        lastSpawnTimeRef.current = timestamp;
      }

      // Update character positions - exact 45-degree angle (or straight left)
      charactersRef.current = charactersRef.current.filter((char) => {
        if (char.direction === 'top-left') {
          // Move to top-left
          char.x -= char.speed;
          char.y -= char.speed;
          // Remove if off screen (top or left)
          return char.x > -10 && char.y > -20;
        } else if (char.direction === 'bottom-left') {
          // Move to bottom-left
          char.x -= char.speed;
          char.y += char.speed;
          // Remove if off screen (bottom or left)
          return char.x > -10 && char.y < 110;
        } else {
          // Move straight left
          char.x -= char.speed;
          // Remove if off screen (left)
          return char.x > -10;
        }
      });

      // Render characters
      if (container) {
        // Clear existing characters
        const existingChars = container.querySelectorAll('.flying-char');
        existingChars.forEach((el) => el.remove());

        // Create new character elements
        charactersRef.current.forEach((char) => {
          const element = document.createElement('pre');
          element.className = 'flying-char';
          element.textContent = char.character;
          element.style.cssText = `
            position: absolute;
            left: ${char.x}%;
            top: ${char.y}%;
            color: #00ff41;
            opacity: ${char.opacity};
            font-size: 10px;
            line-height: 1;
            pointer-events: none;
            white-space: pre;
            font-family: monospace;
            text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);
            transform: translate(-50%, -50%);
          `;
          container.appendChild(element);
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}
