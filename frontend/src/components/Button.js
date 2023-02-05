export const Button = ({
  onClick,
  children,
  bgColor = "bg-indigo-",
  colorNumber = 600,
}) => {
  return (
    <button
      className={`${bgColor}${colorNumber} text-white py-2 px-6 my-10 rounded hover:bg-indigo-${
        colorNumber + 200
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
