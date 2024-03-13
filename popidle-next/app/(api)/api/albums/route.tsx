import { getAllAlbums } from '@/data/album'
import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {

    const albums = await getAllAlbums();

    // TODO: handle errors here.

    const autocompleteOptions = albums.map((album: any) => `${album.albumTitle} - ${album.artist}`)
    return NextResponse.json({ albums: autocompleteOptions })
}