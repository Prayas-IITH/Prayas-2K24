function Card({ img, title, text, i, isActive, setActiveCard, style }) {
    return (
        <div 
            className={`flex transition-all duration-300 ${isActive ? 'z-10' : 'opacity-70'}`}
            style={style}
            onMouseEnter={() => setActiveCard(i)}
            onMouseLeave={() => setActiveCard(null)}
        >
            <div className={`relative ${isActive ? 'w-96 h-96' : 'w-80 h-80'}`}>
                <img src={img} alt={`Image ${i}`} className="w-full h-full object-cover rounded-xl shadow-lg" />
                {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-xl">
                        <h2 className="text-xl font-bold">{title}</h2>
                        <p className="mt-2">{text}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;