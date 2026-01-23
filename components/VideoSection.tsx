'use client'

export default function HeroVideo() {
  return (
    <div className="h-[65vh] md:h-[90vh] relative w-full overflow-hidden bg-black rounded-3xl">
      <video
        src="https://res.cloudinary.com/djpdesqrs/video/upload/v1769120549/Abiodun_Fajobi_Executive_VA_Introduction_r4n0b0.mp4"
        controls
        autoPlay={true} 
        muted={true}     
        loop={true}
        playsInline={true}
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-contain"
      >
      </video>
        <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-300/10 blur-3xl"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite ${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}