import { ButtonProps } from "../button/type";
import { twMerge } from "tailwind-merge";

export function Button(props: ButtonProps) {
  const { children, className, ...rest } = props;

  return (
    <button
      className={twMerge(
        "rounded-[10px] py-3 bg-orange-2 w-full hover:bg-orange-1 font-bold",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
  