"use client";

import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PixelatedImage from './PixelatedImage';

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

    const [guesses, setGuesses] = useState(defaultGuessList);
    const [guessed, setGuessed] = useState<string>('');
    const [autocompleteOptions, setAutocompleteOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/api/albums')
            .then((res) => res.json())
            .then((data) => {
                setAutocompleteOptions(data.albums.map((item:any) => ({ label: item.value, id: item.id })));
                setIsLoading(false);
            })
    }, []);

    const handleGuess = (e: React.MouseEvent<HTMLElement>) => {
        e.persist();

        let guessResult = '';

        if (!guessed || guessed.length == 0) guessResult = 'skipped';
        else if (guessed === album.albumTitle) guessResult = 'correct';
        else guessResult = 'incorrect';

        setGuesses([...guesses, { result: guessResult, answer: guessed }]);

        if (level == (levels.length) - 1) return;

        const newLevel = level + 1;
        setLevel(newLevel);
        setPixelSize(levels[newLevel]);
    }

    return (
        <>
            {isLoading
                ? (<p>Loading ...</p>)
                : (
                    <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                        <div className='md:flex-1 p-4 text-center'>
                            <PixelatedImage imageUrl={album.coverArt} pixelSize={pixelSize} height={300} width={300} />
                        </div>
                        <div className='md:flex-1 p-4'>
                            <div>
                                <Autocomplete 
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
                            </div>
                            <div>
                                <button
                                    className='border border-black bg-green-500 text-black p-4 rounded-md'
                                    type="button" onClick={handleGuess}>Guess</button>
                            </div>
                            <div>
                                <ul>
                                    {guesses.map((g, index) => {
                                        return <li key={index}>{`${g.result} - ${g.result == 'skipped' ? '<skipped>' : g.answer}`}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}