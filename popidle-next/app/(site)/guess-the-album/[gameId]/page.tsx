import Puzzle from "@/components/client-apps/PuzzleGame";
import Header from "@/components/page/Header";
import { getAlbum } from "@/data/album";
import { notFound } from "next/navigation";

type Props = {
    params: { gameId: Number }
}

export default async function Page({ params }: Props) {

    const album = await getAlbum(params.gameId);

    if (!album) {
        return notFound();
    }

    return (
        <>
            <Header title="Guess the 80's album" subtitle="" />
            <main className="container mx-auto max-w-5xl">
                <Puzzle album={album} />
            </main>
        </>
        
    )
}