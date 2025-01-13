import { useState } from "react";
import { mockAuthService } from "../lib/services/mockAuthService";
import Cookies from "js-cookie";
import { useUserStore } from "../store/taskStore";

export const useAuth = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const { setUser } = useUserStore()

  const login = async (username: string, password: string) => {
    setLoading(true);
    try {
      const response = await mockAuthService.login(username, password);
      if (response.token) {
        localStorage.setItem("token", response.token);  // To middleware
        Cookies.set("user_role", response.user.role); // To middleware

        setUser(response.user);
      }
      setSuccess(true);
    } catch (error) {
      setError(error as Error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setLoading(true);
    localStorage.removeItem("token");
    Cookies.remove("user_role");
    setUser({ name: "John Doe", email: "john.doe@example.com", role: "user" });
    setSuccess(false);
    setError(null);
    setLoading(false);

    window.location.href = "/";
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    }
    return false;
  };

  return { login, logout, success, error, loading, isAuthenticated };
};
