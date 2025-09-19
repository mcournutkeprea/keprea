import { useState, useEffect, useRef } from 'react';

const ProductsSchema = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  
  const videos = [
    '/portfolio-video-1.mp4',
    '/portfolio-video-2.mp4', 
    '/portfolio-video-3.mp4',
    '/portfolio-video-4.mp4'
  ];

  useEffect(() => {
    const currentVideoElement = activePlayer === 0 ? video1Ref.current : video2Ref.current;
    const nextVideoElement = activePlayer === 0 ? video2Ref.current : video1Ref.current;
    
    if (!currentVideoElement || !nextVideoElement) return;

    let timer: NodeJS.Timeout;

    // Preload next video
    const nextVideoIndex = (currentVideo + 1) % videos.length;
    nextVideoElement.src = videos[nextVideoIndex];
    nextVideoElement.load();

    // Play current video
    currentVideoElement.src = videos[currentVideo];
    currentVideoElement.load();
    currentVideoElement.play().catch(console.error);

    const switchToNext = () => {
      setCurrentVideo(nextVideoIndex);
      setActivePlayer(prev => prev === 0 ? 1 : 0);
    };

    // Switch after 4 seconds
    timer = setTimeout(switchToNext, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentVideo, activePlayer, videos]);

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={video1Ref}
          className={`w-full h-full object-cover transition-opacity duration-100 ${
            activePlayer === 0 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ position: 'absolute', top: 0, left: 0 }}
          autoPlay
          muted
          playsInline
        />
        <video
          ref={video2Ref}
          className={`w-full h-full object-cover transition-opacity duration-100 ${
            activePlayer === 1 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ position: 'absolute', top: 0, left: 0 }}
          autoPlay
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Notre portfolio de biosolutions couvre les besoins agricoles pour toute culture
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="flex justify-center mb-12">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductsSchema;