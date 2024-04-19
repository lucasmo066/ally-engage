'use client'
import Image from "next/image"
import ModeToggle from "./ui/toggle-mode"

export default function Nav() {
  return (
    <header>
        <nav className="flex items-center justify-between w-full p-4">
            <ul className="flex items-center space-x-4">
            <li>
                <a
                    className="pointer-events-none flex items-center gap-2 p-8"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/vercel.svg"
                        alt="Logo"
                        className="dark:invert"
                        width={100}
                        height={24}
                        priority
                    />
                </a>
            </li>
            <li>
                <a href="/about" className="text-blue-500">About</a>
            </li>
            <li>
                <a href="/faq" className="text-blue-500">FAQs</a>
            </li>
            <li>
               <ModeToggle />
            </li>
            </ul>
        </nav>
    </header>
  )
}