import work from "~/assets/photo/working.png"
import tick from "~/assets/icon/check.svg"


const Section6 = () => {
    return (
        <div className="max-w-[1200px] mx-auto pt-28 pb-28  ">
            <div className="flex justify-between">
                <div className="max-w-[536px] ">
                    <button className="bg-[#ddb57149] py-1 px-3 text-xs rounded-2xl mb-4 ">NEW!</button>
                    <h2 className="text-4xl font-medium mb-3 ">Fly.io Managed Postgres</h2>
                    <p className="text-[#1E133C] mb-6 ">A fully-managed database service that handles all aspects of running production PostgreSQL where we take care of:</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <img src={tick} alt="icon" />
                            <p>Automatic backups and recovery</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={tick} alt="icon" />
                            <p>High availability with automatic failover</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={tick} alt="icon" />
                            <p>Performance monitoring and metrics</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={tick} alt="icon" />
                            <p>Resource scaling (CPU, RAM, storage)</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={tick} alt="icon" />
                            <p>24/7 support and incident response</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={tick} alt="icon" />
                            <p>Automatic encryption of data at rest and in transit</p>
                        </div>
                    </div>
                    <button className="bg-[var(--blue)] text-white py-3 px-7 rounded-3xl mt-8 " >Learn More</button>
                </div>
                <div >
                    <img src={work} alt="image" className="w-[385px] " />
                </div>
            </div>
        </div>
    );
};

export default Section6;