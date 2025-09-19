import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import {productsData} from "../data/Products"





import logoDesktop from "../assets/logoDesktop.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Disable scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Function to navigate and close menu
  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

    const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length >= 2) {
      const filtered = productsData.filter((product) =>
  product.name.replace(/\s+/g, '').toLowerCase().includes(
    value.replace(/\s+/g, '').toLowerCase()
  )
);

      // Remove duplicate names if needed
      const unique = Array.from(new Map(filtered.map(p => [p.name, p])).values());

      setSuggestions(unique);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (slug) => {
    setSearch('');
    setSuggestions([]);
    window.location.href = `/products/${slug}`;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      handleSelect(suggestions[0].slug);
    }
  };

  return (
    <div>

    {/* Desktop */}
    <div className="hidden cursor-pointer fixed top-0 z-50 lg:w-full   h-[90px] bg-white m-auto   lg:flex justify-between items-center lg:px-20">
      
      <div>
        <Link className="cursor-pointer" to="/">
          <img className="lg:w-[250px]" src={logoDesktop} alt="" />
        </Link>
      </div>
      <div className="hidden lg:flex items-center gap-10 text-[#070707] font-jost lg:text-h5-mobile">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#EE1D23] font-medium" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "text-[#EE1D23] font-medium" : ""
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-[#EE1D23] font-medium" : ""
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive ? "text-[#EE1D23] font-medium" : ""
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive ? "text-[#EE1D23] font-medium" : ""
          }
        >
          Contact
        </NavLink>

         <div className="relative w-[200px] max-w-full mx-auto">
      <div className="py-2 border-[.5px] border-[#EE1D23] px-2 rounded-[5px] flex gap-4 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#757575"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="bg-transparent outline-none text-[#C6C6C6] font-jost text-subtext-desktop placeholder-[#C6C6C6] w-full"
        />
      </div>

      {suggestions.length > 0 && (
        <ul className="absolute bg-white shadow border mt-1 w-full z-10 rounded-[5px] overflow-hidden">
          {suggestions.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(item.slug)}
              className="p-2 cursor-pointer hover:bg-gray-100 text-sm"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
      </div>
    </div>
    {/* Mobile */}
    <div className="lg:hidden w-full bg-white fixed top-0 z-50 h-[60px] px-4 py-10">
  <div className="flex items-center justify-between h-full relative ">
    {/* Empty div to balance flex space on the left */}
    <div className="w-8" />

    {/* Logo - Center */}
    <Link className="absolute left-1/2 transform -translate-x-1/2" to="/">
          <img
      className="w-[200px] h-auto "
      src={logoDesktop}
      alt="logo"
    />
    </Link>
    

    {/* Menu Icon - Right */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      className="relative z-50 p-2 bg-white rounded-md"
    >
      {menuOpen ? (
        // Close icon (X)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        // Hamburger icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )}
    </button>
  </div>

  {/* Sliding menu */}
  <div
    className={`fixed top-0 right-0 h-screen bg-white shadow-lg 5-40 transition-transform duration-300 ease-in-out
    ${menuOpen ? "translate-x-0" : "translate-x-full"}
    w-[80%]`}
  >
    <nav className="flex flex-col mt-[60px] p-4 space-y-4">
      <button onClick={() => handleNavigate("/")} className="text-lg font-semibold hover:text-red-600 text-left">
        Home
      </button>
      <button onClick={() => handleNavigate("/about-us")} className="text-lg font-semibold hover:text-red-600 text-left">
        About Us
      </button>
      <button onClick={() => handleNavigate("/products")} className="text-lg font-semibold hover:text-red-600 text-left">
        Products
      </button>
      <button onClick={() => handleNavigate("/blog")} className="text-lg font-semibold hover:text-red-600 text-left">
        Blog
      </button>
      <button onClick={() => handleNavigate("/contact-us")} className="text-lg font-semibold hover:text-red-600 text-left">
        Contact Us
      </button>
      
    </nav>
  </div>
</div>





    </div>
  );
};

export default Header;
