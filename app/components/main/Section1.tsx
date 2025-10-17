import World from "~/assets/photo/world.png";


const Section1 = () => {
    return (
        <div className="background-grid ">
            <div className="max-w-[1200px] mx-auto mt-32 ">
                <div className="flex justify-between ">
                    <div className="max-w-[536px] ">
                        <h2 className="mb-4">Public Cloud Infrastructure. Modern Platform Endorphins.</h2>
                        <p>
                            The most flexible and powerful compute platform on any public cloud. Fly Machines are hardware-virtualized containers, running on our own hardware, that launch instantly and run exactly as long as you want them to — for a single HTTP request, or for weeks of uptime.
                        </p>
                    </div>
                    <div>
                        <img src={World} alt="world map illustration" className="w-[380px] h-[350px] object-cover " />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Section1;