const FranceMap = () => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <h4 className="text-sm font-medium text-foreground mb-3 text-center">
        Localisation géographique
      </h4>
      <div className="relative bg-muted/30 rounded-lg p-4">
        <div className="relative w-full">
          <img 
            src="/lovable-uploads/ff3e0512-662c-40cb-bb4f-17320f4917d1.png"
            alt="Carte de l'Europe avec localisation de Dole"
            className="w-full h-auto rounded-md"
          />
          
          {/* Label pour Dole */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20">
            <p className="text-xs font-medium text-foreground">Dole, France</p>
          </div>
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
        
        <div className="mt-3 text-center">
          <p className="text-xs text-muted-foreground">
            Au cœur de l'Europe, à 2h des grandes métropoles
          </p>
        </div>
      </div>
    </div>
  );
};

export default FranceMap;