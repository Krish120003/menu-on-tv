"use client";

import { cn } from "@/util/tw";
import { useState, useEffect } from "react";

interface TileAnimatorProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  every?: number; // seconds between switches
  initialDelay?: number; // seconds before first switch
}

function TileAnimator({
  children,
  className,
  every = 20,
  initialDelay = 0,
}: TileAnimatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!children) return;
    if (!Array.isArray(children) || children.length <= 1) return;

    let intervalId: NodeJS.Timeout | null = null;
    let initialTimeoutId: NodeJS.Timeout | null = null;
    let animTimeoutId: NodeJS.Timeout | null = null;

    const animate = () => {
      setIsVisible(false);
      animTimeoutId = setTimeout(() => {
        setCurrentIndex(
          (prevIndex) =>
            (prevIndex + 1) % (Array.isArray(children) ? children.length : 1)
        );
        setIsVisible(true);
      }, 300);
    };

    initialTimeoutId = setTimeout(() => {
      animate();
      intervalId = setInterval(animate, every * 1000);
    }, initialDelay * 1000);

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (initialTimeoutId) clearTimeout(initialTimeoutId);
      if (animTimeoutId) clearTimeout(animTimeoutId);
    };
  }, [children, every, initialDelay]);

  if (!children) {
    return null;
  }

  return (
    <div className={cn("relative", className)}>
      <div
        className={`transition-all duration-600 ease-in-out w-full h-full ${
          isVisible
            ? "opacity-100 transform translate-y-0 scale-100"
            : "opacity-0 transform translate-y-4 scale-95"
        }`}
      >
        {Array.isArray(children) ? children[currentIndex] : children}
      </div>
    </div>
  );
}

export default TileAnimator;
