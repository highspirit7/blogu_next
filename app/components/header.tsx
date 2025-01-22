import { Search } from 'lucide-react';
import { ThemeModeToggle } from './theme-mode-toggle';
import { Button } from '@/components/ui/button';

const Header = () => (
  // ! Box shadow 적용이 잘 안된다
  <header className="p-4 px-20 flex justify-between items-center sticky top-0 z-10 shadow-[0_0_8px_rgba(150,150,150,0.08)]">
    <h1 className="text-3xl">GrownuPrince</h1>
    <div className="flex gap-1">
      <ThemeModeToggle />
      <Button variant="ghost" size="icon">
        <Search />
      </Button>
    </div>
    {/* "shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]" */}
  </header>
);

export default Header;
