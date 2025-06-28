import { cn } from "@/util/tw";

export default function Tile({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn("bg-white rounded-3xl overflow-hidden", className)}
      style={style}
    >
      {children}
    </div>
  );
}
