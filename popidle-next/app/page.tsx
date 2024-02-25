import { getHistoricAlbums } from "@/data/album";
import Link from "next/link";

export default async function Home() {

  const albums = await getHistoricAlbums();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world</h1>
      <ul>
      {albums && albums.map((album: any) => (
        <li key={album._id}>
          <Link href={`/guess-the-album/${album.gameId}`}>{album.albumTitle}</Link></li>
      ))}
      </ul>
    </main>
  );
}
