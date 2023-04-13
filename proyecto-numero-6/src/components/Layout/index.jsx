import React from "react";
import Header from "../NavBar";
import { useLocation } from "react-router-dom";
import { Footer } from "../Footer";

function Layout({ children }) {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/registro" ? (
        <> {children} </>
      ) : (
        <>
          <Header />
          {children}

          {location.pathname === "/perfil" ? null : <Footer />}
        </>
      )}
    </>
  );
}

export { Layout };
