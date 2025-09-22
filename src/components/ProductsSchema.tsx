import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const ProductsSchema = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();
  
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

    // Preload and prepare next video first (disabled on mobile to save bandwidth)
    if (!isMobile) {
      const nextVideoIndex = (currentVideo + 1) % videos.length;
      nextVideoElement.src = videos[nextVideoIndex];
      nextVideoElement.preload = 'auto';
      nextVideoElement.load();
    }

    // Set current video source
    currentVideoElement.src = videos[currentVideo];
    currentVideoElement.load();
    
    // Wait for video to be ready before playing
    const playVideo = () => {
      currentVideoElement.play().catch(console.error);
    };
    
    if (currentVideoElement.readyState >= 2) {
      playVideo();
    } else {
      currentVideoElement.addEventListener('canplay', playVideo, { once: true });
    }

    const switchToNext = () => {
      const nextVideoIndex = (currentVideo + 1) % videos.length;
      
      // Preload next video if it's not already loaded (for mobile)
      if (isMobile) {
        const nextVideoElement = activePlayer === 0 ? video2Ref.current : video1Ref.current;
        if (nextVideoElement && nextVideoElement.src !== videos[nextVideoIndex]) {
          nextVideoElement.src = videos[nextVideoIndex];
          nextVideoElement.preload = 'auto';
          nextVideoElement.load();
        }
      }
      
      setCurrentVideo(nextVideoIndex);
      setActivePlayer(prev => prev === 0 ? 1 : 0);
    };

    // Switch after 6 seconds
    timer = setTimeout(switchToNext, 6000);

    return () => {
      clearTimeout(timer);
      currentVideoElement.removeEventListener('canplay', playVideo);
    };
  }, [currentVideo, activePlayer, videos, isMobile]);

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={video1Ref}
          className={`w-full h-full object-cover ${
            isMobile ? 'transition-opacity duration-300' : 'transition-opacity duration-500'
          } ${
            activePlayer === 0 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'black' }}
          autoPlay
          muted
          playsInline
        />
        <video
          ref={video2Ref}
          className={`w-full h-full object-cover ${
            isMobile ? 'transition-opacity duration-300' : 'transition-opacity duration-500'
          } ${
            activePlayer === 1 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'black' }}
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
            Notre portfolio de biosolutions couvre les besoins agricoles pour toutes les cultures
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