import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees */
  max?: number;
}

/**
 * Subtle 3D tilt on pointer move. Uses only CSS transforms and is
 * automatically disabled for users with prefers-reduced-motion.
 */
export const TiltCard = ({ children, className, max = 6 }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>("");

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-6px)`,
    );
  };

  const reset = () => setTransform("");

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ transform, transition: "transform 300ms ease-out" }}
      className={cn("will-change-transform motion-reduce:transform-none", className)}
    >
      {children}
    </div>
  );
};
