import Puzzle from "@/components/client-apps/puzzle";
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
        <Puzzle album={album} />
    )
}