import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapFrance = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Note: You need to add your Mapbox token here or in environment variables
    const MAPBOX_TOKEN = 'your-mapbox-token-here';
    
    if (!MAPBOX_TOKEN || MAPBOX_TOKEN === 'your-mapbox-token-here') {
      // Show placeholder if no token
      return;
    }

    // Initialize map
    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [5.4893, 47.0949], // Dole coordinates
      zoom: 10,
    });

    // Add marker for Dole location
    new mapboxgl.Marker({ color: '#22c55e' })
      .setLngLat([5.4893, 47.0949])
      .setPopup(new mapboxgl.Popup().setHTML('<div><strong>Keprea</strong><br>3 avenue Innovia<br>Damparis, France</div>'))
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="w-full h-48 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
      <div ref={mapContainer} className="w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
        <div className="text-center p-4">
          <div className="text-sm text-muted-foreground">3 avenue Innovia, Damparis</div>
        </div>
      </div>
    </div>
  );
};

export default MapFrance;