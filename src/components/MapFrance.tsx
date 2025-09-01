import locationMap from "@/assets/location-map.jpg";

const MapFrance = () => {
  return (
    <div className="w-full h-48 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
      <img 
        src={locationMap} 
        alt="Localisation Keprea - 2H de Paris, Lyon, Bâle, Genève" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default MapFrance;