import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from '@/hooks/use-mobile';
import heroPlants from "@/assets/hero-plants-wind.jpg";
const Hero = () => {
  const { t } = useLanguage();
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
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">La nature au service de vos cultures</h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Fertilisation, boosters et protection naturelle à base d'insectes pour une agriculture performante
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <Button size="lg" className="px-8 py-3 bg-primary hover:bg-primary/90 text-white border-0" onClick={() => document.getElementById('solutions')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Découvrir notre portfolio
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            <div className="p-6 backdrop-blur-sm bg-black/40 rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white font-bold">Naturel</div>
            </div>
            <div className="p-6 backdrop-blur-sm bg-black/40 rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">10</div>
              <div className="text-white font-bold">solutions développées dont 2 déjà disponibles</div>
            </div>
            <div className="p-6 backdrop-blur-sm bg-black/40 rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">0€</div>
              <div className="text-white font-bold">aucun investissement dans le matériel agricole pour les producteurs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;