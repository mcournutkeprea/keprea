# MEMORY — Keprea Site Web

> Mémoire stratégique et décisionnelle du projet. Mise à jour après chaque session.
> Limite stricte : 150 lignes. Synthétiser les anciennes entrées si dépassement.

---

## Positionnement de Keprea

- **Qui** : Startup agri-tech fondée en 2025, basée à Dole (Jura, 39)
- **Quoi** : Biosolutions à base d'insectes pour l'agriculture (biocontrôle)
- **Gammes** : Bioprotection, Biopesticides, Boosters, Biofertilisant
- **Cible principale** : Agriculteurs (grandes cultures, maraîchage), coopératives, distributeurs agricoles
- **Marché** : Transition agroécologique, réglementation de plus en plus restrictive sur les pesticides chimiques
- **Différenciation** : Origine insecte, efficacité prouvée, approche naturelle vs chimique

---

## Diagnostic du site actuel

### Points forts identifiés
- Identité visuelle propre, moderne, palette cohérente
- Animation de la mascotte mémorable
- Hero section impactant avec vidéo

### Problèmes critiques
- Aucune preuve sociale (zéro témoignage, zéro cas client)
- Pages produits trop minces (pas de fiches techniques, pas de comparatifs)
- Footer absent ou incomplet
- Pas de mentions légales, pas de politique de confidentialité
- Pas de bandeau consentement cookies (non conforme RGPD)
- Contenus importants enfermés dans des vidéos/images (non indexables par Google)
- Formulaire de contact avec trop de champs, pas de champ RGPD
- Vidéos sans attribut `poster` → écran blanc au chargement
- `<html lang="en">` dans `index.html` → signal SEO négatif (doit être `lang="fr"`)
- Pas de Google Analytics, pas de Search Console
- URLs non optimisées pour le SEO
- Schéma de production non responsive
- CTA peu visibles, peu contrastés

---

## Décisions produit prises

| Décision | Statut |
|----------|--------|
| Migration vers GitHub + Vercel | Planifiée (Phase 2) |
| Architecture multi-pages (12 URLs cibles) | **Implémentée (Phase 5.3)** |
| Pré-rendu statique (option A : vite-react-ssg) | **Implémentée (Phase 5.2)** |
| Suppression du badge Lovable | Corrigé (Phase 0) |
| Ajout témoignages agriculteurs | Priorité absolue |
| Page « Pourquoi le biocontrôle ? » | À créer (Phase 2) |
| Newsletter + fiches techniques téléchargeables | Phase 3 |
| RGPD : mentions légales + consentement | Phase 1 |
| Storytelling 7 étapes en page d'accueil | À implémenter |

---

## Architecture cible validée

```
/                           → Accueil (storytelling 7 étapes)
/solutions/                 → Hub des gammes
/solutions/bioprotection/
/solutions/biopesticides/
/solutions/boosters/
/solutions/biofertilisant/
/pourquoi-le-biocontrole/   → Page pédagogique SEO
/qui-sommes-nous/           → Équipe + histoire
/notre-production/          → Process de production
/ressources/                → Blog + fiches + newsletter
/contact/                   → Formulaire simplifié RGPD
/mentions-legales/
/politique-confidentialite/
```

---

## Parcours de conversion cible

1. **Entrée** : trafic organique (blog, pages produits SEO) ou bouche-à-oreille
2. **Découverte** : page d'accueil → storytelling → compréhension de l'offre
3. **Conviction** : page produit → fiche technique → témoignage agriculteur
4. **Décision** : CTA « Nous contacter » / « Télécharger la fiche »
5. **Contact** : formulaire simplifié (Prénom, Entreprise, Email, Message, case RGPD)
6. **Nurturing** : newsletter + ressources

**Levier n°1 identifié** : Témoignages d'agriculteurs réels — priorité absolue pour la conversion.

---

## Contenus à créer (backlog)

