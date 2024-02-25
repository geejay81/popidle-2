import { getAlbum } from "@/data/album"
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
    params: { gameId: Number }
}

export default async function Page({ params }: Props) {

    const album = await getAlbum(params.gameId);

    if (!album) return notFound();

    return (
        <div>

        <h1>Hello {album.albumTitle}</h1>
        <Image src={album.coverArt} alt={album.albumTitle} width={300} height={300}/>
        </div>
    )
}