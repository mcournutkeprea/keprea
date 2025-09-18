import { useState, useEffect, useRef } from 'react';

const ProductsSchema = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const videos = [
    '/portfolio-video-1.mp4',
    '/portfolio-video-2.mp4', 
    '/portfolio-video-3.mp4',
    '/portfolio-video-4.mp4'
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    video.addEventListener('ended', handleVideoEnd);
    return () => video.removeEventListener('ended', handleVideoEnd);
  }, [videos.length]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.src = videos[currentVideo];
    video.load();
    video.play().catch(console.error);
  }, [currentVideo, videos]);

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
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