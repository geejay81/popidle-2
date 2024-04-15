import logo from "@/ui/fonts/logo";
import Link from "next/link";
import { FaRecordVinyl, FaHome, FaPuzzlePiece, FaCalendar } from 'react-icons/fa';
 
const navLinks = [
    {
        "title": "Home",
        "url": "/",
        "icon": <FaHome className="inline" />
    },
    {
        "title": "Today's Album",
        "url": "/guess-the-album",
        "icon": <FaPuzzlePiece className="inline" />
    },
    {
        "title": "History",
        "url": "/album-history",
        "icon": <FaCalendar className="inline" />
    }
]

export default function Navbar() {
    return (
        <header className="bg-slate-700 text-white">
            <nav className="container mx-auto max-w-5xl flex items-center justify-between p-4">
                <div className="text-2xl md:text-3xl">
                    <Link href="/" className={`${logo.className} space-x-1`}>
                        <FaRecordVinyl className="inline" />
                        <span>PopIdle</span>
                    </Link>
                </div>
                <div className="space-x-5">
                    {navLinks &&
                        navLinks
                            .map((link: any) => (
                            <Link 
                                key={link.url} 
                                href={link.url} 
                                className="inline-flex flex-row items-center space-x-2"
                                title={link.title}>
                                {link.icon}
                                <span className="sr-only md:not-sr-only">{link.title}</span>
                            </Link>
                        ))
                    }
                </div> 
            </nav>
        </header>
    )
}
