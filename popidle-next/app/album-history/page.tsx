import { getHistoricAlbums } from "@/data/album";
import Link from "next/link";

export default async function Page() {

    const albums = await getHistoricAlbums();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Previous album puzzles</h1>
            <ul className="list-none">
            {albums && albums.map((album: any) => (
                <li key={album._id} 
                    className="mx-2 my-5 float-left">
                    <Link 
                        href={`/guess-the-album/${album.gameId}`}
                        className="bg-fuchsia-600 text-white px-5 py-4 rounded-lg"
                        >{album.gameId}</Link></li>
            ))}
            </ul>
        </main>
    );
}