"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DecorativeBlobProps {
  className?: string;
  color?: "mauve" | "blush" | "gold" | "ivory";
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
  delay?: number;
}

const colorMap = {
  mauve: "bg-[#642244]/10",
  blush: "bg-[#E9D8D3]/60",
  gold: "bg-[#D4AF37]/10",
  ivory: "bg-[#FAF7F4]/80",
};

const sizeMap = {
  sm: "w-32 h-32",
  md: "w-56 h-56",
  lg: "w-80 h-80",
  xl: "w-[28rem] h-[28rem]",
};

export default function DecorativeBlob({
  className,
  color = "blush",
  size = "lg",
  animate = true,
  delay = 0,
}: DecorativeBlobProps) {
  return (
    <motion.div
      className={cn(
        "rounded-[60%_40%_70%_30%/50%_60%_40%_50%] blur-3xl pointer-events-none select-none",
        colorMap[color],
        sizeMap[size],
        className
      )}
      animate={
        animate
          ? {
              borderRadius: [
                "60% 40% 70% 30% / 50% 60% 40% 50%",
                "40% 60% 30% 70% / 60% 40% 60% 40%",
                "50% 50% 60% 40% / 40% 60% 50% 50%",
                "60% 40% 70% 30% / 50% 60% 40% 50%",
              ],
            }
          : {}
      }
      transition={
        animate
          ? {
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }
          : {}
      }
    />
  );
}
