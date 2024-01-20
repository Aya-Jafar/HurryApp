import { create } from "zustand";

const useAuth = create((set) => ({
  isLoginModalOpen: false,
  isSignUpModalOpen: false,
  isLoggedIn: false,
  email: null,

  setIsLoginModalOpen: (isLoginModalOpen) => set({ isLoginModalOpen }),
  setIsSignUpModalOpen: (isSignUpModalOpen) => set({ isSignUpModalOpen }),
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  setEmail: (email) => set({ email }),
}));

export default useAuth;
