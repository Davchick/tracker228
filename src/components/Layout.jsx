import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="container flex flex-col">
        {/* HEADER & MAIN */}
        <div className="flex-[1_0_auto]">
          {/* header */}
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      {/* FOOTER */}
      {/* footer */}
    </div>
  );
};

export default Layout;
