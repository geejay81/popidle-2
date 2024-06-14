import Puzzle from "@/components/client-apps/Puzzle";
import Header from "@/components/page/Header";
import { getAlbum } from "@/data/album";
import gameConfig from "@/data/config/game-config";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600;

type Props = {
    params: { gameId: number }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
      title: `Guess the album, game #${params.gameId}`,
      description: "Can you guess this previous album from the pixelated cover art?"
    }
  }

export default async function Page({ params }: Props) {

    const album = await getAlbum(params.gameId);

    if (!album) {
        return notFound();
    }

    return (
        <>
            <Header title={gameConfig.puzzleTitle ?? 'Guess the album'} subtitle="" />
            <main className="grow container mx-auto max-w-5xl">
                <Puzzle album={album} gameType="history" gameTitle={process.env.GAME_TITLE || 'PopIdle'} />
            </main>
        </>
        
    )
}