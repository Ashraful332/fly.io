import World from "~/assets/photo/world.png";
import Section2 from "./Section2";


const Section1 = () => {
    return (
        <div className="background-grid pt-32 ">
            <div className="max-w-[1200px] mx-auto pb-32  ">
                <div className="flex justify-between  ">
                    <div className="max-w-[536px] ">
                        <h2 className="mb-4 text-[#281950] text-4xl font-medium ">Public Cloud Infrastructure. Modern Platform Endorphins.</h2>
                        <p className="text-[#1e133cc9] leading-8 text-xl ">
                            The most flexible and powerful compute platform on any public cloud. Fly Machines are hardware-virtualized containers, running on our own hardware, that launch instantly and run exactly as long as you want them to — for a single HTTP request, or for weeks of uptime.
                        </p>
                    </div>
                    <div >
                        <img src={World} alt="world map illustration" className="w-[380px] h-[350px] object-cover " />
                    </div>
                </div>
            </div>
            <Section2/>
        </div>

    );
};

export default Section1;