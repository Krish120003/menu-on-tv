"use client";

import { cn } from "@/util/tw";
import { useState, useEffect } from "react";
import cron from "cron-parser";

interface TileAnimatorProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  cronExpression?: string; // e.g., "*/20 * * * * *" for every 20 seconds
}

function TileAnimator({
  children,
  className,
  cronExpression = "*/20 * * * * *",
}: TileAnimatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!children) return;

    // Don't animate if there's only one child or children is not an array
    if (!Array.isArray(children) || children.length <= 1) return;

    const scheduleNextAnimation = () => {
      try {
        const interval = cron.parse(cronExpression);
        const nextDate = interval.next().toDate();
        const now = new Date();
        const msUntilNext = nextDate.getTime() - now.getTime();

        return setTimeout(() => {
          setIsVisible(false);

          setTimeout(() => {
            setCurrentIndex(
              (prevIndex) =>
                (prevIndex + 1) %
                (Array.isArray(children) ? children.length : 1)
            );
            setIsVisible(true);
          }, 300);

          // Schedule the next animation
          scheduleNextAnimation();
        }, msUntilNext);
      } catch (error) {
        console.error("Invalid cron expression:", cronExpression, error);
        // Fallback to 20-second interval if cron parsing fails
        return setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            setCurrentIndex(
              (prevIndex) =>
                (prevIndex + 1) %
                (Array.isArray(children) ? children.length : 1)
            );
            setIsVisible(true);
          }, 300);
          scheduleNextAnimation();
        }, 20000);
      }
    };

    const timeoutId = scheduleNextAnimation();

    return () => clearTimeout(timeoutId);
  }, [children, cronExpression]);

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
