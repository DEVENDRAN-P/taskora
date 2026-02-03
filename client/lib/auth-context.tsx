import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading delay for auth check
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setError(null);
      setLoading(true);
      // Mock authentication logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUser({ id: "user_1", email });
      setLoading(false);
    } catch (err: any) {
      const errorMessage = err.message || "Login failed";
      setError(errorMessage);
      setLoading(false);
      throw err;
    }
  };

  const logout = async () => {
    try {
      setError(null);
      setUser(null);
    } catch (err: any) {
      const errorMessage = err.message || "Logout failed";
      setError(errorMessage);
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
