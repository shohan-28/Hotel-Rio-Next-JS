// components/ServiceCTA.js
import { Borel } from "next/font/google";
import Link from "next/link";
import RegisterPage from './../Register/page';
import AboutUs from './../AboutUs/page';

const borel = Borel({
  subsets: ["latin"],
  weight: "400",
});

export default function ServiceCTA() {
  return (
    <section className="relative bg-gray-50 dark:bg-black py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Welcome to <span className={`${borel.className} text-5xl`}>Hotel Rio</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Access our full range of services and stay connected—just click ‘Get Started’. For additional information, hit ‘Read More.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/Register"
            className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            Get Started
          </Link>
          <Link
            href="/AboutUs"
            className="inline-flex items-center rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-900 dark:text-white transition hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            Read More
          </Link>
        </div>
      </div>

      {/* Gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-24 -z-10 overflow-hidden blur-3xl"
      >
        <div className="relative left-1/2 aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-200 to-indigo-400 opacity-30 dark:opacity-20" />
      </div>
    </section>
  );
}