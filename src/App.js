import React, { Fragment, useState } from "react";
import "./styles/App.css";
import "./styles/Header.scss";
import Header from "./components/Header";
import Login from "./components/Login";
import Password from "./components/Password";
import Description from "./components/Description";

function App() {
  // Usestate para saber si el header ha sido clickeado o no, y por tanto mostrar el mensaje de inicio o el login
  const [header, setheader] = useState(false);
  // UseState para guardar las credenciales
  const [credenciales, setcredenciales] = useState({
    username: "",
    password: "",
  });
  // UseState para saber si el usuario se ha loggeado o no
  const [loggeado, setloggeado] = useState(false);
  // UseState para el website que genera el hash
  const [website, setwebsite] = useState("");

  return (
    <Fragment>
      <Header setheader={setheader} />
      {loggeado ? (
        <Password setwebsite={setwebsite} website={website} />
      ) : header ? (
        <Login
          setcredenciales={setcredenciales}
          credenciales={credenciales}
          setloggeado={setloggeado}
        />
      ) : (
        <Description />
      )}
    </Fragment>
  );
}

export default App;
