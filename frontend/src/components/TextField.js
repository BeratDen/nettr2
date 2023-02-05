export const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className="flex flex-col ">
      <label className="mb-2 text-base text-gray-800">{label}</label>
      <br />
      <input
        className="opacity-100 bg-transparent border-b 
        border-gega-red focus:outline-none w-24 lg:w-44 transition duration-500"
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
