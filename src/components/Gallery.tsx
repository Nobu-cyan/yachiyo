import React from 'react';

export function Gallery() {
  const images = [
    { src: '/yachiyo-interior-1.jpg', alt: 'カウンター席とグラスケース' },
    { src: '/yachiyo-interior-2.jpg', alt: 'テーブル席とカラオケ設備' },
    { src: '/yachiyo-entrance.jpg', alt: '店舗外観' }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-400">Interior</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}