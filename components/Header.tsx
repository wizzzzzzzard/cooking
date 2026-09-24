import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Cooking</h1>
        <nav>
          <Link href="/" className="text-gray-600 hover:text-gray-800 mx-2">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-800 mx-2">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
