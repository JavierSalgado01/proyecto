import Image from "next/image";
import Link from "next/link";
import Avatar from "@/components/Avatar";
import momentos from "@/components/momentos/artistas.json";


export default function Home() {
  const artista1 = momentos.datos;

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
            <div className="flex justify-center space-x-4">
                {artista1.map((momento, index) => (
                    <Avatar key={index} momento={momento} />
                ))}
            </div>
        </section>
      </main>
  );
}
