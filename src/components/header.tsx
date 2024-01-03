// components/Header.tsx
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  // Add any additional props as needed
}

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-blue-gray-900 p-4 text-white flex justify-between items-center">
      {/* Logo on the left */}
      <div className="flex items-center">
        <span className="text-xl font-bold">Pros Shop</span>
      </div>

      {/* Search input in the middle */}
      <div className="flex-grow flex mx-4 justify-center items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className=" w-[970px] px-4 py-2 rounded-full border-none bg-white text-black"
          />
          <button className="absolute top-1/2 transform -translate-y-1/2 right-2">
            <SearchIcon className="text-black" />
          </button>
        </div>
      </div>

      {/* Add to cart button, deliver to dropdown, and sign in button on the right */}
      <div className="flex items-center space-x-4">
        <button>
          <ShoppingCartIcon />
        </button>
        <button>
          <span>عربي</span>
        </button>
        <div className="relative">
          <button className=" px-4 py-2 rounded-md">Deliver to</button>
          {/* Dropdown content */}
        </div>
        <button className="" onClick={() => navigate("/")}>
          <ExitToAppIcon />
          <span>Sign In</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
