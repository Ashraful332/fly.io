import check from "~/assets/icon/check.svg"


const Section4 = () => {
    return (
        <div className="max-w-[1200px] mx-auto pb-40 ">
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="max-w-[530px] ">
                    <div className="flex flex-col gap-3">
                        {/* table */}

                        <div>
                            <div className="flex items-center gap-3">
                                <img src={check} alt="sin" />
                                <p className="text-2xl text-[#1E133C] ">Single Sign-On</p>
                            </div>
                        </div>
                        {/* table */}

                        <div>
                            <div className="flex items-center gap-3">
                                <img src={check} alt="sin" />
                                <p className="text-2xl text-[#1E133C] ">Guaranteed Support Response Times</p>
                            </div>
                        </div>
                        {/* table */}

                        <div>
                            <div className="flex items-center gap-3">
                                <img src={check} alt="sin" />
                                <p className="text-2xl text-[#1E133C] ">SOC2 Type 2 Attested</p>
                            </div>
                        </div>
                        {/* table */}

                        <div>
                            <div className="flex items-center gap-3">
                                <img src={check} alt="sin" />
                                <p className="text-2xl text-[#1E133C] ">Memory-safe Rust and Go stack</p>
                            </div>
                        </div>
                        {/* table */}

                        <div>
                            <div className="flex items-center gap-3">
                                <img src={check} alt="sin" />
                                <p className="text-2xl text-[#1E133C] ">CI/CD Integration</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[530px]">
                    <h2 className="text-4xl font-medium text-[#281950] ">Enterprise-Ready</h2>
                    <p className="text-[#1E133C] mt-3 mb-5 ">Apps running on Fly Machines are KVM hardware-isolated, built on a memory-safe stack and running directly on our own metal.</p>
                    <button className="bg-[var(--blue)] text-white py-3 px-7 rounded-3xl mr-3 ">Enterprise Features</button>
                    <button className="bg-gradient-to-b from-white to-[#747272] border border-[#706b6bab] py-3 px-7 rounded-3xl ">Fly.io Security</button>
                </div>
            </div>
            <div className="flex flex-col items-center mt-32">
                <p className="text-[var(--blue)] uppercase ">Trusted by teams at</p>
                <div>
                    {/* slider */}
                </div>
            </div>
        </div>
    );
};

export default Section4;