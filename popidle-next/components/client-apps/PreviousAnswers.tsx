
"use client"

import { Guess } from "@/types/Guess";
import headingFont from "@/ui/fonts/headings";
import { FaSquare } from "react-icons/fa";
import { FaSquareCheck, FaSquareXmark } from "react-icons/fa6";

type PreviousAnswersProps = {
    guesses: Guess[]
}

export default function PreviousAnswers({ guesses }: PreviousAnswersProps) {
    const getResultIcon = (result: string) => {
        switch (result) {
            case "skipped":
                return <FaSquareXmark className="text-slate-500 text-2xl" />
            case "correct":
                return <FaSquareCheck className="text-popidle-success-bg text-2xl" />
            case "incorrect":
                return <FaSquareXmark className="text-popidle-danger-bg text-2xl" />
            default:
                return <FaSquare className="text-slate-200 text-2xl" />
        }
    }
    return <>
        {guesses.length > 0 && (
            <div className="previous-answers">
                <h2 className={`${headingFont.className}`}>
                    Previous guesses
                </h2>
                <ol className="previous-answers-list">
                    {guesses.slice(-6).map((guess: Guess, index: number) => (
                        <li
                            key={index}
                        >
                            <span className="font-medium">{guess.answer && guess.answer.length > 0 ? guess.answer : "(Skipped)"}{guess.result === 'skipped' || <i className="sr-only">{guess.result}</i>}</span>
                            <span>{getResultIcon(guess.result)}</span>
                        </li>
                    ))}
                </ol>
            </div>
        )}
    </>
}