import { getHistoricAlbums } from "@/data/album";
import Link from "next/link";
import logo from "@/ui/fonts/logo";
import { FaRecordVinyl } from "react-icons/fa";

export default async function Home() {

  return (
    <main className="grow bg-popidle-yellow">
      <div className="container mx-auto max-w-screen-lg p-6 py-32 space-y-8 md:space-y-16 flex flex-col items-center justify-evenly">
        <h1 className={`text-5xl font-bold md:text-8xl ${logo.className} space-x-1`}>
          <FaRecordVinyl className="inline" />
          <span>PopIdle</span>
        </h1>
        <Link href="/guess-the-album" className="text-lg bg-black text-slate-100 p-4 rounded-lg">
          Guess Today&apos;s album</Link>
      </div>
      
    </main>
  )
}
