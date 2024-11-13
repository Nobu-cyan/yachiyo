import React from 'react';
import { GlassWater, Music2, Clock } from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border border-emerald-400/20 rounded-lg backdrop-blur-sm">
            <GlassWater className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">飲み放題</h3>
            <p className="text-gray-400">5,000円（税込）時間制限なし</p>
            <p className="text-gray-400">お通し・フルーツ付き</p>
          </div>
          <div className="text-center p-6 border border-emerald-400/20 rounded-lg backdrop-blur-sm">
            <Music2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">カラオケ</h3>
            <p className="text-gray-400">歌い放題</p>
          </div>
          <div className="text-center p-6 border border-emerald-400/20 rounded-lg backdrop-blur-sm">
            <Clock className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">営業時間</h3>
            <p className="text-gray-400">19:00～24:00</p>
            <p className="text-gray-400">定休日：日曜・祝日</p>
          </div>
        </div>
      </div>
    </section>
  );
}