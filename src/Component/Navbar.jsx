import { useState } from "react";
import {

  FaWhatsapp,
  FaBell,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaChevronDown,
} from "react-icons/fa";
import Logo from "../Images/Nykaa.png";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full relative">

      {/* ===== TOP PURPLE BAR ===== */}
      <div className="bg-[#3674B5] text-white text-sm px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-6">

          <span className="flex items-center text-sm font-medium font-[Poppins] gap-2">
            <FaWhatsapp size={18} /> Join Whatsapp Broadcast Group
          </span>
        </div>

        <div className="bg-[#3674B5] w-[50%] text-white overflow-hidden">
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



        <div className="flex items-center gap-6">

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
            <span className="font-medium group-hover:text-yellow-300 transition">
              Login
            </span>
          </div>

          {/* Notification */}
          <div className="relative cursor-pointer group">
            <div className="bg-white/20 p-2 rounded-full group-hover:bg-yellow-400 transition duration-300">
              <FaBell className="text-white group-hover:text-purple-900 text-sm" />
            </div>

            {/* Notification badge */}
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer group">
            <div className="bg-white/20 p-2 rounded-full group-hover:bg-yellow-400 transition duration-300">
              <FaShoppingCart className="text-white group-hover:text-purple-900 text-sm" />
            </div>

            {/* Cart badge */}
            <span className="absolute -top-1 -right-1 bg-green-500 text-xs text-white w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </div>

        </div>

      </div>
      {/* Done till here */}
      {/* ===== LOGO + SEARCH ===== */}
      <div className="bg-white shadow-md">

        {/* ===== LOGO + Search + Category ===== */}
        <div className="flex px-8 py-4 gap-6 items-start">

          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={Logo}
              alt="Wholetex Logo"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Search + Category Row */}
          <div className="flex flex-col flex-1 gap-2">

            {/* Top Row: Search Bar + Category Button */}
            <div className="flex gap-2 w-full">

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
              <div className="relative w-1/3">
                <button
                  onClick={() => setOpen(!open)}
                  className="h-12 w-full bg-gray-600 text-white rounded-md flex items-center justify-between px-4 hover:bg-gray-700 transition"
                >
                  All Categories
                  <FaChevronDown className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                </button>

                {/* CATEGORY DROPDOWN */}
                {open && (
                  <div className="absolute top-12 left-0 w-full bg-white shadow-xl border rounded-md z-50">
                    <ul className="py-2 text-gray-700">
                      {[
                        "Women Ethnic Wear",
                        "Jewellery",
                        "Men Collection",
                        "Kids Wear",
                        "Footwear",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

            </div>

            {/* Bottom Row: Main Menu */}
            <div className="bg-gray-100 rounded-md mt-2 w-full">
              <ul className="flex gap-4 py-2 text-gray-700 font-medium items-center">
                <li className="bg-purple-900 text-white px-4 py-1 rounded-md">
                  HOME
                </li>
                {[
                  "WHOLESALE CATALOGS (WOMEN)",
                  "JEWELLERY",
                  "MEN",
                  "KIDS",
                  "FOOTWEAR",
                  "HOME FURNISHING",
                  "OFFER",
                  "BRANDS",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-purple-700 cursor-pointer flex items-center gap-1"
                  >
                    {item}
                    {item !== "BRANDS" && <FaChevronDown size={12} />}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
