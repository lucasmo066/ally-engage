import Nav from "@/components/Nav";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { LampDemo } from "@/components/ui/lamp";

export default function Home() {
  return (
    <>
    <main className="flex flex-col items-center justify-between">
      <Nav />
      <Hero />
      <LampDemo />
    </main>
    </>
  );
}
