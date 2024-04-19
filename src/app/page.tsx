import Nav from "@/components/Nav";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <main className="flex flex-col items-center justify-between p-2">
      <Nav />
      <section className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center">
        <h1 className="text-4xl font-bold text-primary">
        We Want To Buy, Operate, And Continue To Grow The Business You’ve Built Into A Market Leader.
        </h1>
        <p className="mt-3 text-lg">
        Unlike traditional approaches focused on cost-cutting, our ethos centers on ethical growth. We invest in the heart of the business—the people—believing that nurturing talent leads to outstanding products and services that customers love.
        </p>
        <p className="mt-3 text-lg font-bold">
        With us, you get the exit you deserve. And your legacy, employees, and customers are preserved.
        </p>
        <div className="flex gap-6 py-6">
        <Button className="bg-secondary">
          Schedule Call
        </Button>
        <Button>
          Call Us Now
        </Button>
        </div>
        </section>
    </main>
    </>
  );
}
