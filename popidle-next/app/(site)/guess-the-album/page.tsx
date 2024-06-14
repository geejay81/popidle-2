import Puzzle from "@/components/client-apps/Puzzle"
import Header from "@/components/page/Header"
import { getCurrentAlbum } from "@/data/album"
import gameConfig from "@/data/config/game-config"
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export const metadata: Metadata = {
    title: "Guess the album",
    description: "Can you guess the album from the pixelated image of the cover art?"
}

export default async function Page() {

    const album = await getCurrentAlbum();

    if (!album) {
        return notFound();
    }

    return (
        <>
            <Header title={gameConfig.puzzleTitle ?? 'Guess the album'} subtitle="" />
            <main className="grow container mx-auto max-w-5xl">
                <Puzzle album={album} gameType="daily" gameTitle={process.env.GAME_TITLE || 'PopIdle'} />
            </main>
        </>
    )
}