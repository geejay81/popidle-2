import { getAllAlbums } from '@/data/album'
import { NextResponse } from 'next/server'

export const revalidate = 600;
 
export async function GET(request: Request) {

    const albums = await getAllAlbums();

    // TODO: handle errors here.

    const autocompleteOptions = albums.map((album: any) => (
        {
            id: `${album._id}`,
            value: `${album.albumTitle} - ${album.artist}`
        }
    ));
    return NextResponse.json({ albums: autocompleteOptions })
}