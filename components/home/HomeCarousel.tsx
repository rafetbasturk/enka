"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";

const carouselImages = [
  {
    src: "/images/home/cnc-lathe-unsplash-sven.avif",
    alt: "CNC lathe turning a precision shaft",
  },
  {
    src: "/images/home/manufacturing-factory.avif",
    alt: "Industrial manufacturing and production line",
  },
  {
    src: "/images/home/cnc-machining-metal-zheng.avif",
    alt: "CNC machine cutting a piece of metal in precision machining",
  },
  {
    src: "/images/home/carousel-1.png",
    alt: "Modern CNC Workshop",
  },
  {
    src: "/images/home/carousel-2.png",
    alt: "Precision Milling",
  },
];

export function HomeCarousel() {
  const t = useTranslations("slides");
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const SLIDE_DURATION = 6000; // 6 seconds
  const UPDATE_INTERVAL = 50; // 50ms for smoother progress

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      setProgress(0);
    });
  }, [api]);

  // Unified Autoplay and Progress logic
  React.useEffect(() => {
    if (!api || isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 100 / (SLIDE_DURATION / UPDATE_INTERVAL);
        if (next >= 100) {
          api.scrollNext();
          return 0;
        }
        return next;
      });
    }, UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, [api, isPaused, current]);

  return (
    <div className="relative group">
      <Carousel
        setApi={setApi}
        className="w-full overflow-hidden rounded-3xl shadow-2xl"
        opts={{
          align: "start",
          loop: true,
          duration: 30,
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <CarouselContent className="ml-0">
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="pl-0 relative overflow-hidden">
              <div className="relative h-[60vh] lg:h-[75vh] w-full overflow-hidden">
                {/* Ken Burns Effect Wrapper */}
                <motion.div
                  initial={{ scale: 1 }}
                  animate={current === index ? { scale: 1.15 } : { scale: 1 }}
                  transition={{ duration: 7, ease: "linear" }}
                  className="absolute inset-0 z-0"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </motion.div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10" />

                {/* Glassmorphic Content Container */}
                <AnimatePresence mode="wait">
                  {current === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: "easeOut",
                      }}
                      className="absolute bottom-10 left-10 z-20 max-w-[80%]"
                    >
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
                        <motion.p
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          className="text-xl md:text-3xl font-bold text-white leading-tight whitespace-pre-line"
                        >
                          {t(`${index}.detail`)}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <CarouselPrevious className="relative translate-x-0 left-0 pointer-events-auto h-12 w-12 bg-white/20 hover:bg-white/40 border-white/30 text-white backdrop-blur-sm" />
          <CarouselNext className="relative translate-x-0 right-0 pointer-events-auto h-12 w-12 bg-white/20 hover:bg-white/40 border-white/30 text-white backdrop-blur-sm" />
        </div>

        {/* Progress Bar & Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
          <div className="flex gap-2">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  current === i ? "w-8 bg-white" : "w-2 bg-white/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Visual Progress Bar (Line) */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      </Carousel>
    </div>
  );
}
