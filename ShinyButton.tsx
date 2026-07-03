import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";

interface ShinyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
}

export function ShinyButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: ShinyButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    btn.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-[var(--brand-blue)] to-[oklch(0.55_0.22_280)] text-primary-foreground shadow-[var(--shadow-glow)]",
    secondary:
      "bg-gradient-to-r from-[var(--brand-red)] to-[oklch(0.65_0.24_15)] text-primary-foreground shadow-[0_20px_60px_-15px_oklch(0.6_0.24_25/0.4)]",
    ghost:
      "bg-foreground/5 text-foreground border border-foreground/10 backdrop-blur",
  } as const;

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      className={`btn-shine group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${className}`}
      {...props}
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(180px circle at var(--mx) var(--my), oklch(1 0 0 / 0.25), transparent 60%)",
        }}
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
