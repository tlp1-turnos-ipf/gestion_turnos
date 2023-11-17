export const BotonBurger = () => {
  const toggleMenu = () => document.body.classList.toggle("open");
  return (
    <button className="burger" type="button" onClick={toggleMenu}>
      <i className="fa-solid fa-bars" />
      <i className="fa-solid fa-close" />
    </button>
  );
};
