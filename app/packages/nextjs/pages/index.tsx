import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { AppHeader } from "../components/AppHeader";

const Home: NextPage = () => {
  return (
    <>
      <AppHeader />
      <h1 className="text-8xl text-primary text-center px-20 pt-10">Facts Return</h1>
      <h2 className="text-6xl text-secondary text-center px-20 pb-10">A Decentralized Web3/AI Powered Tax Preparation System</h2>
      <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
        <Link href="/services/manual" passHref className="link no-underline">
          <div className="flex flex-col bg-base-100 size-60 px-10 py-10 text-center items-center rounded-3xl">
            <BugAntIcon className="h-8 w-8 fill-secondary" />
              <h2>File on your own</h2>
          </div>
        </Link>{" "}

        <Link href="/services/ai" passHref className="link no-underline">
          <div className="flex flex-col bg-base-100 size-60 px-10 py-10 text-center items-center rounded-3xl">
            <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <h2>File with AI</h2>
          </div>
        </Link>{" "}

      </div>

    </>
  );
};

export default Home;