- [ ] Témoignages agriculteurs (texte + photo, idéalement vidéo)
- [ ] Fiches techniques PDF pour chaque gamme (téléchargeables)
- [ ] Page « Pourquoi le biocontrôle ? » (argumentaire pédagogique)
- [ ] Biographies équipe avec photos
- [ ] Articles de blog SEO (cibler requêtes longue traîne agricoles)
- [ ] Logos et références clients/partenaires
- [ ] Schéma de production responsive
- [ ] Mentions légales (éditeur, hébergeur, SIRET, etc.)
- [ ] Politique de confidentialité conforme RGPD

---

## Design system attendu

- **Ton** : Professionnel, expert, sobre — pas d'emojis dans l'UI
- **Palette** : À détecter dans le code existant (conserver la cohérence)
- **Typographie** : Lisible, hiérarchie claire (H1 → H2 → H3 → body)
- **CTA** : Contrastés, visibles, texte explicite (éviter « En savoir plus »)
- **Images** : ALT text systématique, WebP préféré, lazy loading
- **Vidéos** : Attribut `poster` obligatoire, pas d'autoplay sans mute
- **Mobile** : Breakpoint 375px comme référence minimale

---

## Contraintes légales et techniques

- **RGPD** : Consentement explicite avant tout tracking, bandeau cookies, mentions légales
- **Accessibilité** : Contrastes WCAG AA minimum, balises sémantiques, navigation clavier
- **SEO** : Balises meta (title + description) sur chaque page, Hn cohérents, contenu textuel indexable
- **Performance** : Éviter les images > 200 ko sans compression, pas de scripts bloquants
- **Stack à détecter** : Inspecter `package.json` avant d'assumer la stack

---

## Métriques de succès (horizon 6 mois)

| Métrique | Cible |
|----------|-------|
| Taux de rebond | < 60 % |
| Temps moyen sur site | > 2 minutes |
| Formulaires soumis | × 3 vs baseline |
| Pages vues / session | > 3 |
| Trafic organique | Croissance à partir de M+3 |
| Téléchargements fiches techniques | > 20 / mois |
| Abonnés newsletter | > 50 en 3 mois |

---

## Historique des sessions

