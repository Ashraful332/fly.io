import World from "~/assets/photo/world.png";


const Section1 = () => {
    return (
        <div>
            <div>
                <div>
                    <h2>Public Cloud Infrastructure. Modern Platform Endorphins.</h2>
                    <p>
                        The most flexible and powerful compute platform on any public cloud. Fly Machines are hardware-virtualized containers, running on our own hardware, that launch instantly and run exactly as long as you want them to — for a single HTTP request, or for weeks of uptime.
                    </p>
                </div>
                <div>
                    <img src={World} alt="world map illustration" />
                </div>
            </div>
        </div>
    );
};

export default Section1;