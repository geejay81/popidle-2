import Link from "next/link";

export default function Navbar() {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
                <Link href="/guess-the-album">Today&apos;s puzzle</Link>
                <Link href="/album-history">Previous puzzles</Link>
            </li>
        </ul>
    )
}