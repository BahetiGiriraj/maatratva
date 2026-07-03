import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export default function SectionLabel({
  children,
  className,
  centered = false,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 mb-4",
        centered && "justify-center",
        className
      )}
    >
      <span className="block w-6 h-px bg-[#D4AF37]" />
      <span
        className="text-xs font-medium tracking-[0.18em] uppercase font-body"
        style={{ color: "#D4AF37" }}
      >
        {children}
      </span>
      <span className="block w-6 h-px bg-[#D4AF37]" />
    </div>
  );
}
