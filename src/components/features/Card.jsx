export const Card = ({ card, index }) => {
  const isEvenCard = index % 2 === 1; // true for 2nd, 4th, ... (we want to flip these)

  return (
    <div className="w-full relative group">
      {/* Glow */}
      <div
        className="absolute -inset-4 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse, ${card.color}66, transparent 70%)`,
        }}
      />
      <div
        className={`max-w-7xl mx-auto rounded-3xl p-4 sm:p-8 lg:p-12 relative backdrop-blur-md border 
        bg-white/90 dark:bg-black/20 border-gray-200/50 dark:border-white/10`}
        style={{
          background: `
            radial-gradient(circle at bottom left, ${card.color}22, transparent 80%),
            radial-gradient(circle at top right, ${card.color}22, transparent 80%)
          `,
        }}
      >
        <div className="absolute inset-0 -z-10 pointer-events-none rounded-2xl">
          <div className="w-full h-full rounded-2xl bg-[radial-gradient(circle,_rgba(168,85,247,0.45)_1px,_transparent_1px)] bg-[length:7px_7px] opacity-20 dark:bg-[radial-gradient(circle,_rgba(168,85,247,0.7)_1px,_transparent_1px)]" />
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 lg:items-center">
          {/* Content */}
          {/* Left / Right content controlled by lg:order */}
          <div
            className={`space-y-4 lg:space-y-6 text-gray-900 dark:text-white ${
              isEvenCard ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="flex items-center gap-4 lg:block lg:space-y-4">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-200/40 dark:bg-white/10 rounded-2xl flex items-center justify-center text-2xl lg:text-3xl">
                {card.icon}
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                {card.title}
              </h2>
            </div>
            <p className="text-sm lg:text-base text-gray-700 dark:text-white/80 leading-relaxed max-w-2xl">
              {card.description}
            </p>
            <div className="space-y-2 lg:space-y-3">
              {card.features.map((f, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div
                    className="w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, #6B4226, #9C6644)`,
                    }}
                  >
                    <svg
                      className="w-3 h-3 lg:w-4 lg:h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm lg:text-base">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div
            className={`${isEvenCard ? "lg:order-1" : "lg:order-2"} relative`}
          >
            <div
              className="bg-transparent dark:bg-transparent relative backdrop-blur-sm rounded-2xl p-6 lg:p-10 border-2 min-h-[220px] lg:min-h-[320px] flex items-center justify-center transition-transform duration-500 hover:scale-[1.02]"
              style={{
                borderColor: `${card.color}50`,
                boxShadow: `0 8px 24px ${card.color}33`,
              }}
            >
              <span className="text-gray-600 dark:text-slate-300 text-lg md:text-2xl lg:text-4xl xl:text-5xl font-medium">
                400 x 225
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
