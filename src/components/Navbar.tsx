import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Searchbar from './Searchbar';

interface NavbarProps {
  isSearchPage: boolean; // Prop to toggle between search and landing pages
}

const Navbar: React.FC<NavbarProps> = ({ isSearchPage }) => {
  const router = useRouter();

  const handleLogoClick = () => {
    if (router.pathname !== '/') {
      router.push('/');
    }
  };

  return (
    <nav className="w-full shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 ">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <div
            className="cursor-pointer text-lg font-bold"
            onClick={handleLogoClick}
          >
            <div className="logo-container" onClick={handleLogoClick}>
              <Image src="https://www.girmantech.com/Logo2.svg" alt="Girman Logo" width={150} height={150} />
            </div>
          </div>
        </div>

        {/* Right Side: Links */}
        <>
          {isSearchPage ? (
            <div className="w-full max-w-md">
              <Searchbar />
            </div>
          )
            : (
              <div className="flex space-x-4">
                <Link href="/" className={`${router.pathname === '/' ? 'text-blue-600 underline' : 'text-black'}`}>
                  SEARCH
                </Link>
                <a href="https://www.girmantech.com" target="_blank" className="text-black">
                  WEBSITE
                </a>
                <a
                  href="https://www.linkedin.com/company/girmantech"
                  target="_blank"
                  className="text-black"
                >
                  LINKEDIN
                </a>
                <a href="mailto:contact@girmantech.com" className="text-black">
                  CONTACT
                </a>
              </div>
            )}
        </>
      </div>
    </nav>
  );
};

export default Navbar;
