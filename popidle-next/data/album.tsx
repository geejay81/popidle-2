import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

const currentPuzzleId = () => {    
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const startDate = new Date(process.env.START_DATE ?? '2022-05-22');
    const today = new Date();
    return Math.floor((today.getTime() - startDate.getTime()) / _MS_PER_DAY) + 1;
}

const filteredResponseQueryOptions = {
    next: { revalidate: Number(process.env.REVALIDATE_CACHE_SECONDS) }
}

export async function getAlbum(gameId: Number) {

    const currentPuzzleDate = currentPuzzleId();

    return createClient(clientConfig).fetch(
        groq`*[_type == "album" && gameId == ${gameId} && gameId <= ${currentPuzzleDate}][0]{
            _id,
            _createdAt,
            artist,
            albumTitle,
            gameId,
            "coverArt": coverArt.asset->url
        }`,
        { },
        filteredResponseQueryOptions
    );
}

export async function getHistoricAlbums() {
    
    const currentPuzzleDate = currentPuzzleId();

    return createClient(clientConfig).fetch(
        groq`*[_type == "album" && defined(gameId) && gameId < ${currentPuzzleDate}]{
            _id,
            gameId
        } | order(gameId)`,
        {},
        filteredResponseQueryOptions
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
        filteredResponseQueryOptions
    );
}