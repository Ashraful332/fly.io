import work from "~/assets/photo/working.png"


const Section6 = () => {
    return (
        <div className="max-w-[1200px] mx-auto ">
            <div>
                <div>
                    <button>NEW!</button>
                    <h2>Fly.io Managed Postgres</h2>
                    <p>A fully-managed database service that handles all aspects of running production PostgreSQL where we take care of:</p>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <p>Automatic backups and recovery</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>High availability with automatic failover</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>Performance monitoring and metrics</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>Resource scaling (CPU, RAM, storage)</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>24/7 support and incident response</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>Automatic encryption of data at rest and in transit</p>
                        </div>
                    </div>
                    <button>Learn More</button>
                </div>
                <div>
                    <img src={work} alt="image" />
                </div>
            </div>
        </div>
    );
};

export default Section6;