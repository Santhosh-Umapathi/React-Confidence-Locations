const Icon = ({ css = "", onClick = () => {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 511.999 511.999"
    xmlSpace="preserve"
    className={`${css}`}
    onClick={onClick}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="m299.33 384.231-.39-.3-85.779-.01-.39.3c-67.359 7.07-116.769 30.26-116.769 57.779 0 33.14 71.629 60 159.998 60s159.998-26.86 159.998-59.999c0-27.51-49.359-50.69-116.668-57.77z"
      fill="#85e374"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M257.2 10.005c88.369.67 159.458 72.839 158.798 161.198-.56 74.829-45.08 118.899-117.059 212.728-13.4 17.46-27.75 36.64-42.94 58.069-15.15-21.45-29.47-40.63-42.84-58.079-72.898-95.079-117.728-138.458-117.158-215.118.67-88.369 72.84-159.458 161.199-158.798zm58.799 160.448c.25-33.14-26.41-60.199-59.549-60.449s-60.199 26.41-60.449 59.549 26.41 60.199 59.549 60.449c33.14.251 60.199-26.409 60.449-59.549z"
      fill="#fd6244"
      className="animate-bounce"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M256.83 60.004c5.52.04 10.03-4.4 10.07-9.92s-4.4-10.03-9.92-10.08c-5.53-.04-10.04 4.41-10.08 9.93-.04 5.52 4.4 10.03 9.93 10.07zM256.525 100.004c-38.611-.274-70.232 30.875-70.524 69.474-.291 38.597 30.875 70.233 69.474 70.524l.536.002c38.353 0 69.698-31.056 69.988-69.476.291-38.595-30.874-70.233-69.474-70.524zm-.516 120.001-.384-.002c-27.571-.208-49.833-22.806-49.625-50.375.207-27.445 22.595-49.627 49.991-49.627l.384.002c27.571.208 49.833 22.806 49.625 50.375-.208 27.445-22.595 49.627-49.991 49.627zM299.631 47.589c-5.202-1.846-10.921.879-12.767 6.085-1.845 5.206.88 10.921 6.085 12.767 44.047 15.611 73.402 57.562 73.05 104.389-.041 5.522 4.402 10.033 9.925 10.075h.077c5.486 0 9.956-4.428 9.998-9.925.416-55.347-34.293-104.934-86.368-123.391z"
      className="animate-bounce"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M425.998 171.278C426.702 77.035 350.22 0 255.984 0 162.848 0 86.71 75.428 86.002 168.728c-.572 76.935 41.767 121.519 108.739 207.7C128.116 386.384 86.002 411.401 86.002 442c0 20.497 18.946 38.89 53.349 51.79 31.313 11.742 72.74 18.209 116.649 18.209s85.336-6.467 116.649-18.209c34.403-12.901 53.349-31.294 53.349-51.791 0-30.583-42.076-55.593-108.641-65.557 66.514-85.615 108.08-130.259 108.641-205.164zm-20 270.723c0 23.603-64.147 50-149.999 50S106 465.604 106 442.001c0-17.504 38.348-39.616 102.826-47.273 14.253 18.701 26.749 35.691 39.005 53.043a9.998 9.998 0 0 0 8.159 4.23h.009a10 10 0 0 0 8.158-4.217c12.14-17.126 24.978-34.535 39.109-53.045 64.419 7.664 102.732 29.769 102.732 47.262zm-114.99-64.159c-12.553 16.356-24.081 31.82-34.993 46.947-10.88-15.136-22.178-30.323-34.919-46.953-73.286-95.583-115.637-136.108-115.095-208.957C106.625 86.55 173.8 20 255.986 20c83.159 0 150.634 67.988 150.013 151.129-.533 71.134-44.614 114.97-114.991 206.713z"
      className="animate-bounce"
    />
  </svg>
);

export default Icon;
