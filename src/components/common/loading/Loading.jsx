import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      className={`flex justify-center items-center fixed bottom-0 bg-gray-900 h-[100vh] w-[100vw] mx-auto z-50 `}
    >
      <HashLoader color="#00d9ff" speedMultiplier={2} size={80} />
    </div>
  );
};

export default Loading;
