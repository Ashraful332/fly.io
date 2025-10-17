import Logo from "~/assets/photo/logo-landscape.svg";

const Footer = () => {
    return (
        <div>
            <div className="max-w-[1200px] mx-auto mt-40 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                    <div>
                        <img src={Logo} alt="logo" className="w-28" />
                    </div>
                    <div>
                        <h4>Company</h4>
                        <p>About</p>
                        <p>Pricing</p>
                        <p>Jobs</p>
                    </div>
                    <div>
                        <h4>Articles</h4>
                        <p>Blog</p>
                        <p>Phoenix Files</p>
                        <p>Laravel Bytes</p>    
                        <p>Ruby Dispatch</p>
                        <p>Django Beats</p>
                        <p>JavaScript Journal</p>
                    </div>                     
                    <div>
                        <h4>Resources</h4>
                        <p>Docs</p>
                        <p>Customers</p>
                        <p>Support</p>
                        <p>Support Metrics</p>
                        <p>Status</p>
                    </div>                     
                    <div>
                        <h4>Contact</h4>
                        <p>GitHub</p>
                        <p>Twitter</p>
                        <p>Community</p>
                    </div>                     
                    <div>
                        <h4>Legal</h4>
                        <p>Security</p>
                        <p>Privacy policy</p>
                        <p>Terms of service</p>
                        <p>Acceptable Use Policy</p>
                    </div>                     
                </div>
                <div className="text-center">
                    <p>Copyright © 2025 Fly.io</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;