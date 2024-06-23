import { getAllAlbums } from '@/data/album'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {

    const albums = await getAllAlbums();

    const autocompleteOptions = albums.map((album: any) => (
        {
            id: `${album._id}`,
            value: `${album.albumTitle} - ${album.artist}`
        }
    ));
    return NextResponse.json({ albums: autocompleteOptions })
}