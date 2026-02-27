import { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaChevronDown,
  FaBars,
  FaHeart,
  FaTimes,
} from "react-icons/fa";
import Logo from "../Images/Nykaa.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { use } from "react";
function Navbar() {
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));

    const syncUser = () => {
      const updated = localStorage.getItem("user");
      setUser(updated ? JSON.parse(updated) : null);
    };

    window.addEventListener("storage", syncUser);
    return () => window.removeEventListener("storage", syncUser);
  }, []);
  // const user = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(null);
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

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  useEffect(() => {
    fetchCategories();
  })

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCategories(res.data.data);
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  }

  useEffect(() => {
    fetchSubcategories();
  }, []);

  const fetchSubcategories = async () => {
    try {
      // Replace with your API endpoint to fetch all subcategories
      const res = await axios.get("http://localhost:5000/api/subcategories");
      setSubcategories(res.data.data);
    } catch (error) {
      console.log("Error fetching subcategories:", error);
    }
  };



  return (
    <div className="w-full">

      {/* ===== TOP BAR (DESKTOP ONLY) ===== */}
      <div className="hidden sm:flex bg-[#f2f0ed] text-[#02382a] px-6 py-2 justify-between items-center text-sm">
        <span className="flex items-center gap-2 font-medium">
          <FaWhatsapp /> Join Whatsapp Broadcast Group
        </span>


        <div className="flex items-center gap-6">
          {user ? (
            <Link to="/account" className="flex items-center gap-2">
              <FaUser /> Account
            </Link>
          ) : (
            <Link to="/signin" className="flex items-center gap-2">
              <FaUser /> Login
            </Link>
          )}

          <Link to="/wishlist" className="relative">
            <FaHeart />
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </Link>

          <Link to="/cart" className="relative">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 text-xs bg-green-500 text-white w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </Link>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <div className="bg-[#f2f0ed] shadow-md px-4 py-3">

        {/* MOBILE: Hamburger + Logo */}
        <div className="flex items-center justify-between sm:hidden">
          <button
            onClick={() => setOpenMobileMenu(true)}
            className="text-[#02382a]"
          >
            <FaBars size={22} />
          </button>

          <Link to={'/'}>
            <img src={Logo} alt="Logo" className="h-12 object-contain" />
          </Link>

          <div className="flex gap-3">
            <Link to="/wishlist">
              <FaHeart className="text-[#02382a]" />
            </Link>
            <Link to="/cart">
              <FaShoppingCart className="text-[#02382a]" />
            </Link>
          </div>
        </div>

        {/* MOBILE: Categories */}
        <div className="sm:hidden mt-3">
          <button
            onClick={() => setOpenCategory(!openCategory)}
            className="w-full h-11 bg-[#02382a] text-white rounded-md flex-1 flex justify-between items-center px-4"
          >
            All Categories
            <FaChevronDown
              className={`transition ${openCategory ? "rotate-180" : ""}`}
            />
          </button>

          {openCategory && (
            <div className="bg-white border rounded-md mt-1 shadow">
              {/* {["Women Ethnic Wear", "Jewellery", "Men", "Kids", "Footwear"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {item}
                  </div>
                )
              )} */}
              {subcategories.length > 0 ? (
                subcategories.map((sub) => (
                  <div
                    key={sub.id || sub._id}
                    className="px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {sub.name}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-sm text-gray-500">
                  No subcategories found
                </div>
              )}
            </div>
          )}
        </div>

        {/* MOBILE: Search */}
        <div className="sm:hidden mt-3 flex">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 h-11 px-4 border border-gray-300 rounded-l-md outline-none"
          />
          <button className="bg-[#02382a] text-white px-4 rounded-r-md">
            <FaSearch />
          </button>
        </div>

        {/* ===== DESKTOP HEADER ===== */}
        <div className="hidden sm:flex items-center gap-6">

          <Link to={'/'}>
            <img src={Logo} alt="Logo" className="h-16 object-contain" />
          </Link>

          {/* Search */}
          <div className="flex flex-1">
            <input
              type="text"
              placeholder="Search for products, brands..."
              className="h-12 w-full px-4 border border-gray-300 rounded-l-md"
            />
            <button className="bg-[#02382a] text-white px-5 rounded-r-md">
              <FaSearch />
            </button>
          </div>

          {/* Category */}
          <div className="relative w-60">
            <button
              onClick={() => setOpenCategory(!openCategory)}
              className="h-12 w-full bg-[#02382a] text-white rounded-md flex justify-between items-center px-4"
            >
              All Categories
              <FaChevronDown />
            </button>

            {openCategory && (
              <div className="absolute top-12 left-0 w-full bg-white border rounded shadow z-50">
                {/* {["Women Ethnic Wear", "Jewellery", "Men", "Kids", "Footwear"].map(
                    (item, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {item}
                      </div>
                    )
                  )} */}
                {/*  */}
                {subcategories.length > 0 ? (
                  subcategories.map((sub) => (
                    <div
                      key={sub.id || sub._id}
                      className="px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      {sub.name}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-sm text-gray-500">No subcategories found</div>
                )}
                {/*  */}
              </div>
            )}
          </div></div>

        {/* ===== DESKTOP MENU ===== */}
        <div className="hidden sm:flex gap-6 mt-3 text-sm font-medium text-gray-700">
          <span className="text-[#02382a] font-semibold">HOME</span>
          {/* {menuItems.map((item, i) => (
            <span key={i} className="cursor-pointer hover:text-[#02382a]">
              {item}
            </span>
          ))} */}
          {categories.map((item, i) => (
            <span key={i} className="cursor-pointer hover:text-[#02382a]">
              {item.name}
            </span>
          ))}
        </div>
      </div>

      {/* ===== MOBILE SLIDE MENU ===== */}
      {openMobileMenu && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpenMobileMenu(false)}
          />

          <div className="fixed top-0 left-0 w-72 h-full bg-white z-50 shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <Link to={'/'}><img src={Logo} alt="Logo" className="h-10" /></Link>

              <FaTimes
                className="cursor-pointer"
                onClick={() => setOpenMobileMenu(false)}
              />
            </div>

            <ul className="space-y-4 text-gray-800 font-medium">
              <li>HOME</li>
              {categories.map((item, i) => (
                <li key={i}>{item.name}</li>
              ))}
              {/* <li>Login</li> */}
              {user ? (
                <li>
                  <Link to="/account">Account</Link>
                </li>
              ) : (
                <li>
                  <Link to="/signin">Login</Link>
                </li>
              )}
              <li>Wishlist</li>
              <li>Cart</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;