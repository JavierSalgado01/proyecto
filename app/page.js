import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="flex justify-between px-6">
        <div className="flex gap-2">
          <h1 className=" text-xl">Titulo principal (logo)</h1>
          <input type="text" placeholder="artista/cancion"></input>
        </div>
        <div>
          <nav className="flex items-center gap-2">
            <a href="">Iniciar sesion</a>
            <a href="">Regristrarse</a>
          </nav>
        </div>
      </header>
      <div className="flex gap-6 py-2">
          <a href="">CD</a>
          <a href="">Album</a>
          <a href="">MP3</a>
          <a href="">MP4</a>
          <a href="">Streaming</a>
          <a href="">En vivo</a>
        </div>
        <section>
          <h1 className="text-center font-bold">Artistas del momento</h1>
        </section>
      </main>
  );
}
