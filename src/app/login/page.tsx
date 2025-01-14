"use client";

import { useAuth } from "@/core/hooks/useAuth";
import showToast from "@/core/lib/utils/showToast";
import Button from "@/core/ui/atoms/Button/Button";
import { Input } from "@/core/ui/atoms/Input/Input";
import Card, {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/core/ui/molecules/Card/Card";
import { InputPassword } from "@/core/ui/molecules/InputPassword/InputPassword";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, success, error, loading, isAuthenticated } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  useEffect(() => {
    if (isAuthenticated()) {
      window.location.href = "/";
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (success) {
      showToast("Login successful");
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      showToast("Invalid username or password", "error");
    }
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Toaster />
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Login
          </CardTitle>
          <CardDescription className="text-center text-gray-500">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2 flex flex-col">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                value={email}
                onChange={(element) => setEmail(element.target.value)}
                required
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="password">Password</label>
              <InputPassword
                id="password"
                type="password"
                value={password}
                onChange={(element) => setPassword(element.target.value)}
                required
                placeholder="Your password"
              />
            </div>
            <Button type="submit" className="w-full" loading={loading}>
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
