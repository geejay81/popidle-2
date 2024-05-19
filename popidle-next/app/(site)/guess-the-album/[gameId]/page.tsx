import Puzzle from "@/components/client-apps/Puzzle";
import Header from "@/components/page/Header";
import { getAlbum } from "@/data/album";
import gameConfig from "@/data/config/game-config";
import { notFound } from "next/navigation";

type Props = {
    params: { gameId: number }
}

export default async function Page({ params }: Props) {

    const album = await getAlbum(params.gameId);

    if (!album) {
        return notFound();
    }

    return (
        <>
            <Header title={gameConfig.puzzleTitle ?? 'Guess the album'} subtitle="" />
            <main className="container mx-auto max-w-5xl">
                <Puzzle album={album} />
            </main>
        </>
        
    )
}