import { cn } from "@/lib/utils";

interface FloatingBlobsProps {
  className?: string;
  variant?: "brand" | "soft";
}

/**
 * Decorative organic gradient shapes that float slowly in the background.
 * Purely presentational, hidden from assistive tech, CSS-transform only.
 */
export const FloatingBlobs = ({
  className,
  variant = "brand",
}: FloatingBlobsProps) => (
  <div
    aria-hidden="true"
    className={cn(
      "pointer-events-none absolute inset-0 overflow-hidden",
      className,
    )}
  >
    <div
      className={cn(
        "absolute -top-24 -left-16 h-72 w-72 rounded-[42%_58%_63%_37%/47%_38%_62%_53%] blur-3xl animate-float",
        variant === "brand" ? "bg-gradient-brand opacity-[0.18]" : "bg-primary/10",
      )}
    />
    <div
      className={cn(
        "absolute -bottom-28 -right-10 h-80 w-80 rounded-[58%_42%_38%_62%/42%_57%_43%_58%] blur-3xl animate-float-slow",
        variant === "brand" ? "bg-gradient-green opacity-[0.16]" : "bg-accent/10",
      )}
    />
    <div className="absolute top-1/3 right-1/4 h-48 w-48 rounded-[50%_50%_43%_57%/56%_44%_56%_44%] bg-gradient-brand opacity-[0.10] blur-3xl animate-float-delay" />
  </div>
);
