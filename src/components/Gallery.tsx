import React from 'react';
import { Camera, Play, Award, Users } from 'lucide-react';
import events from '../assets/events.jpg';
import final from '../assets/final.jpg';
import group_2 from '../assets/group_2.jpg';
import group from '../assets/group.jpg';
import IAS from '../assets/IAS.jpg';
import marketing from '../assets/marketing.jpg';

const Gallery = () => {
  const galleryItems = [
    {
      type: 'image',
      src: events,
      title: 'Opening Ceremony 2024',
      description: 'Grand inauguration with distinguished guests'
    },
    {
      type: 'image',
      src: final,
      title: 'Committee Sessions',
      description: 'Intense diplomatic discussions in progress'
    },
    {
      type: 'image',
      src: group_2,
      title: 'Delegate Networking',
      description: 'Building connections and friendships'
    },
    {
      type: 'image',
      src: group,
      title: 'Award Ceremony',
      description: 'Recognizing outstanding delegates'
    },
    {
      type: 'image',
      src: IAS,
      title: 'Cultural Evening',
      description: 'Celebrating diversity and unity'
    },
    {
      type: 'image',
      src: marketing,
      title: 'Closing Ceremony',
      description: 'Memorable conclusion to an amazing conference'
    }
  ];

  const highlights = [
    {
      icon: Users,
      title: 'Previous Editions',
      value: '12+',
      description: 'Years of successful conferences'
    },
    {
      icon: Camera,
      title: 'Photos Captured',
      value: '5000+',
      description: 'Memorable moments documented'
    },
    {
      icon: Award,
      title: 'Awards Given',
      value: '200+',
      description: 'Outstanding delegates recognized'
    },
    {
      icon: Play,
      title: 'Video Coverage',
      value: '50+',
      description: 'Hours of conference footage'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Gallery</span>
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Relive the memorable moments from previous IITBHU MUN conferences and get inspired for the upcoming edition
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-purple-200 text-sm">{item.description}</p>
                </div>
              </div>
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-purple-500/80 rounded-full flex items-center justify-center backdrop-blur-md">
                    <Play className="text-white ml-1" size={24} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Conference Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{highlight.value}</div>
                <div className="text-lg font-semibold text-purple-300 mb-1">{highlight.title}</div>
                <div className="text-purple-200 text-sm">{highlight.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Connected</h3>
            <p className="text-purple-200 mb-6">
              Follow us on social media to get the latest updates and behind-the-scenes content from IITBHU MUN 2025
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <span className="text-white font-bold">FB</span>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <span className="text-white font-bold">IG</span>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <span className="text-white font-bold">TW</span>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <span className="text-white font-bold">LI</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
