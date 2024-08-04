import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link path="/register">REGISTER PAGE</Link>
      <Link path="/login">LOGIN PAGE</Link>
    </div>
  );
};

export default Home;
