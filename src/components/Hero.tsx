import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const { t } = useLanguage();
  const [currentVideo, setCurrentVideo] = useState(0);
  const [activePlayer, setActivePlayer] = useState<1 | 2>(1);
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
    const currentRef = activePlayer === 1 ? video1Ref.current : video2Ref.current;
    const nextRef = activePlayer === 1 ? video2Ref.current : video1Ref.current;
    
    if (!currentRef || !nextRef) return;

    let timer: NodeJS.Timeout;

    const loadAndPlayVideo = () => {
      currentRef.src = videos[currentVideo];
      currentRef.load();
      
      const playVideo = () => {
        currentRef.play().catch(console.error);
      };
      
      if (currentRef.readyState >= 2) {
        playVideo();
      } else {
        currentRef.addEventListener('canplay', playVideo, { once: true });
      }

      // Précharger la vidéo suivante
      const nextVideoIndex = (currentVideo + 1) % videos.length;
      nextRef.src = videos[nextVideoIndex];
      nextRef.load();
    };

    loadAndPlayVideo();

    timer = setTimeout(() => {
      setCurrentVideo(prev => (prev + 1) % videos.length);
      setActivePlayer(prev => prev === 1 ? 2 : 1);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentVideo, activePlayer, videos]);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={video1Ref}
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
            activePlayer === 1 ? 'opacity-100 z-10' : isMobile ? 'opacity-0 z-0' : 'opacity-0 z-0'
          }`}
          autoPlay
          muted
          playsInline
          loop={false}
          onEnded={() => {
            setCurrentVideo(prev => (prev + 1) % videos.length);
            setActivePlayer(2);
          }}
        />
        <video
          ref={video2Ref}
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
            activePlayer === 2 ? 'opacity-100 z-10' : isMobile ? 'opacity-0 z-0' : 'opacity-0 z-0'
          }`}
          autoPlay
          muted
          playsInline
          loop={false}
          onEnded={() => {
            setCurrentVideo(prev => (prev + 1) % videos.length);
            setActivePlayer(1);
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-20" />
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