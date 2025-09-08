import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const FranceMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Coordonnées exactes : 3 avenue Innovia, Damparis (Jura)
    const lat = 47.074167;   // Zone Innovia Damparis
    const lon = 5.426944;    // 3 avenue Innovia

    // 1) Carte en vue "globe" (zoom bas)
    const map = L.map(mapRef.current, { 
      zoomControl: true,
      attributionControl: false 
    }).setView([20, 0], 2);

    mapInstanceRef.current = map;

    // 2) Tuiles Google Satellite (Earth view)
    L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://www.google.com/maps">Google</a>'
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
    <div className="w-full max-w-sm mx-auto">
      <div className="relative bg-muted/30 rounded-lg p-4">
        <div className="relative w-full h-64">
          <div 
            ref={mapRef} 
            className="w-full h-full rounded-md overflow-hidden border border-border"
          />
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <div className="text-center p-2 bg-primary/5 rounded">
            <p className="font-medium text-foreground">Paris</p>
            <p className="text-muted-foreground">2h</p>
          </div>
          <div className="text-center p-2 bg-primary/5 rounded">
            <p className="font-medium text-foreground">Lyon</p>
            <p className="text-muted-foreground">2h</p>
          </div>
          <div className="text-center p-2 bg-primary/5 rounded">
            <p className="font-medium text-foreground">Genève</p>
            <p className="text-muted-foreground">2h</p>
          </div>
          <div className="text-center p-2 bg-primary/5 rounded">
            <p className="font-medium text-foreground">Bâle</p>
            <p className="text-muted-foreground">2h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranceMap;