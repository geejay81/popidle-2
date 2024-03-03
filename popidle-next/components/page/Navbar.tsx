import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between">
            <div className="logo">PopIdle</div>
            <ul className="flex items-stretch justify-between">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/guess-the-album">Today&apos;s puzzle</Link></li>
                <li><Link href="/album-history">Previous puzzles</Link></li>
            </ul>
        </nav>
        
    )
}