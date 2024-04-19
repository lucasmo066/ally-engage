import Nav from "@/components/Nav";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
    <main className="flex flex-col items-center justify-between p-2">
      <Nav />
      <Hero />
    </main>
    </>
  );
}
