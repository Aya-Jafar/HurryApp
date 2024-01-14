import { validateEmail } from "../helpers";
import useAuth from "../store/useAuth";

export const login = (formData) => {
  //   const { email , password } = formData;
  const { setIsLoggedIn, setIsLoginModalOpen } = useAuth.getState();

  fetch(`http://127.0.0.1:8000/api/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.token.access) {
        localStorage.setItem("token", data.token.access);
        setIsLoggedIn(true);
        setIsLoginModalOpen(false);
      }
      console.log("successful", data);
    })
    .catch((error) => {
      console.error("Error signing up:", error.message);
    });
};

export const signup = (formData) => {
  const { setIsLoggedIn, setIsSignUpModalOpen } = useAuth.getState();

  fetch(`http://127.0.0.1:8000//api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.token.access) {
        localStorage.setItem("token", data.token.access);
        setIsLoggedIn(true);
        setIsSignUpModalOpen(false);
      }
      console.log("Signup successful", data);
    })
    .catch((error) => {
      console.error("Error signing up:", error.message);
    });
};

export const getVideosInfo = () => {
  const videos = [
    {
      id: 1,
      title: "Title 1",
      url: "https://www.youtube.com/embed/CAt2-HEIpCI?si=hQ_sdxu0vgFXlWLU",
      userName: "user 1",
    },
    {
      id: 2,
      title: "Title 2",
      url: "https://www.youtube.com/embed/wZreAuJwMZ8?si=Ve3EYEk3i6N8hSbV",
      userName: "user 2",
    },
    {
      id: 3,
      title: "Title 3",
      url: "https://www.youtube.com/embed/JY2McN-MZFc?si=vuGDN_mMxd5yEImT",
      userName: "user 3",
    },
    {
      id: 4,
      title: "Title 4",
      url: "https://www.youtube.com/embed/nD6qsOPTaKQ?si=95TMVUOxzMlf4FmX",
      userName: "user 4",
    },
  ];
  return videos;
};
