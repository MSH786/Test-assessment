import { SPINNER, SPINNER_WITH_COLOUR } from "../../iconsPath/path";

const Loader = () => {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="mr-2 w-8 h-8 text-gray-200 mt-8 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={SPINNER} fill="currentColor" />
        <path d={SPINNER_WITH_COLOUR} fill="currentFill" />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
