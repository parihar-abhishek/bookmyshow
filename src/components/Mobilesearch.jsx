import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; // Search icon

function MobileSearchBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Toggle search bar visibility
  const toggleSearchBar = () => setIsSearchOpen(!isSearchOpen);

  // Handle input change for the search
  const handleInputChange = (e) => setSearchQuery(e.target.value);

  return (
    <div className="flex justify-between items-center p-4 bg-white md:hidden">
      {/* Welcome Message */}
      <h1 className="text-lg text-black">Welcome, Guest</h1>

      {/* Search Icon */}
      <FiSearch
        onClick={toggleSearchBar}
        className="text-gray-600 h-6 w-6 cursor-pointer"
      />

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute top-0 left-0 right-0 bg-white p-4 shadow-md z-10">
          <input
            type="text"
            placeholder="Search Movies"
            className="w-full px-4 py-2 border rounded-md"
            value={searchQuery}
            onChange={handleInputChange}
          />
        </div>
      )}
    </div>
  );
}

export default MobileSearchBar;
