"use client";

/**
 * This file is part of Seek-todo.
 * Copyright (C) 2025 Seek-todo.
 * https://seek-todo.vercel.app/
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */

import { useAuth } from "@/core/hooks/useAuth";
import showToast from "@/core/lib/utils/showToast";
import LoginTemplate from "@/core/ui/templates/LoginTemplate/LoginTemplate";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, success, error, loading, isAuthenticated } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
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
    <LoginTemplate
      handleSubmit={handleSubmit}
      loading={loading}
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
}
