import Image from "next/image";
import { SITE_NAME, SITE_LOGO } from "@/data/site";
import { cn } from "@/utils/utils";

interface LogoProps {
  showName?: boolean;
  size?: "sm" | "md" | "lg";
  theme?: "dark" | "light";
  className?: string;
}

const SIZES = {
  sm: { img: 32, text: "text-lg" },
  md: { img: 40, text: "text-xl" },
  lg: { img: 52, text: "text-2xl" },
};

export default function Logo({
  showName = true,
  size = "md",
  theme = "dark",
  className,
}: LogoProps) {
  const s = SIZES[size];

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image
        src={SITE_LOGO}
        alt={`${SITE_NAME} logo`}
        width={s.img}
        height={s.img}
        className="rounded-lg object-contain"
        priority={size === "md"}
      />
      {showName && (
        <span
          className={cn(
            "font-bold tracking-tight font-display",
            s.text,
            theme === "dark" ? "text-white" : "text-gray-900",
          )}
        >
          {SITE_NAME}
        </span>
      )}
    </div>
  );
}
