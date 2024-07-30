import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <header className="flex justify-between px-6">
      <div className="flex gap-2">
        <h1 className=" text-xl">comenzando</h1>
        <input type="text" placeholder="artista/cancion"></input>
      </div>
      <div>
        <nav className="flex items-center gap-2">
          <a href="">Iniciar sesion</a>
          <a href="">Regristrarse</a>
        </nav>
      </div>
    </header>
  );
}
