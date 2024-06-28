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
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-flex">
                    {footerLinks.map((link,index) => (
                        <Link key={index} href={link.url} title={link.title} className="p-2"
                            prefetch={false}>
                            {link.icon}<span className="sr-only">Visit PopIdle on {link.title}</span>
                        </Link>
                    ))}
                    <a href="#" id="open_preferences_center">Cookie consent</a>
                </div>
            </div>
        </footer>
    )
}