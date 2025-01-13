import { UserType } from "@/core/types/userType";

export interface LoginResponse {
  token: string;
  user: UserType;
}

export const mockAuthService = {
  login: (username: string, password: string): Promise<LoginResponse> =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "john.doe@example.com" && password === "password") {
          resolve({
            token: "mockToken1234",
            user: { name: "Admin User", email: "admin@example.com", role: "admin" },
          });
        } else {
          reject(new Error("Invalid username or password"));
        }
      }, 1000);
    }),
};
