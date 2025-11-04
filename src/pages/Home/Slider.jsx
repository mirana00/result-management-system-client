import { useCallback, useEffect, useState } from "react";

import p1 from "../../assets/slider/p1.jpg";
import p2 from "../../assets/slider/p2.jpg";
import p3 from "../../assets/slider/p3.jpg";
import p4 from "../../assets/slider/p4.jpg";

export const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [p1,p2,p3,p4];
  const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1), [carouselImages.length]);

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 4000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="h-60 w-full md:h-[470px] lg:h-[540px] relative overflow-hidden">
        {/* arrow left */}
        <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
          {carouselImages.map((_, inx) => (
            <button key={_} onClick={() => setCurrentSlider(inx)} className={`rounded-full duration-500 bg-white ${currentSlider === inx ? "w-8" : "wz-2"} h-2`}></button>
          ))}
        </div>
        {/* Carousel container */}
        <div className="ease-linear duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)`}}>
          {/* sliders */}
          {carouselImages.map((slide, inx) => (
            <img key={slide} src={slide} className="min-w-full  h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover" alt={`Slider - ${inx + 1}`}/>
          ))}
        </div>
    </div>
  );
};
