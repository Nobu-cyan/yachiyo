import React from 'react';

export function Hero() {
  return (
    <header id="hero" className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/yachiyo-entrance.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold text-emerald-400 mb-4">yachiyo</h1>
        <p className="text-xl text-gray-300">品川区の隠れ家スナック</p>
      </div>
    </header>
  );
}