import React, { ReactNode, useEffect } from 'react';
import './CRTWrapper.scss';

export interface CRTWrapperProps {
    children: ReactNode
}

const CRTWrapper: React.FunctionComponent<CRTWrapperProps> = ({ children }) => {
  useEffect(() => {
    const main = document.querySelector('main');
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const text = document.querySelector('.text');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let frame = 0;

    canvas.width = window.innerWidth / 3;
    canvas.height = (window.innerWidth * 0.5625) / 3;

    const snow = (context: CanvasRenderingContext2D): void => {
      const { width } = context.canvas;
      const heigth = context.canvas.height;
      const d = context.createImageData(width, heigth);
      const b = new Uint32Array(d.data.buffer);
      const len = b.length;

      for (let i = 0; i < len; i++) {
        b[i] = ((255 * Math.random()) | 0) << 24;
      }

      context.putImageData(d, 0, 0);
    };

    const animate = (): void => {
      snow(ctx!);
      frame = requestAnimationFrame(animate);
    };

    for (let i = 0; i < 4; i++) {
      const span = text!.firstElementChild!.cloneNode(true);
            text!.appendChild(span);
    }

    setTimeout(() => {
              main!.classList.add('on');
              main!.classList.remove('off');

              animate();
    }, 1000);
  }, []);

  return (
    <main className="scanlines">
      <div className="screen">
        <canvas id="canvas" className="picture" />
        <div className="overlay">
          <div className="text">
            <span>CAT GAME</span>
          </div>
          <div className="menu">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default CRTWrapper;
