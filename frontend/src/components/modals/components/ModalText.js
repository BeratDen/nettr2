export const ModalTextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
