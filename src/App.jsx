import { BrowserRouter, Route, Routes } from "react-router-dom";
/* import PrivateRoute from "./components/PrivateRoute"; */
import Layout from "./components/Layout";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import InBox from "./pages/InBox";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route index element={<Login />} />
        <Route path="" element={<Layout />}>
          {/* <Route element={<PrivateRoute />}> */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/inbox" element={<InBox />} />
          {/* </Route> */}

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
