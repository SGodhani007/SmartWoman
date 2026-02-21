import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import B1 from "../Images/login-model.jpg";

export default function AuthSplit() {
  const [mode, setMode] = useState("login"); // login | otp | register

  const isLoginSide = mode === "login" || mode === "otp";

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[1100px] h-[600px] bg-white rounded-xl overflow-hidden flex relative">

        {/* IMAGE */}
        <AnimatePresence mode="wait">
          {isLoginSide ? (
            <motion.div
              key="login-image"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="w-1/2 h-full"
            >
              <img src={B1} alt="" className="w-full h-full object-cover" />
            </motion.div>
          ) : (
            <motion.div
              key="register-image"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="w-1/2 h-full order-1"
            >
              <img src={B1} alt="" className="w-full h-full object-cover" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* FORM */}
        <div className="w-1/2 h-full flex items-center justify-center p-10">
          <AnimatePresence mode="wait">

            {/* LOGIN */}
            {mode === "login" && (
              <motion.div
                key="login-form"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md"
              >
                <h2 className="text-3xl font-semibold mb-2">Sign in</h2>
                <p className="text-gray-500 mb-6">
                  Sign in if you have an account in here
                </p>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-100 outline-none"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full mb-2 px-4 py-3 rounded-lg bg-gray-100 outline-none"
                />

                <div className="text-right text-sm text-gray-500 mb-6 cursor-pointer">
                  Forgot Password?
                </div>

                <button className="w-full bg-[#7b6248] text-white py-3 rounded-lg font-medium">
                  SIGN IN
                </button>

                {/* OTP LINK */}
                <p className="text-center text-sm text-gray-500 mt-4">
                  Login with{" "}
                  <span
                    onClick={() => setMode("otp")}
                    className="underline cursor-pointer"
                  >
                    OTP
                  </span>
                </p>

                {/* REGISTER */}
                <p className="text-center text-sm text-gray-500 mt-2">
                  Not a member?{" "}
                  <span
                    onClick={() => setMode("register")}
                    className="underline cursor-pointer"
                  >
                    Sign up
                  </span>
                </p>
              </motion.div>
            )}

            {/* OTP LOGIN */}
            {mode === "otp" && (
              <motion.div
                key="otp-form"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md"
              >
                <h2 className="text-3xl font-semibold mb-2">OTP Login</h2>
                <p className="text-gray-500 mb-6">
                  Enter your mobile to receive OTP
                </p>

                <input
                  type="tel"
                  placeholder="Mobile number"
                  className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-100 outline-none"
                />

                <button className="w-full bg-[#7b6248] text-white py-3 rounded-lg font-medium mb-4">
                  Send OTP
                </button>

                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-100 outline-none"
                />

                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium">
                  Verify OTP
                </button>

                {/* BACK TO EMAIL */}
                <p className="text-center text-sm text-gray-500 mt-4">
                  Login with{" "}
                  <span
                    onClick={() => setMode("login")}
                    className="underline cursor-pointer"
                  >
                    Email
                  </span>
                </p>

                {/* REGISTER */}
                <p className="text-center text-sm text-gray-500 mt-2">
                  Not a member?{" "}
                  <span
                    onClick={() => setMode("register")}
                    className="underline cursor-pointer"
                  >
                    Sign up
                  </span>
                </p>
              </motion.div>
            )}

            {/* REGISTER */}
            {mode === "register" && (
              <motion.div
                key="register-form"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md"
              >
                <h2 className="text-3xl font-semibold mb-2">Register</h2>
                <p className="text-gray-500 mb-6">
                  Create your new account
                </p>

                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-100 outline-none"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-100 outline-none"
                />

                <input
                  type="password"
                  placeholder="Create password"
                  className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-100 outline-none"
                />

                <button className="w-full bg-[#7b6248] text-white py-3 rounded-lg font-medium">
                  REGISTER
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Already have an account?{" "}
                  <span
                    onClick={() => setMode("login")}
                    className="underline cursor-pointer"
                  >
                    Login
                  </span>
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}