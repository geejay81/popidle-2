import logo from "@/ui/fonts/logo";
import Link from "next/link";
import { FaRecordVinyl, FaHome, FaPuzzlePiece, FaCalendar, FaPlus } from 'react-icons/fa';
import gameConfig from "@/data/config/game-config";
 
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
    },
    {
        "title": "More Games",
        "url": "/games",
        "icon": <FaPlus className="inline" />
    }
]

export default function Navbar() {
    return (
        <nav className="navbar-section">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <Link href="/" className={`${logo.className} space-x-1`}
                        prefetch={false}
                    >
                        <FaRecordVinyl className="inline" />
                        <span>{gameConfig.gameTitle}</span>
                    </Link>
                </div>
                <div className="space-x-5">
                    {navLinks &&
                        navLinks
                            .map((link: any) => (
                            <Link 
                                key={link.url} 
                                href={link.url} 
                                className="navbar-link"
                                title={link.title}
                                prefetch={false}>
                                {link.icon}
                                <span className="navbar-link-text">{link.title}</span>
                            </Link>
                        ))
                    }
                </div> 
            </div>
        </nav>
    )
}
