import Fireball from "~/assets/photo/fireball.png"


const Section3 = () => {
    return (
        <div className="max-w-[1200px] mx-auto ">
            <div>
                <div>
                    <button>NEW!</button>
                    <h2>Introducing Phoenix.new The Remote AI Runtime for Phoenix</h2>
                    <p>Describe your app, and watch it take shape. Prototype quickly, experiment freely, and share instantly.</p>
                    <button>Learn More</button>
                </div>
                <div>
                    <img src={Fireball} alt="fire ball" />
                </div>
            </div>
        </div>
    );
};

export default Section3;