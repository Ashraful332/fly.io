import { Link } from "react-router";


const Navbar = () => {
    return (
        <div>
            <div>
                <div>
                    <img src="" alt="logo" />
                </div>
                <div>
                    <div>Products</div>
                    <Link to='/'>Pricing</Link>
                    <Link to='/'>Docs</Link>
                    <div>Articles</div>
                    <Link to='/'>Community</Link>
                    <Link to='/'>Status</Link>
                </div>
                <div>
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