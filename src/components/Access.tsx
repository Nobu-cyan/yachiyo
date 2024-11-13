import React from 'react';
import { MapPin, Phone } from 'lucide-react';

export function Access() {
  return (
    <section className="py-20 bg-black" id="access">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-400">Access</h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg">〒140-0011</p>
                <p className="text-gray-400">東京都品川区東大井5-4-19</p>
                <p className="text-gray-400 mt-2">大井町駅徒歩4分</p>
                <p className="text-gray-400 mt-2">東口から左に50m進み、左側のすずらん通りに入って100m先のアジアンダイニング東方のところで右折してすぐ。</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <p className="text-lg">03-3458-9119</p>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.7379677697947!2d139.73433687677415!3d35.60896747259675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a61be6761d1%3A0x51f2c3608c2e45d6!2z5aSn5LqV55S6!5e0!3m2!1sja!2sjp!4v1710669547849!5m2!1sja!2sjp"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}