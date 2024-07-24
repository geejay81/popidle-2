"use client"

import headingFont from "@/ui/fonts/headings";
import { getHistoryState } from "../client-lib/StateManager";
import { IHistoryState } from "@/types/History";

export default function GameHistory() {

    const historyStats: IHistoryState = getHistoryState();

    return (
        <div className="p-6 rounded-lg bg-popidle-info-bg text-popidle-info-fg space-y-4">
            <h2 className={`text-2xl font-bold ${headingFont.className}`}>Rising up the Charts!</h2>
            <dl className="max-w-md text-slate-900 grid grid-cols-2 gap-4">
                <div>
                    <dt className="mb-1 text-slate-800 md:text-lg text-center">Current streak</dt>
                    <dd className="text-lg font-semibold text-center">{historyStats.currentStreak}</dd>
                </div>
                <div>
                    <dt className="mb-1 text-slate-800 md:text-lg text-center">Max streak</dt>
                    <dd className="text-lg font-semibold text-center">{historyStats.maxStreak}</dd>
                </div>
                <div>
                    <dt className="mb-1 text-slate-800 md:text-lg text-center">Games won</dt>
                    <dd className="text-lg font-semibold text-center">{historyStats.gamesWon}/{historyStats.gamesPlayed}</dd>
                </div>
                <div>
                    <dt className="mb-1 text-slate-800 md:text-lg text-center">Games won</dt>
                    <dd className="text-lg font-semibold text-center">{historyStats.winPercentage.toFixed(2)}%</dd>
                </div>
            </dl>
        </div>
    );
}