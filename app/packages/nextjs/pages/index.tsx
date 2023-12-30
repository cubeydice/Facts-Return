import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { AppHeader } from "../components/AppHeader";

const Home: NextPage = () => {
  return (
    <>
      <AppHeader />



      <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <BugAntIcon className="h-8 w-8 fill-secondary" />
          File on your own
          <Link href="/debug" passHref className="link">
            Enter your info
          </Link>{" "}

        </div>
        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
          <h2>File with AI</h2>

          <Link href="/blockexplorer" passHref className="link">
            Use ChatBot
          </Link>{" "}


        </div>
      </div>

    </>
  );
};

export default Home;
