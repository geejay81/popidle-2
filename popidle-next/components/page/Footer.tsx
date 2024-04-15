import Link from "next/link";
import { FaInstagram, FaSpotify, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-slate-200 text-black">
            <div className="container mx-auto max-w-5xl px-4 py-8 space-x-4
                flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="inline-flex flex-row items-center space-x-6">
                    <Link href="https://twitter.com/popidlegame" title="Twitter"       className="p-4 border-slate-700 border rounded-lg">
                        <FaTwitter /><span className="sr-only">Visit PopIdle on Twitter</span>
                    </Link>
                    <Link href="https://www.instagram.com/popidlegame/" title="Instagram" className="p-4 border-slate-700 border rounded-lg">
                        <FaInstagram /><span className="sr-only">Visit PopIdle on Instagram</span>
                    </Link>
                    <Link href="https://open.spotify.com/playlist/1bii3CyhDqTkqM1fvQ0t3U" title="Instagram" className="p-4 border-slate-700 border rounded-lg">
                        <FaSpotify /><span className="sr-only">Visit the PopIdle playlist on Spotify</span>
                    </Link>
                </div>
                <div>
                    Right Link
                </div>
            </div>
        </footer>
    )
}