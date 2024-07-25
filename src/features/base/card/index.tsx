import { twMerge } from "tailwind-merge";
import { CardProps } from "./type";

export function Card(props: CardProps) {
  const { children, className, ...rest } = props;
  return (
    <div
      className={twMerge(
        "border-2 rounded-sm m-1 p-4 max-w-sm bg-white",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
