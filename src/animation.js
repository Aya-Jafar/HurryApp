export const handleMouseMove = (e, id) => {
  const { clientX, clientY } = e;
  const card = document.getElementById(id);
  const { left, top, width, height } = card.getBoundingClientRect();
  const mouseX = clientX - left;
  const mouseY = clientY - top;
  const rotationX = 5 - (10 * mouseY) / height;
  const rotationY = (10 * mouseX) / width - 5;
  card.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
};

export const handleMouseLeave = (e, id) => {
  const card = document.getElementById(id);
  card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
};
