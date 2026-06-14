import { cn } from "@/utils/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-3xl",
        align === "left" && "text-left max-w-2xl",
        className,
      )}
    >
      {badge && (
        <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full border border-secondary/30 bg-secondary/10 text-primary">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-gray-400 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
