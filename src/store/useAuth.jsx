import { create } from "zustand";

const useAuth = create((set) => ({
  isLoginModalOpen: false,
  isSignUpModalOpen: false,
  isLoggedIn: false,
  // isSignup: false,

  setIsLoginModalOpen: (isLoginModalOpen) => set({ isLoginModalOpen }),
  setIsSignUpModalOpen: (isSignUpModalOpen) => set({ isSignUpModalOpen }),
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  // setIsSignUp: (isSignup) => set({ isSignup }),
}));

export default useAuth;
