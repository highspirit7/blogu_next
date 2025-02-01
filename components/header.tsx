import Link from 'next/link';
import { Search } from 'lucide-react';

import { ThemeModeToggle } from './theme-mode-toggle';
import { Button } from '@/components/ui/button';

const Header = () => (
  <header className="w-full p-4 fixed top-0 z-10 backdrop-blur-[4px]  shadow-[0_0_16px_rgba(125,125,125,0.16)]">
    <div className="max-w-screen-xl mx-auto flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl font-bold hover:text-emerald-600 transition-colors duration-300">
          {"Laffee's blogu"}
        </h1>
      </Link>
      <div className="flex gap-1">
        <ThemeModeToggle />

        <Button variant="ghost" size="icon">
          <Link href="/search">
            <Search aria-label="search" />
          </Link>
        </Button>
      </div>
    </div>
  </header>
);

export default Header;
