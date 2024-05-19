import Link from "next/link";
import logo from "@/ui/fonts/logo";
import { FaRecordVinyl } from "react-icons/fa";
import gameConfig from "@/data/config/game-config";

export default async function Home() {

  return (
    <main className="grow bg-popidle-banner-bg text-popidle-banner-text">
      <div className="container mx-auto max-w-screen-lg p-6 py-32 space-y-8 md:space-y-16 flex flex-col items-center justify-evenly">
        <h1 className={`text-5xl font-bold md:text-8xl ${logo.className} space-x-1`}>
          <FaRecordVinyl className="inline" />
          <span>{gameConfig.gameTitle}</span>
        </h1>
        <Link href="/guess-the-album" className="text-lg bg-popidle-banner-text text-popidle-banner-bg p-4 rounded-lg">
          Guess Today&apos;s album</Link>
      </div>
      
    </main>
  )
}
