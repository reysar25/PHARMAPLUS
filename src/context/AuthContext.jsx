import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      // In a real app, you would call an API endpoint here
      // This is a simplified example
      const response = await fetch("https://api.pharmafast.example/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const userData = await response.json();
      
      // For the demo, we'll create a mock user object
      const mockUser = {
        id: "user123",
        name: "John Doe",
        email: email,
        token: "mock-jwt-token",
      };

      // Save user data to localStorage
      localStorage.setItem("user", JSON.stringify(mockUser));
      
      // Update state
      setCurrentUser(mockUser);
      setIsAuthenticated(true);
      
      return { success: true };
    } catch (error) {
      console.error("Login error:", error);
      return { 
        success: false, 
        error: error.message || "Login failed. Please try again." 
      };
    }
  };

  // Register function
  const register = async (name, email, password) => {
    try {
      // In a real app, you would call an API endpoint here
      // This is a simplified example
      const response = await fetch("https://api.pharmafast.example/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      // For the demo, we'll create a mock user object
      const mockUser = {
        id: "user123",
        name: name,
        email: email,
        token: "mock-jwt-token",
      };

      // Save user data to localStorage
      localStorage.setItem("user", JSON.stringify(mockUser));
      
      // Update state
      setCurrentUser(mockUser);
      setIsAuthenticated(true);
      
      return { success: true };
    } catch (error) {
      console.error("Registration error:", error);
      return { 
        success: false, 
        error: error.message || "Registration failed. Please try again." 
      };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  // Update user profile
  const updateProfile = async (userData) => {
    try {
      // In a real app, you would call an API endpoint here
      // This is a simplified example
      const response = await fetch("https://api.pharmafast.example/users/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.token}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Profile update failed");
      }

      // Update the user data
      const updatedUser = { ...currentUser, ...userData };
      
      // Save updated user data to localStorage
      localStorage.setItem("user", JSON.stringify(updatedUser));
      
      // Update state
      setCurrentUser(updatedUser);
      
      return { success: true };
    } catch (error) {
      console.error("Profile update error:", error);
      return { 
        success: false, 
        error: error.message || "Profile update failed. Please try again." 
      };
    }
  };

  const value = {
    currentUser,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};