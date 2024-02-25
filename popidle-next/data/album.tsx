import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getAlbum(gameId: Number) {

    return createClient(clientConfig).fetch(
        groq`*[_type == "album" && gameId == ${gameId}][0]{
            _id,
            _createdAt,
            artist,
            albumTitle,
            gameId,
            "coverArt": coverArt.asset->url
        }`,
        { },
        {
            next: { revalidate: Number(process.env.REVALIDATE_CACHE_SECONDS) }
        }
    );
}

export async function getHistoricAlbums() {
    // TODO: Only fetch albums in the past.

    return createClient(clientConfig).fetch(
        groq`*[_type == "album" && defined(gameId)]{
            _id,
            _createdAt,
            artist,
            albumTitle,
            gameId
        } | order(gameId)`,
        {},
        {
            next: { revalidate: Number(process.env.REVALIDATE_CACHE_SECONDS) }
        }
    );
}

export async function getAllAlbums() {

    return createClient(clientConfig).fetch(
        groq`*[_type == "album"]{
            _id,
            _createdAt,
            artist,
            albumTitle,
            gameId
        } | order(albumTitle)`,
        {},
        {
            next: { revalidate: Number(process.env.REVALIDATE_CACHE_SECONDS) }
        }
    );
}