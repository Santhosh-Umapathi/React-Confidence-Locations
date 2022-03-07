//Constants
import { LINKEDIN_URL } from "../../constants";

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={`w-4 h-4 md:w-5 md:h-5 hover:opacity-70 transition-opacity cursor-pointer fill-linkedIn`}
    onClick={() => window.open(LINKEDIN_URL)}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
    />
  </svg>
);

export default LinkedinIcon;