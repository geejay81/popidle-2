import Header from "@/components/page/Header";
import { getHistoricAlbums } from "@/data/album";
import { Album } from "@/types/Album";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Previous album puzzles",
    description: "Play the whole back catalog!"
}

export default async function Page() {

    const albums = await getHistoricAlbums();
    return (
        <>
            <Header title={metadata.title!.toString()} subtitle={metadata.description!.toString()} />
            <main className="grow">
                <div className="container mx-auto max-w-5xl px-4 py-4 space-y-2">
                    <ul className="list-none m-0">
                    {albums && albums.map((album: Album) => (
                        <li key={album._id} 
                            className="mr-4 my-2 float-left">
                            <Link 
                                href={`/guess-the-album/${album.gameId}`}
                                className="bg-blue-700 text-white px-5 py-4 rounded-lg inline-block"
                                >{album.gameId}</Link></li>
                    ))}
                    </ul>
                </div>
            </main>
        </>
    );
}