import World from "~/assets/icon/globe.svg";
import fork from "~/assets/icon/git-fork.svg";
import Zap from "~/assets/icon/zap.svg";
import atom from "~/assets/icon/atom.svg";


const Section2 = () => {
    return (
        <div className="max-w-[1200px] mx-auto pb-40  ">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex gap-8">
                    <div className="w-12 h-12 ">
                        <img src={World} alt="icon" />
                    </div>
                    <div>
                        <h3>Get Right in Your Users' Faces</h3>
                        <p>Deploy in 35 regions, from Sydney to São Paulo, for sub-100ms response times and native-app feel no matter where your users are.</p>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div  className="w-12 h-12 ">
                        <img src={fork} alt="icon" />
                    </div>
                    <div>
                        <h3>Fork Off VMs Like They're Processes</h3>
                        <p>Fly Machines start fast enough to handle HTTP requests, run only when you need them, and scale into tens of thousands of instances.</p>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="w-12 h-12 ">
                        <img src={Zap} alt="icon" />
                    </div>
                    <div>
                        <h3>Ship GPU-Boosted Models</h3>
                        <p>From LLMs to inferencing, hardware acceleration with the same developer experience as a simple CRUD app.</p>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="w-12 h-12 ">
                        <img src={atom} alt="icon" />
                    </div>
                    <div>
                        <h3>Built for Distributed Systems</h3>
                        <p>Clustered databases like Cockroach, globally-distributed Postgres, and modern RPC systems like Elixir FLAME, no Terraform required.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;