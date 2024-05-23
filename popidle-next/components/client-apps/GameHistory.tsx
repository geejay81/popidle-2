"use client"

import headingFont from "@/ui/fonts/headings";
import { getHistoryState } from "../client-lib/StateManager";
import { IHistoryState } from "@/types/History";

export default function GameHistory() {

    const historyStats: IHistoryState = getHistoryState();

    return (
        <div className="p-6 rounded-lg bg-slate-200 text-black space-y-4">
            <h2 className={`text-2xl font-bold ${headingFont.className}`}>Rising up the Charts!</h2>
            <dl className="max-w-md text-slate-900">
                <dt className="mb-1 text-slate-800 md:text-lg">Current streak</dt>
                <dd className="text-lg font-semibold">{historyStats.currentStreak}</dd>
                <dt className="mb-1 text-slate-800 md:text-lg">Max streak</dt>
                <dd className="text-lg font-semibold">{historyStats.maxStreak}</dd>
                <dt className="mb-1 text-slate-800 md:text-lg">Games played</dt>
                <dd className="text-lg font-semibold">{historyStats.gamesPlayed}</dd>
                <dt className="mb-1 text-slate-800 md:text-lg">Games won</dt>
                <dd className="text-lg font-semibold">{historyStats.gamesWon}</dd>
            </dl>
        </div>
    );
}