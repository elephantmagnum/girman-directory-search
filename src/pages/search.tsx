import Navbar from '@/components/Navbar';
import ContactCard from '@/components/ContactCard';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Person {
  first_name: string;
  last_name: string;
  city: string;
  contact_number: string;
}

const SearchResults: React.FC = () => {
  const [results, setResults] = useState<Person[]>([]);
  const router = useRouter();
  const { query } = router.query; // Get the query parameter from the URL

  useEffect(() => {
    // Fetch data from your API
    const fetchData = async () => {
      if (query) {
        console.log("Query Param: ", query);
        try {
          const response = await fetch(`/api/search?query=${query}`)
          const data = await response.json();
          setResults(data);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-t from-blue-800 to-white">
      {/* Navbar at the top */}
      <Navbar isSearchPage={true} />

      {/* Main content area */}
      <div className="flex-grow w-full max-w-6xl mx-auto px-4 py-8">
        {/* Cards container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((person, index) => (
            <ContactCard key={index} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

