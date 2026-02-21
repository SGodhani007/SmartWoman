import React from "react";
import bg from "../Images/footer-bg.png";

const Footer = () => {
  return (
    <footer
      className="w-full text-gray-700 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Main Footer */}
      <div className="bg-white/90">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* QUICK LINKS */}
          <div className="md:border-r md:pr-8 border-gray-300">
            <h4 className="font-semibold text-lg mb-4 border-b-2 border-purple-700 inline-block pb-1">
              QUICK LINKS
            </h4>
            <ul className="space-y-3 mt-4">
              <li>Contact, About us & FAQs</li>
              <li>Write / Inquiry to us</li>
              <li>Return / Replace / Refund</li>
              <li>How To Order</li>
              <li>Terms And Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* MY ACCOUNT */}
          <div className="md:border-r md:px-8 border-gray-300">
            <h4 className="font-semibold text-lg mb-4 border-b-2 border-purple-700 inline-block pb-1">
              MY ACCOUNT
            </h4>
            <ul className="space-y-3 mt-4">
              <li>My Account</li>
              <li>Wish List</li>
              <li>Order History</li>
              <li>LOGIN/REGISTER</li>
              <li>WALLET</li>
            </ul>
          </div>

          {/* CONTACT DETAIL */}
          <div className="md:border-r md:px-8 border-gray-300">
            <h4 className="font-semibold text-lg mb-4 border-b-2 border-purple-700 inline-block pb-1">
              CONTACT DETAIL
            </h4>

            <div className="space-y-3 mt-4">
              <p className="text-sm font-medium">FOR INQUIRY</p>

              <p className="flex items-center gap-2">
                📞 9327773330
              </p>
              <p className="flex items-center gap-2">
                📞 9327773330
              </p>
              <p className="flex items-center gap-2">
                ✉️ info@smartwoman.com
              </p>
            </div>
          </div>

          {/* GET IN TOUCH */}
          <div className="md:pl-8">
            <h4 className="font-semibold text-lg mb-4 border-b-2 border-purple-700 inline-block pb-1">
              GET IN TOUCH
            </h4>

            <p className="mt-4 flex gap-2">
              446, Millenium Textile Market-2 Anjana Farm, Surat, GJ, IN-395010
            </p>

            <div className="flex gap-4 mt-6 text-2xl">
              <span>📷</span>
              <span>▶️</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-sm py-4 border-t border-gray-300">
          © 2024 Smart Woman. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;