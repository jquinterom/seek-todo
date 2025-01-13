import { create } from 'zustand'
import { UserType } from '../types/userType'

interface UserStoreType {
  user: UserType
  setUser: (user: UserType) => void
}

export const useUserStore = create<UserStoreType>()((set) => ({
  user: { name: 'John Doe', email: 'john.doe@example.com', role: 'user' },
  setUser: (user: UserType) => set({ user }),
}))
