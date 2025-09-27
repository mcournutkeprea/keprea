import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const { t } = useLanguage();
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();
  
  const videos = [
    '/portfolio-video-1.mp4',
    '/portfolio-video-2.mp4', 
    '/portfolio-video-3.mp4',
    '/portfolio-video-4.mp4'
  ];

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    let timer: NodeJS.Timeout;

    const loadAndPlayVideo = () => {
      videoElement.src = videos[currentVideo];
      videoElement.load();
      
      const playVideo = () => {
        videoElement.play().catch(console.error);
      };
      
      if (videoElement.readyState >= 2) {
        playVideo();
      } else {
        videoElement.addEventListener('canplay', playVideo, { once: true });
      }
    };

    loadAndPlayVideo();

    // Switch to next video after 10 seconds (increased from 6 to reduce frequent switches)
    timer = setTimeout(() => {
      setCurrentVideo(prev => (prev + 1) % videos.length);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentVideo, videos]);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover transition-opacity duration-1000"
          style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'black' }}
          autoPlay
          muted
          playsInline
          loop={false}
          onEnded={() => {
            // When video ends, immediately switch to next
            setCurrentVideo(prev => (prev + 1) % videos.length);
          }}
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