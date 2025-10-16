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
    <header><Hero/></header>
    <main>
      <section><Section1/></section>
      <section><Section2/></section>
      <section><Section3/></section>
      <section><Section4/></section>
      <section><Section5/></section>
      <section><Section6/></section>
      <section><Section7/></section>
    </main>
    <footer><Footer/></footer>
  </div>
}
