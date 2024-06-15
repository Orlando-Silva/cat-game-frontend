import { useState } from "react";

export const useCatSlideShow = () : number => {
    const [currentSlide, setCurrentSlide] = useState<number>(1);

    setTimeout(() => {
      if(currentSlide === 6) {
        setCurrentSlide(1)
        return;
      }

      setCurrentSlide(currentSlide + 1);
    }, 2000);

    return currentSlide;
} 