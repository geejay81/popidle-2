"use client"

import headingFont from "@/ui/fonts/headings"
import { FaMusic, FaRecordVinyl } from "react-icons/fa"

export default function Friends({gameTitle}: {gameTitle: string}) {
    return (
        <div className="p-6 rounded-lg bg-gray-700 text-white space-y-4">
            <h2 className={`text-2xl font-bold ${headingFont.className}`}>More music fun...</h2>
            <ul className="w-full rounded-lg mt-2 mb-3 text-blue-800">
                <li className="mb-1 space-y-4">
                    <a href="https://bandle.app" 
                        className="w-fill flex p-3 pl-3 bg-white text-red-900 hover:bg-gray-200 focus:bg-gray-200  rounded-lg">
                        <FaMusic className="flex-none w-6 h-full" />
                        <span className="ml-2 truncate">Bandle</span>
                    </a>
                    <a href="https://popidle.the-sound.co.uk" 
                        className="w-fill flex p-3 pl-3 bg-popidle-warning-bg text-popidle-warning-fg hover:bg-gray-200 focus:bg-gray-200  rounded-lg">
                        <FaRecordVinyl className="flex-none w-6 h-full" />
                        <span className="ml-2 truncate">PopIdle (The Original)</span>
                    </a>{ gameTitle !== 'PopIdle80s' &&
                    <a href="https://80s.popidle.app" 
                        className="w-fill flex p-3 pl-3 bg-popidle-danger-bg text-popidle-danger-fg hover:bg-gray-200 focus:bg-gray-200 hover:text-black focus:text-black rounded-lg">
                        <FaRecordVinyl className="flex-none w-6 h-full" />
                        <span className="ml-2 truncate">PopIdle 80s</span>
                    </a>}{ gameTitle !== 'PopIdle90s' &&
                    <a href="https://90s.popidle.app" 
                        className="w-fill flex p-3 pl-3 bg-popidle-info-bg text-popidle-info-fg hover:bg-gray-200 focus:bg-gray-200 rounded-lg">
                        <FaRecordVinyl className="flex-none w-6 h-full" />
                        <span className="ml-2 truncate">PopIdle 90s</span>
                    </a>}{ gameTitle !== 'PopIdle90s' &&
                    <a href="https://90s.popidle.app" 
                        className="w-fill flex p-3 pl-3 bg-black text-white hover:bg-gray-700 focus:bg-gray-700 rounded-lg">
                        <FaRecordVinyl className="flex-none w-6 h-full" />
                        <span className="ml-2 truncate">PopIdle 00s</span>
                    </a>}
                </li>
            </ul>
        </div>
    )
}