import { Link } from "react-router";
import logo from "~/assets/photo/logo-landscape.svg";
import Hero from "../main/Hero";


const Navbar = () => {
    return (
        <div>
            <div className="max-w-[1200px] mx-auto pt-8 ">
                <div className="flex items-center justify-between">
                    <div>
                        <img src={logo} alt="logo" className="w-28 " />
                    </div>
                    <div className="flex items-center justify-evenly bg-[#ffffffbf] backdrop-blur-2xl border border-[#c4adad] py-2 px-6 rounded-3xl text-sm font-medium
                    gap-5 ">
                        <div>Products</div>
                        <Link to='/'>Pricing</Link>
                        <Link to='/'>Docs</Link>
                        <div>Articles</div>
                        <Link to='/'>Community</Link>
                        <Link to='/'>Status</Link>
                    </div>
                    <div className="flex items-center justify-evenly bg-[#ffffffbf] backdrop-blur-2xl border border-[#c4adad] py-2 px-6 rounded-3xl text-sm font-medium
                    gap-5 ">
                        <div>
                            <Link to=''>Sign In</Link>
                        </div>
                        <div>
                            <Link to=''>Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
            <header><Hero /></header>
        </div>

    );
};

export default Navbar;