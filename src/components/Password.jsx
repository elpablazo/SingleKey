import React from "react";
import "../styles/Login.scss";

const WebPage = ({ setwebsite, website }) => {
  // Esta función permite guardar el website en su UseState
  const guardarWebsite = (e) => {
    setwebsite(e.target.value);
  };

  // Función para copiar lo que hay en el hash
  // TODO: Hacer hash para las contraseñas
  const copiarHash = () => {
    var copyText = document.getElementById("hash");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  };
  return (
    <div className="login">
      <input
        type="text"
        name="website"
        value={website}
        placeholder="Sitio ej. Google"
        onChange={guardarWebsite}
      />
      <input type="text" id="hash" value={website} readOnly />
      <button onClick={copiarHash}>Copiar</button>
    </div>
  );
};

export default WebPage;
