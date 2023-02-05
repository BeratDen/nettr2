import React from "react";

export const ModalCheck = ({ label, onChange, value }) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id="remember"
          type="checkbox"
          className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          onChange={onChange}
          value={value}
        />
      </div>

      <div className="text-sm ml-3">
        <label
          htmlFor="remember"
          className="font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      </div>
    </div>
  );
};
