import { validateEmail } from "../helpers";

export const signup = (formData) => {
//   fetch("http://127.0.0.1:8000/api/auth/signup", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log("Signup successful", data);
//     })
//     .catch((error) => {
//       console.error("Error signing up:", error.message);
//     });
};

export const login = (email, password) => {
  //   if (validateEmail(email)) {
  //   }
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
      url: "https://www.youtube.com/embed/CAt2-HEIpCI?si=hQ_sdxu0vgFXlWLU",
      userName: "user 2",
    },
    {
      id: 3,
      title: "Title 3",
      url: "https://www.youtube.com/embed/CAt2-HEIpCI?si=hQ_sdxu0vgFXlWLU",
      userName: "user 3",
    },
    {
      id: 4,
      title: "Title 4",
      url: "https://www.youtube.com/embed/CAt2-HEIpCI?si=hQ_sdxu0vgFXlWLU",
      userName: "user 4",
    },
  ];
  return videos;
};
