import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center">
        <h1 className=" mt-5">Home</h1>
        <Link to="/login" className="btn text-white bg-dark mt-4 "> Login Here </Link>
    </div>
  )
};



export default Home;