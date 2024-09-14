import React from "react";
import { ToggleSwitchProps } from "./type";

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange, label }) => {
    return (
      <div className="flex items-center space-x-3">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="sr-only"
            placeholder="toggleswitch"
          />
          <div className={`w-20 h-10 rounded-xl shadow-inner transition-colors ${checked ? 'bg-green-500' : 'bg-red-500'}`}>
            <span
              className={`absolute left-2 top-1/2 transition transform ease-in-out duration-150 -translate-y-1/2 text-white font-bold ${
                checked ? 'text-green-100' : 'left-[2.8rem] text-red-100'
              }`}
            >
              {checked ? 'ON' : 'OFF'}
            </span>
          </div>
          <div
            className={`absolute rounded-xl border-2  w-10 h-10 bg-white transition-transform ${
              checked ? 'translate-x-10 bg-blue-500' : ''
            }`}
          ></div>
        </label>
        {label && <span className="text-gray-700">{label}</span>}
      </div>
    );
  };
  
  export default ToggleSwitch;