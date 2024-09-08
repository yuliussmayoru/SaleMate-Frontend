import { twMerge } from "tailwind-merge";
import { InputProps } from "./type";
import React, { useState } from "react";

export function Input(props: InputProps) {
  const { inputClassName, containerClassName, labelClassName, label, inputContainerClassName, rightNode, rightNodeClick, ...rest } =
    props;

  return (
    <div className={twMerge("space-y-1", containerClassName)}>
      {label && <p className={twMerge("text-sm text-gray-600", labelClassName)}>{label}</p>}

      <div className={twMerge("flex items-center justify-between border border-slate-400 p-2 rounded-md gap-2", inputContainerClassName)}>
        <input {...rest} className={twMerge("w-full bg-inherit outline-none ring-0 grow-1 focus:ring-0 focus:outline-none border-none focus:border-none", inputClassName)} />

        {rightNode && (
          <button type="button" className=" bg-inherit object-fit w-10 overflow-hidden outline-none ring-0 hover:outline-none hover:ring-0 hover:border-0 focus:outline-none focus:ring-0 focus:border-0" onClick={rightNodeClick}>{rightNode}</button>
        )}
      </div>
    </div>
  );
}


export function InputValue(props: InputProps) {
  const { inputClassName, containerClassName, labelClassName, label, inputContainerClassName, ...rest } =
    props;

    const [value, setValue] = useState<number>(0)

    const increment = () => setValue((prev) => prev + 1)
    const decrement = () => setValue((prev) => Math.max(prev - 1, 0))

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(e.target.value,10);
      if (!isNaN(newValue)) {
        setValue(newValue);
      }
    };

    return (
      <div className="flex flex-col items-center">
      {label && <label className="mb-2 text-gray-700">{label}</label>}
      <div className="flex items-center">
        <button
          type="button"
          onClick={decrement}
          className="px-3 py-1 bg-gray-300 text-gray-700 rounded-l"
        >
          -
        </button>
        <input
          type="number"
          className="w-16 text-center border-t border-b border-gray-300 focus:outline-none"
          value={value}
          onChange={handleInputChange}
          {...rest}
        />
        <button
          type="button"
          onClick={increment}
          className="px-3 py-1 bg-gray-300 text-gray-700 rounded-r"
        >
          +
        </button>
      </div>
    </div>
    )
}