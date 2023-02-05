import { destroyModal } from "../../../utils";

export const Header = ({ title, close }) => {
  return (
    <header className="h-14 flex items-center justify-between px-4 border-b border-gray-300 text-sm font-medium">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
        {title}
      </h3>
      <div className="flex justify-center p-2">
        <button
          onClick={destroyModal}
          className="w-9 h-9 rounded hover:bg-gray-300 felx items-center justify-center font-bold"
        >
          X
        </button>
      </div>
    </header>
  );
};
