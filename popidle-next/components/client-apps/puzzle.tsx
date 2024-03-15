"use client";

import { Autocomplete, TextField } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

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

    const handleGuess = () => {

        let guessResult = '';

        if (!guessed || guessed.length == 0) guessResult = 'skipped';
        else if (guessed === album.albumTitle) guessResult = 'correct';
        else guessResult = 'incorrect';

        setGuesses([...guesses, { result: guessResult, answer: guessed }]);
    }

    return (

        <React.Fragment>
            {isLoading
                ? (<h1>Loading ...</h1>)
                : (
                    <>
                        <div>
                            <h1>{`Puzzle ${album.gameId.toString()}`} {`(${autocompleteOptions.length})`}</h1>
                            <Image src={album.coverArt} alt={album.albumTitle} width={300} height={300} />
                            <button
                                type="button" onClick={handleGuess}>Guess</button>
                        </div>
                        <div>
                            <Autocomplete 
                                id="guess-input"
                                disablePortal
                                options={!autocompleteOptions ? [{label:"Loading...", id:0}] : autocompleteOptions }
                                onChange={(e, value) => setGuessed(`${value?.label}`)}
                                renderInput={(params) => <TextField {...params} label="Album" />}
                                renderOption={(props, option, { selected }) => (
                                    <li {...props} key={option.id}>
                                      <span>{option.label}</span>
                                    </li>
                                  )}
                            />
                        </div>
                        <div>
                            <button
                                type="button" onClick={handleGuess}>Guess</button>
                        </div>
                        <div>
                            <ul>
                                {guesses.map((g, index) => {
                                    return <li key={index}>{`${g.result} - ${g.result == 'skipped' ? '<skipped>' : g.answer}`}</li>
                                })}
                            </ul>
                        </div>
                    </>
                )}

        </React.Fragment>

    )
}