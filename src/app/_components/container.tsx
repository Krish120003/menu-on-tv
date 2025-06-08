"use client";

import { useEffect, useRef, useState } from "react";

const DEBUG_MODE = false;

export default function Container({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      setContainerSize({
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      });
    }
  }, []);
  return (
    <div
      className={`${className} flex flex-col gap-4 relative`}
      ref={ref}
      style={{
        backgroundColor: DEBUG_MODE
          ? `rgb(${200 + Math.floor(Math.random() * 56)}, ${
              200 + Math.floor(Math.random() * 56)
            }, ${200 + Math.floor(Math.random() * 56)})`
          : "transparent",
      }}
    >
      {DEBUG_MODE && (
        <div className="absolute top-0 left-0 w-full h-full bg-red-500 opacity-25">
          {containerSize.width}x{containerSize.height}
        </div>
      )}
      {children}
    </div>
  );
}
