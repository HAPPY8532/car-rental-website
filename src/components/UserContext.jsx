import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setuser] = useState(null);

  // Load user from localStorage (persist login)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setuser(JSON.parse(storedUser));
  }, []);

  // Keep user synced with localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Login function
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setuser(user);
      return { success: true, message: "Login successful" };
    }
    return { success: false, message: "Invalid email or password" };
  };

  // Signup function with duplicate email check
  const signup = (newUser) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.some((u) => u.email === newUser.email);

    if (exists) {
      return { success: false, message: "Email already registered" };
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    setuser(newUser);
    return { success: true, message: "Signup successful" };
  };

  // Update profile function
  const updateProfile = (updatedUser) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users = users.map((u) =>
      u.email === user.email ? { ...u, ...updatedUser } : u
    );

    localStorage.setItem("users", JSON.stringify(users));
    setuser(updatedUser);
  };

  //  Logout function
  const logout = () => {
    setuser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setuser,
        login,
        signup,
        updateProfile,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
