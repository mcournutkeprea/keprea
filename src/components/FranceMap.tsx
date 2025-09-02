const FranceMap = () => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="relative bg-muted/30 rounded-lg p-4">
        <div className="relative w-full">
          <a 
            href="https://maps.app.goo.gl/ggMmHPAZFNzrAnpr9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <img 
              src="/lovable-uploads/d900d55a-cbeb-49cf-a873-26753d80abb6.png"
              alt="Carte de l'Europe avec localisation de Dole"
              className="w-full h-auto rounded-md"
            />
          </a>
          
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
      </div>
    </div>
  );
};

export default FranceMap;