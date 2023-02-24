import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="flex-1 w-full h-4/5 p-20">
      <Outlet />
    </main>
  );
};

export default Main;
