import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import gameConfig from "./config/game-config";
import { Album } from "@/types/Album";

const currentPuzzleId = () => {    
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const startDate = new Date(process.env.START_DATE ?? '2022-05-22');
    const today = new Date();
    return Math.floor((today.getTime() - startDate.getTime()) / _MS_PER_DAY) + 1;
}

const getGameAppearanceType = () => {
    switch (gameConfig.gameIdentifier) {
        case "1970s": return "70s";
        case "1980s": return "80s";
        case "1990s": return "90s";
        case "2000s": return "00s";
        default: return "original";
    }
}

const filteredResponseQueryOptions = {
    next: { revalidate: 86400 }
}

export async function getCurrentAlbum() {
    const currentPuzzleDate = currentPuzzleId();

    return await getAlbum(currentPuzzleDate);
}

export async function getAlbum(gameId: number) {

    const currentPuzzleDate = currentPuzzleId();

    if (gameId > currentPuzzleDate) return null;

    const allAlbums = await getAllAlbums();

    const selectedAlbums =  allAlbums.filter((album: Album) => album.gameId == gameId);

    if (selectedAlbums === null || selectedAlbums.length === 0) return null;

    return selectedAlbums[0];
}

export async function getHistoricAlbums() {
    
    const currentPuzzleDate = currentPuzzleId();
    const allAlbums = await getAllAlbums();

    return allAlbums
        .filter((album: Album) => (
            album.gameId !== null && album.gameId < currentPuzzleDate))
        .sort((a: Album, b: Album) => a.gameId - b.gameId);
}

export async function getAllAlbums() {

    return createClient(clientConfig).fetch(
        groq`*[_type == "album" && defined(gameAppearances[])]
            {
            _id,
            artist,
            albumTitle,
            year,
            embedKey,
            coverArt,
            gameAppearances[]{
                "_id": ^._id,
                "artist": ^.artist,
                "albumTitle": ^.albumTitle,
                "gameId": gameNumber,
                "year": ^.year,
                "embedKey": ^.embedKey,
                "coverArt": ^.coverArt.asset->url,
                gameType
            }
            }.gameAppearances[gameType == "${getGameAppearanceType()}"]
            | order(albumTitle, gameId)`,
        {},
        filteredResponseQueryOptions
    );
}