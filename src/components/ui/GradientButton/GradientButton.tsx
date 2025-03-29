import clsx from "clsx";
import type { FC } from "react";
import { GradientButtonProps } from "./interface";

export const GradientButton: FC<GradientButtonProps> = ({
  startColor = "#509aff",
  endColor = "#bd61ff",
  children,
  className = "",
  disabled = false,
  loading = false,
  onClick,
}) => {
  // 构建渐变背景样式
  const gradientStyle = {
    background: `linear-gradient(108deg, ${startColor} -6.73%, ${endColor} 118.75%)`,
    opacity: disabled ? ".45" : "1",
  };

  return (
    <button
      className={clsx("btn h-[50px] px-[68px] rounded-xl text-lg font-medium normal-case w-full", {
        disabled,
        [className]: className,
      })}
      style={gradientStyle}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};
