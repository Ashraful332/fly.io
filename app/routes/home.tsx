import Navbar from "~/components/navigation/Navbar";
import "../app.css";
import Hero from "~/components/main/Hero";
import Section1 from "~/components/main/Section1";
import Footer from "~/components/navigation/Footer";
import Section2 from "~/components/main/Section2";
import Section3 from "~/components/main/Section3";
import Section4 from "~/components/main/Section4";
import Section5 from "~/components/main/Section5";
import Section6 from "~/components/main/Section6";
import Section7 from "~/components/main/Section7";



export default function Home() {
  return <div>
    <nav><Navbar/></nav>
    {/* <header><Hero/></header> */}
    <main>
      <section><Section1/></section>
      {/* <section><Section2/></section> */}
      <section><Section3/></section>
      <section><Section4/></section>
      <section><Section5/></section>
      <section><Section6/></section>
      <section><Section7/></section>
    </main>
    <footer><Footer/></footer>
    

    <div className="relative bg-[#0000003d] mt-24 h-screen">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {/* <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div> */}
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
                {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div> */}
            </div>
    </div>
  </div>
}
