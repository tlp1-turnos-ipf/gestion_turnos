import React from 'react';

const FooterPrincipal = () => {
  return (
    <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <img src="/img/inicio_sesion/logo.png" alt="" width="80px"/>
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary">© 2023 San Antonio, Centro de Atención</span>
      </div>
  
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg>Facebook</a></li>
        <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg>Twitter</a></li>
        <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg>Instagram</a></li>
      </ul>
    </footer>
  </div>
  );
};

export default FooterPrincipal;