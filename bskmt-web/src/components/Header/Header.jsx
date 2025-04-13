import { useEffect, useState } from "react";
import EmergencyButton from "./EmergencyButton";
import MemberButtons from "./MemberButtons";
import Navbar from "./Navbar";
import logo from "../../assets/logo_BSK_Motorcycle_Team.webp";

const Header = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* Sección 1 - Botón Emergencia */}
      {atTop && (
        <div className="bg-secondary w-full flex justify-center py-2">
          <EmergencyButton />
        </div>
      )}

      {/* Sección 2 - Logo */}
      <div className="bg-primary w-full flex justify-center py-4">
        <img src={logo} alt="Logo BSK" className="w-[120px] h-[120px]" />
      </div>

      {/* Sección 3 - Botones Membresía */}
      {atTop && (
        <div className="bg-primary w-full py-4">
          <MemberButtons />
        </div>
      )}

      {/* Sección 4 - Menú */}
      {atTop && (
        <div className="bg-primary w-full">
          <Navbar />
        </div>
      )}
    </header>
  );
};

export default Header;
