/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/tvv9BqX6QVj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { SVGProps } from "./refresh-table";

export function Header() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link className="flex items-center" href="#">
            <MountainIcon className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">Acme Inc</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link className="hover:text-gray-400" href="/">
            Refrescamento
          </Link>
          <Link className="hover:text-gray-400" href="#">
            Estatística
          </Link>
          {/* <Link className="hover:text-gray-400" href="#">
            Serviços
          </Link>
          <Link className="hover:text-gray-400" href="#">
            Contato
          </Link> */}
        </nav>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <UsersIcon className="h-6 w-6" />
            <span className="text-lg font-medium">234</span>
          </div>
          <div className="flex items-center space-x-2">
            <CircleCheckIcon className="h-6 w-6" />
            <span className="text-lg font-medium">34</span>
          </div>
          {/* <div className="flex items-center space-x-2">
            <TrophyIcon className="h-6 w-6" />
            <span className="text-lg font-medium">15</span>
          </div> */}
        </div>
      </div>
    </header>
  );
}

function CircleCheckIcon(props: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function MountainIcon(props: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function TrophyIcon(props: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function UsersIcon(props: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
