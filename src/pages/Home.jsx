import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex gap-5">
      <Link to="/register">REGISTER PAGE</Link>
      <Link to="/login">LOGIN PAGE</Link>
    </div>
  );
};

export default Home;
