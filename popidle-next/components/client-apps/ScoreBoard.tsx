"use client"

import { Guess } from "@/types/Guess"
import { FaCheck, FaXmark } from "react-icons/fa6"

type ScoreBoardProps = {
    guesses: Guess[]
}

const guessIcon = (guess: Guess, index: number) => {
    switch (guess.result) {
        case "skipped":
            return <FaXmark key={index} className="bg-slate-700 text-white text-xl rounded-md border border-white" />
        case "correct":
            return <FaCheck key={index} className="bg-green-500 text-white text-xl rounded-md border border-white"  />
        case "incorrect":
            return <FaXmark key={index} className="bg-red-500 text-white text-xl rounded-md border border-white"  />
    }
}

export default function ScoreBoard({guesses}: ScoreBoardProps) {
    return (
        <div className="w-full text-center space-x-2 flex flex-row items-center">
            {guesses && guesses.map((guess, index) => guessIcon(guess,index))}
        </div>
    );
}