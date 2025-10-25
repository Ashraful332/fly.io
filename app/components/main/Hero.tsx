

const Hero = () => {
    return (
        <div className="pt-32 pb-32 h-[93vh] hero-background ">
            <div className="flex flex-col items-center justify-center max-w-[700px] mx-auto text-center font-medium">
                <h1 className="text-6xl ">A Public Cloud Built For Developers Who Ship</h1>
                <p className=" mt-5 mb-9 ">Over 3 million apps have launched on Fly.io, leveraging global Anycast load-balancing, zero-config private networking, hardware isolation, instant WireGuard VPN connections, and push-button deployments scaling to thousands of instances.</p>
                <button className="bg-[var(--blue)] text-white py-3 px-7 rounded-3xl shadow-[0_-5px_10px_#0000] ">Deploy Your App in 5 minutes </button>
            </div>
        </div>
    );
};

export default Hero;