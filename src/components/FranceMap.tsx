import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 20,
      attribution: 'Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
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

  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomOut();
    }
  };

  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full">
        <div 
          ref={mapRef} 
          className="w-full h-full rounded-xl overflow-hidden"
          style={{
            position: 'relative'
          }}
        />
        
        {/* Boutons de zoom personnalisés */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-[1000]">
          <Button
            size="sm"
            variant="secondary"
            className="w-8 h-8 p-0 bg-background/90 backdrop-blur-sm border shadow-lg hover:bg-background"
            onClick={handleZoomIn}
          >
            <Plus className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="w-8 h-8 p-0 bg-background/90 backdrop-blur-sm border shadow-lg hover:bg-background"
            onClick={handleZoomOut}
          >
            <Minus className="w-4 h-4" />
          </Button>
        </div>
        
        {/* CSS pour masquer les contrôles Leaflet */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .leaflet-control-attribution {
              display: none !important;
            }
            .leaflet-control-zoom {
              display: none !important;
            }
            .leaflet-control-container .leaflet-control {
              display: none !important;
            }
            .leaflet-marker-pane .leaflet-marker-icon {
              filter: none !important;
            }
            .leaflet-popup-content-wrapper {
              background: white;
              border-radius: 4px;
            }
          `
        }} />
      </div>
    </div>
  );
};

export default FranceMap;