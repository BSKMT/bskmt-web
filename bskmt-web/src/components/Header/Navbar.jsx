const Navbar = () => {
    return (
      <nav className="bg-primary text-quaternary py-4 px-6">
        <ul className="flex justify-center gap-8 text-sm font-medium">
          <li><a href="/">Inicio</a></li>
          <li><a href="/nosotros">Nosotros</a></li>
          <li><a href="/eventos">Eventos</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  