import { ButtonProps } from "../button/type";
import { twMerge } from "tailwind-merge";

export function Button(props: ButtonProps) {
  const { children, className, ...rest } = props;

  return (
    <button
      className={twMerge(
        "rounded-[10px] py-3 bg-orange-2 w-full hover:bg-orange-1 font-semibold text-white",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function DeleteButton(props: ButtonProps) {
  const { children, className, ...rest } = props;

  return (
    <button
      className={twMerge(
        "rounded-[10px] py-3 bg-red-500 w-full hover:bg-red-600 font-semibold text-white",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function CancelButton(props: ButtonProps) {
  const { children, className, ...rest } = props;

  return (
    <button
      className={twMerge(
        "rounded-[10px] py-3 bg-white border-2 font-semibold w-full hover:bg-orange-100 border-orange-2 text-orange-2 ",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}