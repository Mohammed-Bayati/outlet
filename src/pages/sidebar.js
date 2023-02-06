import { Outlet, Link } from "react-router-dom";
import Types from "../pages/types";




const Sidebar = () => {
    return (
        <div className="d-flex flex-row">
        

            <nav class="navbar navbar-expand-lg d-flex flex-column navbar-light bg-dark">

                <a href="#" className="navbar-brand text-alight ">
                    <div className="display-5 font-weight-blod ">MAFQODAT</div>
                </a>
                <ul className="navbar-nav d-flex flex-column mt-5 w-100 ">
                    <li className="nav-item w-100">
                        <Link to="types" className="nav-link text-alght pl-4">TYPES</Link>
                    </li>
                    <li className="nav-item w-100">
                        <Link to="Post" className="nav-link text-alght pl-4">POST</Link>
                    </li>
                    <li className="nav-item w-100">
                        <Link to="/" className="nav-link text-alght pl-4">MEMBERS</Link>
                    </li>
                    <li className="nav-item w-100">
                        <Link to="/" className="nav-link text-alght pl-4">USERS</Link>
                    </li>
                    <li className="nav-item w-100">
                        <Link to="/" className="nav-link text-alght pl-4">POST COMMENTS</Link>
                    </li>


                </ul>
                <Link to="/login" class="btn " id="logOut" type="submit ">Logout
                </Link>
                

            </nav>
            <Outlet/>

        </div>
        
    )
}










export default Sidebar;