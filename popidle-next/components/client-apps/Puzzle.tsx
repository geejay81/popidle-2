"use client";

import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PixelatedImage from './PixelatedImage';
import AutocompleteInput from './AutocompleteInput';
import headingFont from '@/ui/fonts/headings';

type Album = {
    gameId: Number;
    albumTitle: string;
    artist: string;
    coverArt: string;
}

type Props = {
    album: Album;
}

type Guess = {
    result: string;
    answer: string;
}

export default function Puzzle(props: Props) {

    const album = props.album;
    const levels = [40, 24, 16, 8, 4, 2];
    const defaultGuessList: Guess[] = [];
    const [level, setLevel] = useState(0);
    const [pixelSize, setPixelSize] = useState(40);
    const [gameMode, setGameMode] = useState('loading');
    const [guesses, setGuesses] = useState(defaultGuessList);
    const [guessed, setGuessed] = useState<string>('');
    const [autocompleteOptions, setAutocompleteOptions] = useState([]);

    useEffect(() => {
        fetch('/api/albums')
            .then((res) => res.json())
            .then((data) => {
                setAutocompleteOptions(data.albums.map((item:any) => ({ label: item.value, id: item.id })));
                setGameMode('play');
            })
    }, []);

    const handleGuess = (e: React.MouseEvent<HTMLElement>) => {
        e.persist();

        let guessResult = '';

        if (!guessed || guessed.length == 0) guessResult = 'skipped';
        else if (guessed === `${album.albumTitle} - ${album.artist}`) guessResult = 'correct';
        else guessResult = 'incorrect';

        setGuesses([...guesses, { result: guessResult, answer: guessed }]);

        if (levels.length === guesses.length || guessResult === 'correct') {
            var gameResult = guessResult === 'correct' ? 'won' : 'lost';
            setGameMode(gameResult);
            return;
        }

        const newLevel = level + 1;
        setLevel(newLevel);
        setPixelSize(levels[newLevel]);
    }

    const PlayMode = () => {
        return (
            <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <div className='md:flex-1 p-4 text-center'>
                    <PixelatedImage imageUrl={album.coverArt} pixelSize={pixelSize} height={300} width={300} />
                </div>
                <div className='md:flex-1 p-4 space-y-4'>
                    <div>
                        <Autocomplete 
                            className='border-black'
                            id="guess-input"
                            disablePortal
                            options={!autocompleteOptions ? [{label:"Loading...", id:0}] : autocompleteOptions }
                            onChange={(e, value) => setGuessed(`${value?.label}`)}
                            renderInput={(params) => <TextField {...params} label="Guess the album" />}
                            renderOption={(props, option, { selected }) => (
                                <li {...props} key={option.id}>
                                    <span>{option.label}</span>
                                </li>
                            )}
                        />
                        {/* <AutocompleteInput 
                            options={autocompleteOptions}
                            inputStyle={{border: '1px solid #000', padding: '1rem', width: '100%'}} /> */}
                    </div>
                    <div>
                        <button
                            className='border border-black bg-green-500 text-black p-4 rounded-md w-full'
                            type="button" onClick={handleGuess}>Guess</button>
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
                    <div className='p-6 rounded-lg bg-green-500 text-white space-y-4'>
                        <h2 className={`text-2xl font-bold ${headingFont.className}`}>Top of the Pops!</h2>
                        <p>You knew that the answer was <span className='font-bold'>{album.albumTitle}</span> by <span className='font-bold'>{album.artist}</span>.</p>
                    </div>
                </div>
                <div className='md:flex-1 p-4 space-y-4'>
                    
                </div>
            </div>
        );
    }

    const LostMode = () => {
        return (
            <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <div className='md:flex-1 p-4 space-y-4'>
                    <div className='p-6 bg-red-500 rounded-lg text-white space-y-4'>
                        <h2 className={`text-2xl font-bold ${headingFont.className}`}>Better luck next time!</h2>
                        <p>The answer was <span className='font-bold'>{album.albumTitle}</span> by <span className='font-bold'>{album.artist}</span>.</p>
                    </div>
                </div>
                <div className='md:flex-1 p-4 space-y-4'>
                    
                </div>
            </div>
        )
    }

    const LoadingMode = () => {
        return (
            <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <div className='md:flex-1 p-4 space-x-4'>
                    Loading ...
                </div>
            </div>
        )
    }

    switch (gameMode) {
        case "loading": return <LoadingMode />
        case "play": return <PlayMode />
        case "won": return <WonMode />
        case "lost": return <LostMode />
    }
}