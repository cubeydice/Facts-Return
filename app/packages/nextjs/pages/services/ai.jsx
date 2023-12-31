import Link from "next/link";

/* eslint-disable prettier/prettier */
export default function AiEntryPage() {
  return (
    <>
      <div className="flex items-center justify-center py-14">
        <div
          className="
            flex flex-col items-center justify-center py-14
            bg-primary shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <p className="font-bold text-3xl">Coming soon</p>
          <Link
            href="/"
            passHref
            className="bg-secondary hover:bg-yellow-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Go back
          </Link>
        </div>
      </div>
    </>
  );
}
