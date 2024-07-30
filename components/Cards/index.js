import Image from 'next/image';

const Card = ({ momento }) => {
  return (
    <div className="w-64 max-w-xs rounded overflow-hidden shadow-lg bg-cyan-950 m-4">
      {momento.img && (
        <div className="relative w-48 h-32 mx-auto mt-4">
          <Image className="object-cover rounded" src={momento.img} alt={momento.nombre} layout='fill'/>
        </div>
      )}
      <div className="px-4 py-2">
        <div className="font-bold text-lg mb-2 text-center text-white">{momento.nombre}</div>
      </div>
    </div>
  );
};

export default Card;
