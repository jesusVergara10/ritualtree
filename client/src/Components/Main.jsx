import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="flex-1 w-screen h-screen bg-rtgrey4">
      <Outlet />
    </main>
  );
};

export default Main;
