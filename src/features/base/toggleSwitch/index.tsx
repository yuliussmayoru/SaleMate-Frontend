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
          <div className={`w-11 h-6 rounded-full shadow-inner transition-colors ${checked ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
          <div
            className={`absolute left-1 top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
              checked ? 'translate-x-5 bg-blue-500' : ''
            }`}
          ></div>
        </label>
        {label && <span className="text-gray-700">{label}</span>}
      </div>
    );
  };
  
  export default ToggleSwitch;