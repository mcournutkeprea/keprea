const FranceMap = () => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <h4 className="text-sm font-medium text-foreground mb-3 text-center">
        Localisation géographique
      </h4>
      <div className="relative bg-muted/30 rounded-lg p-4">
        <svg
          viewBox="0 0 200 240"
          className="w-full h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Contour simplifié de la France */}
          <path
            d="M50 50 L60 40 L80 35 L100 30 L120 35 L140 40 L150 50 L155 70 L160 90 L165 110 L170 130 L165 150 L160 170 L150 185 L140 195 L120 200 L100 205 L80 200 L70 190 L60 180 L50 165 L45 145 L40 125 L35 105 L40 85 L45 65 Z"
            fill="hsl(var(--primary) / 0.1)"
            stroke="hsl(var(--primary) / 0.3)"
            strokeWidth="1"
          />
          
          {/* Point pour Dole */}
          <circle
            cx="115"
            cy="120"
            r="4"
            fill="hsl(var(--primary))"
            className="animate-pulse"
          />
          
          {/* Label pour Dole */}
          <text
            x="125"
            y="125"
            fontSize="10"
            fill="hsl(var(--foreground))"
            className="font-medium"
          >
            Dole
          </text>
          
          {/* Lignes de distance vers les grandes villes */}
          <g stroke="hsl(var(--primary) / 0.4)" strokeWidth="1" strokeDasharray="2,2">
            {/* Vers Paris */}
            <line x1="115" y1="120" x2="95" y2="80" />
            <text x="85" y="75" fontSize="8" fill="hsl(var(--muted-foreground))">Paris</text>
            <text x="85" y="85" fontSize="7" fill="hsl(var(--muted-foreground))">2h</text>
            
            {/* Vers Lyon */}
            <line x1="115" y1="120" x2="120" y2="150" />
            <text x="125" y="155" fontSize="8" fill="hsl(var(--muted-foreground))">Lyon</text>
            <text x="125" y="165" fontSize="7" fill="hsl(var(--muted-foreground))">2h</text>
            
            {/* Vers Genève */}
            <line x1="115" y1="120" x2="135" y2="135" />
            <text x="140" y="135" fontSize="8" fill="hsl(var(--muted-foreground))">Genève</text>
            <text x="140" y="145" fontSize="7" fill="hsl(var(--muted-foreground))">2h</text>
            
            {/* Vers Bâle */}
            <line x1="115" y1="120" x2="145" y2="105" />
            <text x="150" y="100" fontSize="8" fill="hsl(var(--muted-foreground))">Bâle</text>
            <text x="150" y="110" fontSize="7" fill="hsl(var(--muted-foreground))">2h</text>
          </g>
        </svg>
        
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