"use client";

import React, { useEffect, useState } from 'react';
import PixelatedImage from './PixelatedImage';
import headingFont from '@/ui/fonts/headings';
import Combobox from './Combobox';
import SpotifyWidget from './SpotifyWidget';
import { Guess } from '@/types/Guess';
import ScoreBoard from './ScoreBoard';
import { Album } from '@/types/Album';
import headings from '@/ui/fonts/headings';
import { getGameState, setGameState, setHistoryState } from '@/components/client-lib/StateManager';
import { State } from '@/types/State';
import GameHistory from './GameHistory';

type Props = {
    gameType: string,
    album: Album;
}

export default function Puzzle(props: Props) {

    const album = props.album;
    const gameType = props.gameType;
    const levels = [40, 24, 16, 8, 4, 2];

    let initialGuesses: Guess[] = [];
    let initialPixelSize = levels[0];
    let initialGameMode = 'loading';

    const [selectedItem, setSelectedItem] = useState<string>('');
    const [pixelSize, setPixelSize] = useState(initialPixelSize);
    const [guesses, setGuesses] = useState(initialGuesses);
    const [gameMode, setGameMode] = useState(initialGameMode);

    const initialiseState = () => {
        let initialGameMode = 'play';
        if (gameType === 'daily') {
            const existingState: State = getGameState();
            if (album.gameId == existingState?.puzzleNumber) {
                setGuesses(existingState.guesses);
                setPixelSize(
                    existingState.guesses.length === 6
                        ? levels[5]
                        : levels[existingState.guesses.length]);
                if (existingState.guesses[existingState.guesses.length - 1].result === 'correct') {
                    initialGameMode = 'won';
                } else if (existingState.guesses.length === 6) {
                    initialGameMode = 'lost';
                }
            };
        }
        setGameMode(initialGameMode);
    }

    useEffect(initialiseState,[]);

    const handleGuess = (e: React.MouseEvent<HTMLElement>) => {
        e.persist();

        const guessed = selectedItem ?? '';
        setSelectedItem('');
        
        let guessResult = '';

        if (!guessed || guessed.length == 0) guessResult = 'skipped';
        else if (guessed === `${album.albumTitle} - ${album.artist}`) guessResult = 'correct';
        else guessResult = 'incorrect';

        const newGuesses = [...guesses, { result: guessResult, answer: guessed }];
        setGuesses(newGuesses);

        if (gameType === 'daily') {
            setGameState(album.gameId, newGuesses);
        }

        if (newGuesses.length === 6 || guessResult === 'correct') {
            var gameResult = guessResult === 'correct' ? 'won' : 'lost';
            setGameMode(gameResult);
            if (gameType === 'daily') setHistoryState(gameResult, guesses, album.gameId);
            return;
        }

        if (pixelSize > levels[5]) setPixelSize(levels[newGuesses.length]);
    }

    const PlayMode = () => {
        return (
            <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <div className='md:flex-1 p-4 text-center'>
                    <PixelatedImage imageUrl={album.coverArt} pixelSize={pixelSize} height={300} width={300} />
                </div>
                <div className='md:flex-1 p-4 space-y-4'>
                    <div>
                        <Combobox selectedItem={selectedItem} setSelectedItem={setSelectedItem} srcUrl='/api/albums' />
                    </div>
                    <div>
                        <button
                            className={`bg-popidle-banner-bg text-xl !text-popidle-banner-fg p-4 rounded-md w-full ${headings.className}`}
                            type="button" onClick={handleGuess}>Guess</button>
                    </div>
                    <div>
                        <ScoreBoard guesses={guesses} />
                    </div>
                    <div className='prose'>
                        <ol className='list-decimal list-inside'>
                            {guesses.map((g, index) => {
                                return (
                                    <li key={index} className='py-2 border-b border-slate-100'>
                                        {`${g.result == 'skipped' ? '<skipped>' : g.answer}`}
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }

    const WonMode = () => {
        return (
            <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <div className='md:flex-1 p-4 space-y-4'>
                    <SpotifyWidget albumId={album.embedKey} />
                    <div className='p-6 rounded-lg bg-green-500 text-white space-y-4'>
                        <h2 className={`text-2xl font-bold ${headingFont.className}`}>Top of the Pops!</h2>
                        <p>You knew that the answer was <span className='font-bold'>{album.albumTitle}</span> by <span className='font-bold'>{album.artist}</span>.</p>
                        <ScoreBoard guesses={guesses} />
                    </div>
                </div>
                <div className='md:flex-1 p-4 space-y-4'>
                    {gameType === 'daily' && <GameHistory />}
                </div>
            </div>
        );
    }

    const LostMode = () => {
        return (
            <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <div className='md:flex-1 p-4 space-y-4'>
                    <SpotifyWidget albumId={album.embedKey} />
                    <div className='p-6 bg-red-500 rounded-lg text-white space-y-4'>
                        <h2 className={`text-2xl font-bold ${headingFont.className}`}>Better luck next time!</h2>
                        <p>The answer was <span className='font-bold'>{album.albumTitle}</span> by <span className='font-bold'>{album.artist}</span>.</p>
                        <ScoreBoard guesses={guesses} />
                    </div>
                </div>
                <div className='md:flex-1 p-4 space-y-4'>
                    {gameMode === 'daily' && <GameHistory />}
                </div>
            </div>
        )
    }

    switch (gameMode) {
        case "loading": return <p>Loading...</p>
        case "play": return <PlayMode />
        case "won": return <WonMode />
        case "lost": return <LostMode />
    }
}