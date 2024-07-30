import { ButtonProps } from "../button/type";
import { twMerge } from "tailwind-merge";

export function Button(props: ButtonProps) {
  const { children, className, ...rest } = props;

  return (
    <button
      className={twMerge(
        "rounded-[10px] p-2 bg-purple-2 w-full hover:bg-purple-1",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
