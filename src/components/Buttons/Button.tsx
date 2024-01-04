import Image from "next/image";
import React from "react";
import "@/styles/global.scss";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  title: string;
  icon?: string;
  variant: string;
  size?: "sm" | "md" | "lg";
  styles?: React.CSSProperties;
  onClick?: () => void;
};

const Button = ({
  type = "button",
  title,
  icon,
  variant,
  size = "md",
  styles,
  onClick,
}: ButtonProps) => {
  // Define styles based on the size prop
  let btnSize = "";
  switch (size) {
    case "sm":
      btnSize = "sm";
      break;
    case "md":
      btnSize = "md";
      break;
    case "lg":
      btnSize = "lg";
      break;
    default:
      btnSize = "md";
  }

  // Merge custom styles with default styles
  const mergedStyles: React.CSSProperties = {
    ...styles,
    // Add default styles here
  };

  return (
    <button
      type={type}
      className={`button ${variant} ${btnSize}`}
      style={mergedStyles}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
