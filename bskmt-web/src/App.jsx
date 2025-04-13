import React from "react";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="font-poppins bg-white text-black">
      <Header />
      
      {/* Aquí puedes colocar el resto del contenido de tu página */}
      <main className="p-4">
        <h1 className="text-2xl font-bold">¡Bienvenido a BSK Motorcycle Team!</h1>
        {/* Tu contenido va aquí */}
      </main>
    </div>
  );
}

export default App;
