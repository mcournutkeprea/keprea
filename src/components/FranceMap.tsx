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

    // Carte centrée directement sur Keprea
    const map = L.map(mapRef.current, { 
      zoomControl: false,
      attributionControl: false 
    }).setView([lat, lon], 15);

    mapInstanceRef.current = map;

    // Tuiles OpenStreetMap
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 20,
      attribution: 'Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
    }).addTo(map);

    // Ajouter le marqueur immédiatement
    const marker = L.marker([lat, lon]).addTo(map)
      .bindPopup('<strong>Keprea</strong><br>3 avenue Innovia<br>Damparis, France')
      .openPopup();

    // Fonction pour ouvrir Google Maps
    const openGoogleMaps = () => {
      const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lon}&z=17&t=h`;
      window.open(googleMapsUrl, '_blank');
    };

    // Ajouter l'événement de clic sur la carte
    map.on('click', openGoogleMaps);
    
    // Ajouter l'événement de clic sur le marqueur
    marker.on('click', openGoogleMaps);

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
            .leaflet-control-container {
              display: none !important;
            }
            .leaflet-bottom {
              display: none !important;
            }
            .leaflet-right {
              display: none !important;
            }
            .leaflet-left {
              display: none !important;
            }
            .leaflet-top {
              display: none !important;
            }
            a[href*="leafletjs"] {
              display: none !important;
            }
            a[href*="openstreetmap"] {
              display: none !important;
            }
            .leaflet-marker-pane .leaflet-marker-icon {
              filter: none !important;
            }
            .leaflet-popup-content-wrapper {
              background: white;
              border-radius: 4px;
            }
            /* Masquer spécifiquement les attributions sur mobile */
            @media (max-width: 768px) {
              .leaflet-control-attribution,
              .leaflet-control-container,
              .leaflet-control-container *,
              .leaflet-bottom,
              .leaflet-right,
              .leaflet-left,
              .leaflet-top,
              a[href*="leafletjs"],
              a[href*="openstreetmap"],
              .leaflet-control {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
              }
            }
          `
        }} />
      </div>
    </div>
  );
};

export default FranceMap;