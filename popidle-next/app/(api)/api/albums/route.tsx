import { getAllAlbums } from '@/data/album'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {

    const albums = await getAllAlbums();

    const autocompleteOptions = Array.from(
        new Map(
            albums.map((album: any) => [album._id, {
                id: album._id,
                value: `${album.albumTitle} - ${album.artist}`
            }])
        ).values()
    );

    return NextResponse.json({ albums: autocompleteOptions });
}