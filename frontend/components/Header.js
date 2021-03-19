import Link from 'next/link';
import Nav from './Nav'

export default function Haeder() {
    return (
        <header>
            <div className="bar">
                <Link href="/">Sick fits</Link>
            </div>
            <div className="sub-bar">
                <p>Search</p>
            </div>
            <Nav />
        </header>
    );
}