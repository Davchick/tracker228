import { Outlet } from "react-router-dom";
import Menu from "./Menu";

const Layout = () => {
  return (
    <div className="h-screen flex">
      <Menu/>
      <main className="w-full ml-72 px-16 pt-9">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
