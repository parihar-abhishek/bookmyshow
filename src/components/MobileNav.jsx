import { NavLink } from 'react-router-dom'; 
import { FaHome, FaFilm, FaCalendarAlt, FaUser } from 'react-icons/fa';

function MobileNavbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#f5f5f5] shadow-lg flex justify-around py-2 md:hidden">
      <NavLink
        to="/"
        className="flex flex-col items-center text-gray-600 hover:text-[#F84464] focus:outline-none"
        activeClassName="text-red-500" 
      >
        <FaHome className="h-6 w-6" />
        <span className="text-xs">Home</span>
      </NavLink>

      <NavLink
        to="/movies"
        className="flex flex-col items-center text-gray-600 hover:text-[#F84464] focus:outline-none"
        activeClassName="text-red-500" 
      >
        <FaFilm className="h-6 w-6" />
        <span className="text-xs">Movies</span>
      </NavLink>

      <NavLink
        to="/live-events"
        className="flex flex-col items-center text-gray-600 hover:text-[#F84464] focus:outline-none"
        activeClassName="text-red-500" 
      >
        <FaCalendarAlt className="h-6 w-6" />
        <span className="text-xs">Live Events</span>
      </NavLink>

      <NavLink
        to="/profile"
        className="flex flex-col items-center text-gray-600 hover:text-[#F84464] focus:outline-none"
        activeClassName="text-red-500" 
      >
        <FaUser className="h-6 w-6" />
        <span className="text-xs">Profile</span>
      </NavLink>
    </div>
  );
}

export default MobileNavbar;
