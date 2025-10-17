import { Link } from "react-router";
import logo from "~/assets/photo/logo-landscape.svg";


const Navbar = () => {
    return (
        <div className="max-w-[1200px] mx-auto ">
            <div className="flex items-center justify-between">
                <div>
                    <img src={logo} alt="logo" className="w-28 " />
                </div>
                <div className="flex items-center justify-evenly">
                    <div>Products</div>
                    <Link to='/'>Pricing</Link>
                    <Link to='/'>Docs</Link>
                    <div>Articles</div>
                    <Link to='/'>Community</Link>
                    <Link to='/'>Status</Link>
                </div>
                <div className="flex items-center justify-evenly">
                    <div>
                        <Link to=''>Sign In</Link>
                    </div>
                    <div>
                        <Link to=''>Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;