import { type RefObject, useEffect, useRef, useState } from 'react';

interface DrawingRefValue {
  isDrawing: boolean;
  lastX: number;
  lastY: number;
}

const COLORS = [
  '#000000',
  '#EF4444',
  '#F97316',
  '#EAB308',
  '#22C55E',
  '#3B82F6',
  '#8B5CF6',
  '#EC4899',
  '#78716C',
  '#FFFFFF',
];

const Canvas = () => {
  const canvasRef: RefObject<HTMLCanvasElement | null> = useRef(null);
  const [activeColor, setActiveColor] = useState(COLORS[0]);
  const drawingRef: RefObject<DrawingRefValue> = useRef({ isDrawing: false, lastX: 0, lastY: 0 });

  /**
   * Canvas setup
   */
  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current!;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

    const resize = () => {
      const parent = canvas.parentElement!;
      const size = Math.min(parent.clientWidth, parent.clientHeight);
      canvas.width = size;
      canvas.height = size;
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = 8;
      ctx.strokeStyle = activeColor;
    };

    resize();

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [activeColor]);

  /**
   * Mouse and touch events handler
   */
  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current!;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

    const getCoords = (e: TouchEvent | MouseEvent): { x: number; y: number } => {
      const rect = canvas.getBoundingClientRect();

      if (e instanceof TouchEvent && e.touches.length) {
        return {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      } else if (e instanceof MouseEvent) {
        return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }

      return { x: 0, y: 0 };
    };

    const start = (e: MouseEvent | TouchEvent): void => {
      e.preventDefault();
      drawingRef.current.isDrawing = true;
      const { x, y } = getCoords(e);
      drawingRef.current.lastX = x;
      drawingRef.current.lastY = y;
    };
  }, [activeColor]);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col transition-colors">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">Doodle Area</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Choose a color:</label>

        <div className="flex flex-wrap gap-3 justify-center">
          {COLORS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActiveColor(c)}
              style={{ backgroundColor: c }}
              className={`w-8 h-8 rounded-full border ${c === '#FFFFFF' ? 'border-gray-400' : 'border-gray-200'}
               ${c === activeColor ? 'ring-2 ring-indigo-600 scale-110' : ''}`}
            />
          ))}
        </div>
      </div>

      <div
        className="relative w-full aspect-square border-2 border-dashed border-gray-300 rounded-xl
       overflow-hidden touch-none bg-white"
      >
        <canvas ref={canvasRef} className="absolute inset-0"></canvas>
      </div>
    </div>
  );
};

export default Canvas;
