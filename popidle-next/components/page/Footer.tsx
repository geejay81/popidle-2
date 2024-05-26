import Link from "next/link";
import { FaInstagram, FaSpotify } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerLinks = [
    {
        "title": "X",
        "url": "https://x.com/popidlegame",
        "icon": <FaXTwitter />
    },
    {
        "title": "Instagram",
        "url": "https://www.instagram.com/popidlegame/",
        "icon": <FaInstagram />
    },
    {
        "title": "Spotify",
        "url": "https://open.spotify.com/playlist/1bii3CyhDqTkqM1fvQ0t3U",
        "icon": <FaSpotify />
    }
]

export default function Footer() {
    return (
        <footer className="bg-white text-slate-700 border-t border-slate-700">
            <div className="container mx-auto max-w-screen-lg flex flex-col-reverse md:flex-row md:items-center md:justify-between p-6 space-y-4 md:space-y-0">
                <div className="inline-flex flex-row items-center space-x-4">
                    {footerLinks.map((link,index) => (
                        <Link key={index} href={link.url} title={link.title} className="p-2">
                            {link.icon}<span className="sr-only">Visit PopIdle on {link.title}</span>
                        </Link>
                    ))}
                    <a href="#" id="open_preferences_center">Cookie consent</a>
                </div>
            </div>
        </footer>
    )
}