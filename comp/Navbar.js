import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>Lister</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/About">
        <a>About</a>
      </Link>
      <Link href="/Lists">
        <a>Lists</a>
      </Link>
    </nav>
  );
}
