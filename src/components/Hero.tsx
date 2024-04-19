'use client';

import { Button } from "./ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Hero() {
    return (
        <AuroraBackground className="w-full flex-1">
            <section className="border border-red-500 flex flex-col items-center justify-center h-full w-full px-20 text-center">
                <h1 className="text-4xl font-bold text-primary pb-4">
                    We Want To Buy, Operate, And Continue To Grow The Business You’ve Built Into A Market Leader.
                </h1>
                <p className="mt-3 text-lg text-white foreground">
                    Unlike traditional approaches focused on cost-cutting, our ethos centers on ethical growth. We invest in the heart of the business—the people—believing that nurturing talent leads to outstanding products and services that customers love.
                </p>
                <p className="mt-3 text-lg text-white font-bold">
                    With us, you get the exit you deserve. And your legacy, employees, and customers are preserved.
                </p>
                <div className="flex gap-6 py-6">
                    <Button className="bg-transparent text-primary border-2 border-primary">
                        Schedule Call
                    </Button>
                    <Button>
                        Call Us Now
                    </Button>
                </div>
            </section>
        </AuroraBackground>
    );
}
