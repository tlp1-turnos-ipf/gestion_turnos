export const User = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div
      className="p-5 fw-bold fs-5 text-white"
      style={{
        height: 1,
        background:
          "linear-gradient(100deg, rgb(2, 0, 31), 70%, rgb(0, 0, 87))",
      }}
    >
      {user.nombre_usuario}
    </div>
  );
};
