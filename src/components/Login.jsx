import React, { useState } from "react";
import "../styles/Login.scss";

const Login = ({ setcredenciales, credenciales, setloggeado }) => {
  // Destructuring para usar el nombre y credenciales
  const { username, password } = credenciales;

  // UseState para saber si se han llenado los campos
  const [error, seterror] = useState(false);
  // Esta función permite saber si los campos están vacíos, y de estarlo, devuelve true
  const camposVacios = () => {
    if (username.trim() === "" || password.trim() === "") {
      return true;
    } else {
      return false;
    }
  };

  // Esta función envía las credenciales para el usestate, por lo que debe validarlos antes
  const enviarCredenciales = (e) => {
    // Evita que se envíen datos como post
    e.preventDefault();
    // Verificamos que los campos no estén vacíos
    const vacio = camposVacios();
    // De haber un campo vacío, hacemos que aparezca un mensjae de error mediante el usestate seterror y retornamos la función
    if (vacio) {
      seterror(true);
      return;
    }
    // Una vez que no haya ningún error, el mensaje pasa a ser false
    seterror(false);
    // Le damos señal al useState 'loggeado' de que el usuario ha sido loggeado para que pueda mostrarse el form de sitio web
    setloggeado(true);
  };

  // Esta función permite guardar las credenciales del usuario conforme vaya escribiendo
  const guardarCredenciales = (e) => {
    setcredenciales({
      ...credenciales,
      [e.target.name]: e.target.value,
    });
    console.log(credenciales);
  };

  // Return principal
  // TODO: Agregar login y darle formato
  return (
    <form className="login" onSubmit={enviarCredenciales}>
      {error ? (
        <div className="msjerror">Todos los campos son obligatorios</div>
      ) : null}
      <input
        type="text"
        name="username"
        placeholder="Usuario"
        value={username}
        onChange={guardarCredenciales}
        id="f1"
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={password}
        onChange={guardarCredenciales}
        id="f2"
      />
      {camposVacios() ? null : <button>Enviar</button>}
    </form>
  );
};

export default Login;
