
const Avatar = ({ momento }) => {
    return (
        <div className="flex flex-col items-center">
            {momento.img && (
                <img className="rounded-full w-36 h-36" src={momento.img} alt="Extra Large"/>
            )}
            <p className="font-bold">{momento.nombre}</p>
        </div>
    )
}

export default Avatar;
