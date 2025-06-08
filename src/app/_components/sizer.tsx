"use client";

import { useEffect, useRef, useState } from "react";

function Sizer() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (ref.current) {
      setSize({
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      });
    }
  }, []);

  return (
    <div
      className="fixed w-screen h-screen bg-red-500 flex items-center justify-center text-4xl font-bold"
      ref={ref}
    >
      {size.width}x{size.height}
    </div>
  );
}

export default Sizer;
