import { ScaleLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="absolute w-full h-full top-0 left-0 bg-light-base z-[999] flex items-center justify-center">
      <ScaleLoader />
    </div>
  );
}
