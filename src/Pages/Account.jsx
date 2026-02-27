import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Account() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);

  // Load local user
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) {
      navigate("/signin");
      return;
    }
    const parsed = JSON.parse(stored);
    setUser(parsed);

    fetchUser(parsed.email);
  }, []);

  // Fetch full user from DB
  const fetchUser = async (email) => {
    try {
      const res = await fetch(`${API_URL}/api/auth/user/${email}`);
      const data = await res.json();
      if (data.success) {
        setDbUser(data.user);
      }
    } catch (e) {
      console.log("User fetch error", e);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("loginMethod");
    navigate("/signin");
  };

  if (!user) return null;

  return (
    <div className="max-w-xl font-[Poppins] mx-auto mt-10 bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-6 text-[#02382a]">
        My Account
      </h2>

      <div className="space-y-3 text-gray-700">
        <div>
          <span className="font-medium">Name:</span>{" "}
          {dbUser?.name || "—"}
        </div>

        <div>
          <span className="font-medium">Email:</span>{" "}
          {dbUser?.email || user.email}
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="mt-8 cursor-pointer bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}

export default Account;