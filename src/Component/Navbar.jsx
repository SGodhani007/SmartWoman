import { useState } from "react";
import {
  FaWhatsapp,
  FaBell,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Logo from "../Images/Nykaa.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [openCategory, setOpenCategory] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const menuItems = [
    "WHOLESALE CATALOGS (WOMEN)",
    "JEWELLERY",
    "MEN",
    "KIDS",
    "FOOTWEAR",
    "HOME FURNISHING",
    "OFFER",
    "BRANDS",
  ];

  return (
    <div className="w-full relative">
      {/* ===== TOP PURPLE BAR ===== */}
      <div className="bg-[#3674B5] text-white text-sm px-4 sm:px-6 py-2 flex justify-between items-center flex-wrap">
        <div className="flex items-center gap-2 sm:gap-6 flex-wrap">
          <span className="flex items-center text-sm font-medium font-[Poppins] gap-2">
            <FaWhatsapp size={18} /> Join Whatsapp Broadcast Group
          </span>
        </div>

        <div className="bg-[#3674B5] w-full sm:w-[50%] text-white overflow-hidden mt-2 sm:mt-0">
          <div className="marquee">
            <div className="marquee-content">
              🚚 Free Shipping on Orders Above ₹999 &nbsp;&nbsp;&nbsp;
              💎 New Jewellery Collection Available Now &nbsp;&nbsp;&nbsp;
              🔥 Flat 50% OFF on Selected Items &nbsp;&nbsp;&nbsp;
            </div>
            <div className="marquee-content">
              🚚 Free Shipping on Orders Above ₹999 &nbsp;&nbsp;&nbsp;
              💎 New Jewellery Collection Available Now &nbsp;&nbsp;&nbsp;
              🔥 Flat 50% OFF on Selected Items &nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-6 mt-2 sm:mt-0 flex-wrap">
          {/* Currency */}
          <div className="relative group cursor-pointer">
            <span className="flex items-center gap-1 font-medium hover:text-yellow-300 transition">
              CURRENCY
              <FaChevronDown className="text-sm group-hover:rotate-180 transition duration-300" />
            </span>
          </div>

          {/* Login */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="bg-white/20 p-2 rounded-full group-hover:bg-yellow-400 transition duration-300">
              <FaUser className="text-white group-hover:text-purple-900 text-sm" />
            </div>
            <Link to="/SmartWoman/signin">
            <span className="font-medium group-hover:text-yellow-300 transition">
              Login
            </span>
            </Link>
          </div>

          {/* Notification */}
          <div className="relative cursor-pointer group">
            <div className="bg-white/20 p-2 rounded-full group-hover:bg-yellow-400 transition duration-300">
              <FaBell className="text-white group-hover:text-purple-900 text-sm" />
            </div>
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer group">
            <div className="bg-white/20 p-2 rounded-full group-hover:bg-yellow-400 transition duration-300">
              <FaShoppingCart className="text-white group-hover:text-purple-900 text-sm" />
            </div>
            <span className="absolute -top-1 -right-1 bg-green-500 text-xs text-white w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </div>
        </div>
      </div>

      {/* ===== LOGO + SEARCH ===== */}
      <div className="bg-white shadow-md">
        <div className="flex flex-col sm:flex-row px-4 sm:px-8 py-4 gap-4 sm:gap-6 items-start sm:items-center relative">

          {/* Hamburger Mobile (fixed left) */}
          <button
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
            className="sm:hidden absolute left-4 top-5 p-2 rounded border border-purple-900 text-purple-900 z-50"
            aria-label="Toggle Menu"
          >
            {openMobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Logo centered on mobile */}
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <Link to={'/SmartWoman'}> 
            <img
              src={Logo}
              alt=" Logo"
              className="h-16 sm:h-20 w-auto object-contain"
            /></Link>
          </div>

          {/* Search + Category */}
          <div className="flex flex-col flex-1 gap-2 w-full mt-4 sm:mt-0">

            {/* Top Row: Search + Category */}
            <div className="flex flex-col sm:flex-row gap-2 w-full">

              {/* Search Bar */}
              <div className="flex flex-1">
                <input
                  type="text"
                  placeholder="Search for products, brands..."
                  className="h-12 w-full px-4 border border-gray-300 rounded-l-md outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 transition"
                />
                <button className="h-12 bg-purple-900 text-white px-4 rounded-r-md hover:bg-purple-800 transition">
                  <FaSearch />
                </button>
              </div>

              {/* Category Button */}
              <div className="relative w-full sm:w-1/3">
                <button
                  onClick={() => setOpenCategory(!openCategory)}
                  className="h-12 w-full bg-gray-600 text-white rounded-md flex items-center justify-between px-4 hover:bg-gray-700 transition"
                >
                  All Categories
                  <FaChevronDown className={`transition-transform duration-300 ${openCategory ? "rotate-180" : ""}`} />
                </button>

                {/* CATEGORY DROPDOWN */}
                {openCategory && (
                  <div className="absolute top-12 left-0 w-full bg-white shadow-xl border rounded-md z-50">
                    <ul className="py-2 text-gray-700 max-h-48 overflow-auto">
                      {["Women Ethnic Wear","Jewellery","Men Collection","Kids Wear","Footwear"].map((item,index)=>(
                        <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:block bg-gray-100 rounded-md mt-2 w-full overflow-x-auto">
              <ul className="flex gap-2 sm:gap-4 py-2 text-gray-700 font-medium items-center min-w-max whitespace-nowrap">
                <li className="bg-purple-900 text-white px-4 py-1 rounded-md whitespace-nowrap">
                  HOME
                </li>
                {menuItems.map((item, index) => (
                  <li key={index} className="hover:text-purple-700 cursor-pointer flex items-center gap-1 whitespace-nowrap">
                    {item}
                    {item !== "BRANDS" && <FaChevronDown size={12} />}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      {openMobileMenu && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setOpenMobileMenu(false)}
          ></div>
          <nav className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 overflow-y-auto transition-transform transform duration-300 ease-in-out">
            <ul className="space-y-4 font-medium text-gray-800">
              <li className="border-b pb-2 cursor-pointer hover:text-purple-700">HOME</li>
              {menuItems.map((item, idx) => (
                <li
                  key={idx}
                  className="border-b pb-2 cursor-pointer hover:text-purple-700"
                >
                  {item}
                </li>
              ))}
              <li className="cursor-pointer hover:text-purple-700">BRANDS</li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}

export default Navbar;
