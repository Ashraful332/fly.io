import { Link } from "react-router";
import logo from "~/assets/photo/logo-landscape.svg";
import Hero from "../main/Hero";


const Navbar = () => {
    return (
        <div className="relative bg-gradient-to-t to-pink-400/30 from-0% ">
            <div className="max-w-[1200px] mx-auto pt-6 z-20 ">
                <div className="flex items-center justify-between">
                    <div>
                        <img src={logo} alt="logo" className="w-28 " />
                    </div>
                    <div className="flex items-center justify-evenly bg-white border border-black/10 py-3 px-6 rounded-3xl text-sm font-medium
                    gap-5 inset-shadow-2xs ">
                        <div>Products</div>
                        <Link to='/'>Pricing</Link>
                        <Link to='/'>Docs</Link>
                        <div>Articles</div>
                        <Link to='/'>Community</Link>
                        <Link to='/'>Status</Link>
                    </div>
                    <div className="flex items-center justify-evenly bg-white border border-black/10 py-1 px-1 rounded-3xl text-sm font-medium 
                    gap-1">
                        <div className="bg-white py-[6px] px-3 font-semibold rounded-l-3xl rounded-r-xl inset-shadow-sm inset-shadow-[#d4c4c4] ">
                            <Link to=''>Sign In</Link>
                        </div>
                        <div className="bg-[var(--blue)] py-[6px] px-3 text-white font-semibold rounded-r-3xl rounded-l-xl  ">
                            <Link to=''>Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
            <header><Hero /></header>
            {/* circle effect */}
            <div className="absolute w-[40%] h-[40%] bg-blue-200 rounded-b-full top-0 left-[30%] mix-blend-multiply filter blur-2xl opacity-50 z-10 "></div>
        </div>

    );
};

export default Navbar;