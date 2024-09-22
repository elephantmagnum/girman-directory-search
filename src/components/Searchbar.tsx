import { Input } from '@/components/ui/input'; // Assuming you're using shadcn UI components
import { useState } from 'react';
import { useRouter } from 'next/router';
import { SearchIcon } from 'lucide-react'; // You can use any icon library or shadcn's icon components

const Searchbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
          <SearchIcon size={20} />
        </span>
        <form onSubmit={handleSearch} className="flex items-center">
          <Input
            className="pl-10 pr-4 py-4 rounded-lg shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-500 caret-gray-500"
            type="text"
            placeholder="Search"
            value={searchQuery}
            style={{ color: '#6B7280', caretColor: '#6B7280' }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Searchbar;