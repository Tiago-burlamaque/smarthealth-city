function CardResultado({ titulo, valor }) {
  return (
    <div
      className="
                bg-white/5
                backdrop-blur-lg
                border border-white/10
                rounded-2xl
                p-6
                flex
                flex-col
                items-center
                justify-center
                text-center
                transition-all
                duration-300
                hover:bg-white/10
                hover:border-white/20
                hover:-translate-y-1
                shadow-xl
            "
    >
      <h3 className="text-white/50 text-sm font-medium uppercase tracking-wider mb-2">
        {titulo}
      </h3>
      <p className="text-white/90 text-2xl font-bold">
        {valor}
      </p>
    </div>
  );
}

export default CardResultado;
