import { BotonsAdmin } from "../../assets/js/botons";
import { User } from "../User";
export const NavWindowAdmin = () => {
  return (
    <section className="w-100">
      <User />
      <div className="px-5">
        <h3
          className="fw-bold my-5"
          style={{
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
          }}
        >
          Navegación de Pantallas
        </h3>
        <div className="row">
          {BotonsAdmin.map((boton, index) => (
            <div key={index} className="col-sm-6 mb-6 mb-sm-0">
              <div className="card m-2 shadow rounded border">
                <img
                  src={boton.src}
                  alt=""
                  width={boton.width}
                  style={boton.style}
                />
                <a href={boton.to} className="btn">
                  <div className="card-body">
                    <p className="card-title text-center">{boton.title}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
