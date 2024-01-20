import useAuth from "../store/useAuth";

export const login = (formData) => {
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
    })
    .catch((error) => {
      console.error("Error signing up:", error.message);
    });
};

export const signup = (formData) => {
  const { setIsLoggedIn, setIsSignUpModalOpen } = useAuth.getState();

  fetch(`http://127.0.0.1:8000/api/auth/signup`, {
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
        localStorage.setItem("token", data?.token?.access);
        localStorage.setItem("userName", data?.name);
        setIsLoggedIn(true);
        setIsSignUpModalOpen(false);
      }
    })
    .catch((error) => {
      console.error("Error signing up:", error.message);
    });
};

export const getVideosInfo = async (setVideosList) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/content/get_all_videos`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.length > 0) {
      setVideosList(data);
    }
  } catch (error) {
    console.error("Error fetching videos:", error.message);
  }
};

export const getVideoById = async (id, setVideo) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/content/get_video/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    setVideo(data);
  } catch (error) {
    console.error("Error fetching videos:", error.message);
  }
};
