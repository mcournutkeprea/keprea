import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const FranceMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Coordonnées exactes : 47°03'16.5"N 5°25'57.0"E
    const lat = 47.054583;   // 47°03'16.5"N
    const lon = 5.4325;      // 5°25'57.0"E

    // 1) Carte en vue "globe" (zoom bas)
    const map = L.map(mapRef.current, { 
      zoomControl: true,
      attributionControl: false 
    }).setView([20, 0], 2);

    mapInstanceRef.current = map;

    // 2) Tuiles OpenStreetMap (plan)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // 3) Animation de vol vers le point
    const targetZoom = 17;    // niveau de zoom pour voir le bâtiment
    const durationSec = 3;    // durée de l'animation (secondes)

    // Lancement après un petit délai pour que la carte se charge
    setTimeout(() => {
      map.flyTo([lat, lon], targetZoom, {
        animate: true,
        duration: durationSec,
        easeLinearity: 0.25
      });

      // Déposer le marqueur une fois l'animation terminée
      map.once('moveend', () => {
        L.marker([lat, lon]).addTo(map)
          .bindPopup('<strong>Keprea</strong><br>3 avenue Innovia<br>Damparis, France')
          .openPopup();
      });
    }, 500);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-full">
      <div className="relative bg-muted/30 rounded-lg p-4 h-full">
        <div className="relative w-full h-full">
          <div 
            ref={mapRef} 
            className="w-full h-full rounded-md overflow-hidden border border-border"
            style={{
              position: 'relative'
            }}
          />
          {/* CSS pour masquer les contrôles Leaflet */}
          <style dangerouslySetInnerHTML={{
            __html: `
              .leaflet-control-attribution {
                display: none !important;
              }
              .leaflet-control-zoom {
                display: none !important;
              }
            `
          }} />
        </div>
      </div>
    </div>
  );
};

export default FranceMap;