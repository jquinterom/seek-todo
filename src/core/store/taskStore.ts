import { create } from 'zustand'
import { UserModel } from '../models/UserModel'

interface UserStoreType {
  user: UserModel
  setUser: (user: UserModel) => void
}

export const useUserStore = create<UserStoreType>()((set) => ({
  user: { name: 'John Doe', email: 'john.doe@example.com', role: 'user' },
  setUser: (user: UserModel) => set({ user }),
}))
