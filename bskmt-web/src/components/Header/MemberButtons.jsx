const MemberButtons = () => {
    return (
      <div className="flex justify-center gap-4">
        <a
          href="/miembros"
          className="bg-quaternary text-primary uppercase px-6 py-2 font-semibold tracking-wide hover:opacity-90 transition"
        >
          Área de Miembros
        </a>
        <a
          href="/hazte-miembro"
          className="bg-quaternary text-primary uppercase px-6 py-2 font-semibold tracking-wide hover:opacity-90 transition"
        >
          Hazte Miembro
        </a>
      </div>
    );
  };
  
  export default MemberButtons;  