const FranceMap = () => {
  // Coordonnées exactes : 47°03'16.5"N 5°25'57.0"E
  const lat = 47.054583;   // 47°03'16.5"N
  const lon = 5.4325;      // 5°25'57.0"E

  const handleMapClick = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lon}&z=17`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.1!2d${lon}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDAzJzE2LjUiTiA1wrAyNSc1Ny4wIkU!5e0!3m2!1sfr!2sfr!4v1!5m2!1sfr!2sfr`}
          className="w-full h-full rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onClick={handleMapClick}
          title="Localisation Keprea - 3 avenue Innovia, Damparis, France"
        />
      </div>
    </div>
  );
};

export default FranceMap;