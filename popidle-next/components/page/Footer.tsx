import Link from "next/link";
import { FaInstagram, FaSpotify, FaTwitter } from "react-icons/fa";
import { FaPersonMilitaryToPerson } from "react-icons/fa6";

const footerLinks = [
    {
        "title": "Twitter",
        "url": "https://twitter.com/popidlegame",
        "icon": <FaTwitter />
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
        <footer className="bg-black text-slate-100">
            <div className="container mx-auto max-w-screen-lg flex flex-col-reverse md:flex-row md:items-center md:justify-between p-6 space-y-4 md:space-y-0">
                <div className="inline-flex flex-row items-center space-x-4">
                    {footerLinks.map((link,index) => (
                        <Link key={index} href={link.url} title={link.title} className="p-4 border-slate-100 border-2 rounded-lg">
                            {link.icon}<span className="sr-only">Visit PopIdle on {link.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="inline-flex flex-row items-center space-x-4">
                    <Link href="/privacy-and-cookies">Privacy and cookies</Link>
                </div>
            </div>
        </footer>
    )
}