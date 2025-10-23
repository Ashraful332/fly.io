import logo from "~/assets/icon/go.svg"
import logo1 from "~/assets/icon/Django.wine.svg"
import logo2 from "~/assets/icon/laracel.svg"
import logo3 from "~/assets/icon/docker.svg"
import logo4 from "~/assets/icon/rust.svg"

const Section5 = () => {
    return (
        <div className="bg-[var(--blue)] text-white py-40 ">
            <div className="max-w-[1200px] mx-auto pb-36 ">
                <div className="flex justify-between">
                    <div>
                        <h2 className="font-medium text-4xl mb-4 ">Use the Tech You Love</h2>
                        <p className="text-[#cac8c8] mb-7 max-w-[512px] ">
                            Build with your favorite framework. No Dockerfile? No problem: our CLI generates containers for most popular frameworks, including Rails, Phoenix, Django, Node, Laravel, and .NET.
                        </p>
                        <button className="bg-[#5495eb] text-white py-3 px-7 rounded-3xl ">Learn More</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="w-40 h-24 bg-blue-400 rounded-2xl border border-[#ffffff5d] flex flex-col items-center p-3 ">
                            <img src={logo} alt="logo" className=" h-16 " />
                        </div>
                        <div className="w-40 h-24 bg-blue-400 rounded-2xl border border-[#ffffff5d] flex flex-col items-center p-3 ">
                            <img src={logo1} alt="logo" className="h-16 " />
                        </div>
                        <div className="w-40 h-24 bg-blue-400 rounded-2xl border border-[#ffffff5d] flex flex-col items-center p-3 ">
                            <img src={logo2} alt="logo" className="h-16 " />
                        </div>
                        <div className="w-40 h-24 bg-blue-400 rounded-2xl border border-[#ffffff5d] flex flex-col items-center p-3 ">
                            <img src={logo4} alt="logo" className="h-16 " />
                        </div>
                        <div className="w-40 h-24 bg-blue-400 rounded-2xl border border-[#ffffff5d] flex flex-col items-center p-3 ">
                            <img src={logo3} alt="logo" className="h-16 " />
                        </div>
                        <div className="w-40 h-24 bg-blue-400 rounded-2xl border border-[#ffffff5d] flex flex-col items-center p-3 ">
                            <img src={logo} alt="logo" className="h-16 " />
                        </div>
                        <div className="w-40 h-24 bg-blue-400 rounded-2xl border border-[#ffffff5d] flex flex-col items-center p-3 ">
                            <img src={logo} alt="logo" className="h-16 " />
                        </div>
                        <div className="w-40 h-24 bg-blue-400 rounded-2xl border border-[#ffffff5d] flex flex-col items-center p-3 ">
                            <img src={logo} alt="logo" className="h-16 " />
                        </div>
                        <div className="w-40 h-24 bg-blue-400 rounded-2xl border border-[#ffffff5d] flex flex-col items-center p-3">
                            <img src={logo} alt="logo" className="h-16 " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section5;