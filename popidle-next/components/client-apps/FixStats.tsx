"use client"

import { useState } from "react";
import { getHistoryState } from "../client-lib/StateManager";

const statistics = getHistoryState();

console.log(statistics);

export default function FixStats() {
    const [history, setHistory] = useState(JSON.stringify(statistics));
    
    return (
        <textarea value={history} className="border border-black"></textarea>
    )
}