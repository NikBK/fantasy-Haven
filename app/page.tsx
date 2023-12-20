import Link from 'next/link';
import SimpleCarousel from '@/app/ui/home/ImageCarousel';
import { lusitana } from '@/app/ui/fonts';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-full flex flex-col items-center justify-center">
      <main className="text-center">
        <h1 className={`text-4xl font-bold mb-4 text-blue-600 ${lusitana.className}`}>Welcome to Fantasy Heaven</h1>
        <h2 className="text-2xl font-bold mb-4 text-orange-400">Unleash Your Sporting Genius</h2>
        <p className="text-lg text-gray-700 mb-8">
          Craft your fantasy team, strategize, and compete for glory in the ultimate fantasy sports arena.
        </p>

        <SimpleCarousel />

        <Link href="/signup" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 hover:bg-blue-600">
          Get Started
        </Link>
      </main>

      <footer className="mt-8">
        <p className="text-gray-500 text-sm">
          &copy; 2023 Fantasy Sports App. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
