import { useEffect, useState } from "react";
import { nav } from "./data/content";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Voyage from "./components/Voyage";
import RouteMap from "./components/RouteMap";
import Calendar from "./components/Calendar";
import { Doings, People, RoadOn, Visit, Quiz } from "./components/Sections";
import Sources from "./components/Sources";

export default function App() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const els = nav.map((n) => document.getElementById(n.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a className="skip" href="#voyage">
        Skip to the story
      </a>
      <Header active={active} />
      <main>
        <Hero />
        <Voyage />
        <RouteMap />
        <Calendar />
        <Doings />
        <People />
        <RoadOn />
        <Visit />
        <Quiz />
        <Sources />
      </main>
      <footer className="foot">
        <p>Rizal sa Japan is a student project. Built with public-domain and openly licensed images.</p>
      </footer>
    </>
  );
}
