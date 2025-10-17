import check from "~/assets/icon/check.svg"


const Section4 = () => {
    return (
        <div className="max-w-[1200px] mx-auto ">
            <div className="flex flex-col lg:flex-row">
                <div className="max-w-[530px] ">
                    <div>
                        {/* table */}
                        <hr/>
                        <div>
                            <div className="flex items-center">
                                <img src={check} alt="sin" />
                                <p>Single Sign-On</p>
                            </div>
                        </div>
                    {/* table */}
                        <hr/>
                        <div>
                            <div className="flex items-center">
                                <img src={check} alt="sin" />
                                <p>Guaranteed Support Response Times</p>
                            </div>
                        </div>
                    {/* table */}
                        <hr/>
                        <div>
                            <div className="flex items-center">
                                <img src={check} alt="sin" />
                                <p>SOC2 Type 2 Attested</p>
                            </div>
                        </div>
                    {/* table */}
                        <hr/>
                        <div>
                            <div className="flex items-center">
                                <img src={check} alt="sin" />
                                <p>Memory-safe Rust and Go stack</p>
                            </div>
                        </div>
                    {/* table */}
                        <hr/>
                        <div>
                            <div className="flex items-center">
                                <img src={check} alt="sin" />
                                <p>CI/CD Integration</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[530px]">
                    <h2>Enterprise-Ready</h2>
                    <p>Apps running on Fly Machines are KVM hardware-isolated, built on a memory-safe stack and running directly on our own metal.</p>
                    <button>Enterprise Features</button>
                    <button>Fly.io Security</button>
                </div>
            </div>
            <div>
                <p>Trusted by teams at</p>
                <div>
                    {/* slider */}
                </div>
            </div>
        </div>
    );
};

export default Section4;