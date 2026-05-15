import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ThermodynamicGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Grid density. Lower = chunky, Higher = smooth.
   * Default: 25
   */
  resolution?: number;
  /**
   * Cooling rate (0 to 1). Higher = trails fade faster.
   * Default: 0.98
   */
  coolingFactor?: number;
  /**
   * Clip mode for masking the grid
   */
  clipMode?: 'inside-circle' | 'outside-circle' | 'none';
  /**
   * Center position for circular clip (percentage of viewport)
   */
  clipCenter?: { x: number; y: number };
  /**
   * Radius for circular clip (percentage of viewport width)
   */
  clipRadius?: number;
}

const ThermodynamicGrid = ({
  className,
  resolution = 25,
  coolingFactor = 0.98,
  clipMode = 'none',
  clipCenter = { x: 50, y: 50 },
  clipRadius = 25,
  style,
  ...props
}: ThermodynamicGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Simulation State
    let grid: Float32Array;
    let cols = 0;
    let rows = 0;
    let width = 0;
    let height = 0;

    // Mouse State
    const mouse = { x: -1000, y: -1000, prevX: -1000, prevY: -1000, active: false };

    // --- MATRIX GREEN COLOR PALETTE ---
    // Maps 0.0-1.0 intensity to RGB (Matrix green theme)
    const getMatrixColor = (t: number) => {
      // 0.0 = Very dark green/black (#0a0a0a)
      // 0.3 = Dark green (#003300)
      // 0.6 = Matrix green (#00ff41)
      // 0.9 = Bright green/white (#ccffcc)

      // Matrix green base: #00ff41 (0, 255, 65)
      const r = Math.min(255, Math.max(0, t * 100)); // Low red
      const g = Math.min(255, Math.max(65, t * 255 + 65 * (1 - t))); // High green
      const b = Math.min(100, Math.max(0, t * 50)); // Very low blue

      return `rgb(${r}, ${g}, ${b})`;
    };

    const resize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;

      cols = Math.ceil(width / resolution);
      rows = Math.ceil(height / resolution);
      grid = new Float32Array(cols * rows).fill(0);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      // Check if mouse is within canvas bounds
      if (mouse.x >= 0 && mouse.x <= width && mouse.y >= 0 && mouse.y <= height) {
        mouse.active = true;
      } else {
        mouse.active = false;
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    // --- PHYSICS LOOP ---
    const update = () => {
      // 1. INJECT HEAT (Brush)
      if (mouse.active) {
        const dx = mouse.x - mouse.prevX;
        const dy = mouse.y - mouse.prevY;
        const dist = Math.sqrt(dx*dx + dy*dy);
        const steps = Math.ceil(dist / (resolution / 2));

        for (let s = 0; s <= steps; s++) {
            const t = steps > 0 ? s / steps : 0;
            const x = mouse.prevX + dx * t;
            const y = mouse.prevY + dy * t;

            const col = Math.floor(x / resolution);
            const row = Math.floor(y / resolution);

            const radius = 2;
            for (let i = -radius; i <= radius; i++) {
                for (let j = -radius; j <= radius; j++) {
                    const c = col + i;
                    const r = row + j;
                    if (c >= 0 && c < cols && r >= 0 && r < rows) {
                        const idx = c + r * cols;
                        const d = Math.sqrt(i*i + j*j);
                        if (d <= radius) {
                            grid[idx] = Math.min(1.0, grid[idx] + 0.3 * (1 - d/radius));
                        }
                    }
                }
            }
        }
      }

      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;

      // 2. RENDER & DIFFUSE
      // Clear canvas with transparency
      ctx.clearRect(0, 0, width, height);

      // Apply clipping if needed
      if (clipMode === 'inside-circle') {
        ctx.save();
        ctx.beginPath();
        const cx = width * (clipCenter.x / 100);
        const cy = height * (clipCenter.y / 100);
        const radius = width * (clipRadius / 100);
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.clip();

        // Fill only the clipped circle area with grid background
        ctx.fillStyle = "#0a0a0a";
        ctx.fillRect(0, 0, width, height);
      } else if (clipMode === 'outside-circle') {
        ctx.save();
        const cx = width * (clipCenter.x / 100);
        const cy = height * (clipCenter.y / 100);
        const radius = width * (clipRadius / 100);
        ctx.rect(0, 0, width, height);
        ctx.arc(cx, cy, radius, 0, Math.PI * 2, true); // Counter-clockwise for inverse
        ctx.clip();

        // Fill everything except the circle with grid background
        ctx.fillStyle = "#0a0a0a";
        ctx.fillRect(0, 0, width, height);
      } else if (clipMode === 'none') {
        // No clipping - fill entire canvas with grid background
        ctx.fillStyle = "#0a0a0a";
        ctx.fillRect(0, 0, width, height);
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = c + r * cols;
          let temp = grid[idx];

          // Cooling
          grid[idx] *= coolingFactor;

          // VISUALIZATION
          if (temp > 0.05) {
             const x = c * resolution;
             const y = r * resolution;

             ctx.fillStyle = getMatrixColor(temp);

             const size = resolution * (0.8 + temp * 0.5);
             const offset = (resolution - size) / 2;

             ctx.beginPath();
             ctx.rect(x + offset, y + offset, size, size);
             ctx.fill();
          } else {
             // Subtle grid for cold areas
             if (c % 2 === 0 && r % 2 === 0) {
                 const x = c * resolution;
                 const y = r * resolution;
                 ctx.fillStyle = "#1a1a1a"; // Slightly lighter than bg
                 ctx.fillRect(x + resolution/2 - 1, y + resolution/2 - 1, 2, 2);
             }
          }
        }
      }

      // Restore context if clipping was applied
      if (clipMode !== 'none') {
        ctx.restore();
      }

      requestAnimationFrame(update);
    };

    window.addEventListener("resize", resize);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    resize();
    update();

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [resolution, coolingFactor, clipMode, clipCenter, clipRadius]);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden", className)}
      style={{ ...style, pointerEvents: 'none' }}
      {...props}
    >
      <canvas ref={canvasRef} className="block w-full h-full" style={{ pointerEvents: 'none' }} />
    </div>
  );
};

export default ThermodynamicGrid;
