import jsL from "~/assets/photo/js.png";
import cpu from "~/assets/icon/cpu.svg";
import power from "~/assets/icon/power.svg";
import brain from "~/assets/icon/brain.svg";


const Section7 = () => {
    return (
        <div className="background-grid">
            <div className="max-w-[1200px] mx-auto pt-32 ">
                <div >
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div >
                            <img src={jsL} alt="javascript and we" className="w-[448px]" />
                        </div>
                        <div className="max-w-[530px] ">
                            <h2 className="text-4xl font-medium text-[#281950] mb-4 ">Serverful JavaScript Without the Hassle of Serverless</h2>
                            <p className="text-[#1e133cd8] font-medium ">Imagine if a server could boot as fast as a serverless function? That's Fly Machines—serverless compute is a trade-off you no longer need to make. Graduate to a full-stack cloud to regain control over your stack & hosting bill.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-12" >
                        <div>
                            <div className="w-12 h-12 border-2 border-[#10B981] flex flex-col items-center justify-center rounded-xl ">
                                <img src={power} alt="" />
                            </div>
                            <div>
                                <h3 className="text-2xl mb-4 mt-7">Boots in 250ms or Less</h3>
                                <p className="text-[#1e133ca4] ">
                                    Functions and apps boot and respond to web requests in 250ms or less with Fly Machines. You decide to keep them running or automatically put them to sleep.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="w-12 h-12 border-2 border-[#F97316] flex flex-col items-center justify-center rounded-xl ">
                                <img src={brain} alt="" />
                            </div>
                            <div>
                                <h3 className="text-2xl mb-4 mt-7">Built for JavaScript Developers</h3>
                                <p className="text-[#1e133ca4] ">
                                    JavaScript, TypeScript, Bun, Deno—whatever your flavor, Fly Launch automatically detects your runtime and generates a VM with everything you need to run your app.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="w-12 h-12 border-2 border-[#3B82F6] flex flex-col items-center justify-center rounded-xl ">
                                <img src={cpu} alt="" />
                            </div>
                            <div>
                                <h3 className="text-2xl mb-4 mt-7">Real GPUs & CPUs on the Edge</h3>
                                <p className="text-[#1e133ca4] ">
                                    Run workloads that require GPUs or lots of CPUs, memory, and storage in over 30 regions around the world—all interconnected by a private, encrypted WireGuard network that works out of the box.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section7;