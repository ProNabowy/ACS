import "./index.css";
export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[100vh] bg-[#1e3d81] fixed left-0 top-0 w-full z-[1000]">
      <div className="loader"></div>
    </div>
  );
}
