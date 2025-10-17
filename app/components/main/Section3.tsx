import Fireball from "~/assets/photo/fireball.png"


const Section3 = () => {
    return (
        <div className="max-w-[1200px] h-auto xl:h-[432px] mx-auto bg-[var(--background)] text-white rounded-3xl border-[2.5px] border-[var(--ring)] mb-40 ">
            <div className="flex flex-col items-center justify-center m-auto">
                <div className="flex flex-col lg:flex-row ">
                    <div className="max-w-[540px] ">
                        <button>NEW!</button>
                        <h2>Introducing Phoenix.new The Remote AI Runtime for Phoenix</h2>
                        <p>Describe your app, and watch it take shape. Prototype quickly, experiment freely, and share instantly.</p>
                        <button>Learn More</button>
                    </div>
                    <div>
                        <img src={Fireball} alt="fire ball" className="w-[435px] h-[285px] " />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Section3;