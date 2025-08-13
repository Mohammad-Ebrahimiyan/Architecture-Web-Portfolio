import React from "react";
import clsx from "clsx";

export default function Button({
  children,
  onClick,
  className,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "rounded-md p-2 focus:outline-none transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