| Date | Décisions / apprentissages |
|------|---------------------------|
| Juin 2026 | Rapport stratégique complet produit. Initialisation du projet Claude Code. |
| 15 juin 2026 | Phase 0 complétée : badge Lovable supprimé, emojis → icônes lucide, description dupliquée corrigée. Nouvelle erreur découverte : `lang="en"` dans `index.html`. |
| 15 juin 2026 | Phase 1 Conformité complétée : `lang="fr"`, Footer, Mentions légales, Politique de confidentialité, CookieBanner, case RGPD formulaire. SIRET/capital/hébergeur restent à renseigner dans `MentionsLegales.tsx`. |
| 15 juin 2026 | Phase 1 Conversion complétée : formulaire réduit à 5 champs (Prénom, Entreprise, Email, Message, RGPD), contraste CTA corrigé (primaire 37%→30% L, WCAG AA ≥ 4.5:1), poster ajouté sur 3 vidéos. |
| 15 juin 2026 | Phase 5.2 + 5.3 complétées : migration SPA → SSG avec `vite-react-ssg` (option A), 17 pages HTML statiques pré-rendues. 12 routes cibles implémentées + redirections 301 Vercel + React Router pour anciennes URLs. `<Head>` (react-helmet-async SSG) injecté sur toutes les pages. Navigation mise à jour multi-page. |
| 15 juin 2026 | Phase 5.4 complétée : Navigation+Footer ajoutés sur 4 pages produits, emoji → icône lucide, CookieBanner déplacé dans RootLayout, CTA corrigés vers /contact, sections cultures cibles + mode d'emploi + FAQ + maillage interne ajoutées sur 4 pages produits, sitemap.xml créé (13 URLs), robots.txt mis à jour, NotFound traduit en français. |
| 15 juin 2026 | Redesign UX appliqué : fond blanc pur → crème chaleureux, tracking-tight sur H1 hero, text-wrap:balance + letter-spacing sur tous les titres, scroll-behavior:smooth, button:active press state, navigation active-state indicator (underline vert), About 4-cartes génériques → 2×2 border-left accent, hover Solutions scale→translate, section Testimonials placeholder créée (dark green, 3 cards + CTA /contact), ContactForm card générique → flat design. Build 17 pages OK, TypeScript 0 erreur. |
| 15 juin 2026 | design-taste-frontend appliqué (DESIGN_VARIANCE:7, MOTION:4, DENSITY:4) : Hero centré → bottom-left asymétrique + gradient overlay t→b + stats inline avec séparateurs (plus de 3 cards égales) + scroll indicator supprimé. Solutions 2×2 égaux → grille 3-col asymétrique briques [2/3+1/3 / 1/3+2/3] + contenu repositionné en bas. Hook useInView créé (IntersectionObserver, 0 dep). CSS scroll-reveal (.reveal/.is-visible) avec prefers-reduced-motion. About + Testimonials : scroll-reveal appliqué. Build 17 pages OK, 0 erreur TS. |
| 15 juin 2026 | high-end-visual-design appliqué : Nav → floating pill desktop (h-20 outer wrapper conservé pour pt-20 pages) + hamburger animé morphing en X. Hero → eyebrow tag pill + button-in-button CTA (ArrowRight dans cercle bg-white/15 + group-hover translate). About → Double-Bezel history block (outer shell p-2 rounded-[2rem] + inner core shadow inset). Scroll-reveal upgradé avec blur(6px→0) pour heavy fade-up. Grain overlay CSS (body::after, fixed, pointer-events-none, opacity 0.022). CSS vars --ease-spring + --ease-out. Build 17 pages OK, 0 erreur TS. |
| 15 juin 2026 | Redesign UX/Conversion complet : App.css nettoyé (CSS Vite template supprimé), App.tsx routes corrigées (13 routes actives + aliases backward-compat), nouvelles sections Problem.tsx (contexte agricole, 3 défis + pivot Keprea) et HowToGet.tsx (3 étapes essai terrain + CTA email), Innovation refondée (intro textuelle indexable + flip cards accessibles), Solutions.tsx accessibilité (role/tabIndex/focus-visible/arrow icon), Production.tsx titre éditorial gauche + process sans overflow parasite, Testimonials restructurées (compteurs crédibilité + slots prêts pour vrais témoignages), Index.tsx nouveau parcours : Hero→Problem→Solutions→Innovation→Testimonials→Production→About→HowToGet→ContactForm. Build 17 pages SSG OK, 0 erreur TS. |
| 15 juin 2026 | Redesign v2 (strategy-driven, /ui-ux-pro-max + /high-end-visual-design) : CSS mort nettoyé (~15 keyframes + classes 3D flip supprimées), token --warm ajouté au design system, Hero CTA "portfolio"→"Voir nos solutions" + CTA secondaire "Demander un essai", stat3 "✓"→"Jura / Site de production", Innovation flip-cards supprimées → 2-col (benefits + tabbed infographic avec role=tablist/tabpanel), Testimonials refondues en TrustSection "Nos garanties" (3 cartes traçabilité/essai/accompagnement + CTA essais), HowToGet numéros étapes 01/02/03 décoratifs larges (5xl, opacity 18%), ContactForm header left-aligned. Build 17 pages SSG OK, 0 erreur TS. |
| 16 juin 2026 | Redesign page contact (/high-end-visual-design) : ContactPage.tsx — hero éditorial (eyebrow pill + H1 7xl) + layout split 3/5·2/5 (form gauche / coords+agri droite), scroll-reveal staggeré via useEffect IntersectionObserver. ContactForm.tsx — prop `embedded` (Double-Bezel form card, grille 2-col Prénom/Entreprise, inputs premium bg-muted/40, bouton pill button-in-button ArrowRight), mode non-embedded inchangé pour homepage. Build 17 pages SSG OK, 0 erreur TS. |
| 16 juin 2026 | Correction 404 + refonte page Innovation (/design-taste-frontend) : route `innovation` absente de `routes.tsx` (utilisé SSG) — corrigé. InnovationPage.tsx réécrite : hero éditorial gauche + stats inline + 3 sections (défi agricole en 3 cards numérotées, 3 piliers insecte en grille asymétrique double-bezel, comparaison Keprea/Chimie/Biocontrôle générique en 3 cards + CTA sombre). 0 erreur TS. |
