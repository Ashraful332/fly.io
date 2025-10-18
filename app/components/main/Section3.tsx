
import Fireball from "~/assets/photo/fireball.png"


const Section3 = () => {
    return (
        <div className="max-w-[1200px] h-auto xl:h-[432px] mx-auto bg-[var(--background)] text-white rounded-3xl border-[2.5px] border-[var(--ring)] mb-40 
        flex flex-col items-center justify-center">
            <div className="flex flex-col lg:flex-row  ">
                <div className="max-w-[540px] ">
                    <button className="bg-[#F59E0B] py-1 px-3 text-xs rounded-2xl ">NEW!</button>
                    <h2 className="text-3xl font-medium mb-4 mt-4">Introducing Phoenix.new The Remote AI Runtime for Phoenix</h2>
                    <p className="text-[#CCCCCC] mb-4 ">Describe your app, and watch it take shape. Prototype quickly, experiment freely, and share instantly.</p>
                    <button className="bg-[var(--blue)] text-white py-3 px-7 rounded-3xl ">Learn More</button>
                </div>
                <div>
                    <img src={Fireball} alt="fire ball" className="w-[435px] h-[285px] " />
                </div>
            </div>
        </div>
    );
};

export default Section3;