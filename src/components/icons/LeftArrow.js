import { useAtoms } from "../../recoil/hooks";

const LeftArrow = ({ onClick = () => {} }) => {
  const {
    state: { darkMode },
  } = useAtoms();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
      className={`w-8 ${
        darkMode ? "fill-bgLight" : "fill-bgDark"
      } hover:opacity-70 transition-opacity cursor-pointer`}
      onClick={onClick}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M10.75 50c0 18.266 13.129 34.562 31.007 38.383 8.933 1.909 18.432.623 26.516-3.636 7.778-4.099 14.066-10.819 17.629-18.859 3.707-8.363 4.353-17.964 1.825-26.754-2.438-8.48-7.789-15.999-14.972-21.118-15.017-10.703-36.11-9.272-49.567 3.32C15.301 28.715 10.75 39.198 10.75 50zm20.446-2.12 10.961-10.96c2.735-2.736 6.979 1.507 4.242 4.243l-5.506 5.505h25.458c1.816 0 3.332 1.517 3.332 3.333s-1.516 3.333-3.332 3.333H40.766l5.398 5.529c2.699 2.762-1.583 6.966-4.293 4.191l-10.7-10.958a2.998 2.998 0 0 1 .025-4.216z"
      />
    </svg>
  );
};

export default LeftArrow;
