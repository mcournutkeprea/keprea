# ERRORS — Keprea Site Web

> Registre des bugs connus, pièges à éviter et corrections prioritaires.
> Ajouter toute nouvelle erreur découverte en session. Ne pas résoudre sans documenter.
> Limite stricte : 200 lignes. Archiver les entrées corrigées dans le journal en bas.

---

## Problèmes ouverts

---

### Claims "élevage/origine France" potentiellement incohérents (03/07/2026)
- **Statut** : Corrigé/confirmé (03/07/2026)
Retiré "Hermetia illucens/vers de farine élevés en France" (`/pourquoi-le-biocontrole`, JSON-LD Biofertilisant, incohérent avec "collecte de co-produits d'*autres* élevages") et "Origine 100% française" (`Testimonials.tsx`, ingrédients hors France). Trois points restants confirmés par l'utilisateur comme corrects, aucune correction nécessaire :
- `NotreProduction.tsx` step 1 ("élevage sur notre site en France") : vise bien les auxiliaires vivants, n'inclut pas la matière première extraits — cohérent, confirmé.
- `Hero.tsx` (`hero.stat3`) "Made in France" : confirmé exact, pas d'incohérence avec les co-produits d'élevages étrangers.
- `Production.tsx` "Site de production Keprea à Damparis" : confirmé correct (Damparis, commune limitrophe de Dole où est situé le SIRET/siège légal) — pas une erreur.

---

### Audit SEO complet 02/07/2026 — score santé 53/100 (keprea.vercel.app)
- **Statut** : Phases 1-3 corrigées, Phase 4 partiellement traitée (02/07/2026) — plan complet dans `keprea.vercel.app-audit/ACTION-PLAN.md`
- **Phase 4 — fait (02/07/2026)** : `robots.txt` pointait vers `https://keprea.com/sitemap.xml` (domaine pas encore live → 404 permanent) alors que `sitemap.xml` référence déjà `keprea.vercel.app` — corrigé pour cohérence, **à rebasculer sur `keprea.com` au cutover** (même liste que le point ci-dessous). `public/llms.txt` créé (résumé du site + pages clés pour crawlers IA), même note de migration de domaine.
- **Phase 4 — décision** : pas d'ajout de sources INRAE/FAO sur les stats produits ("Résultats mesurés sur le terrain" des 4 pages produits) — ce sont des essais internes Keprea (déjà correctement libellés "données internes" + méthodologie Comifer/ARVALIS en Phase 3) et non des données publiées par un tiers ; leur associer une citation académique laisserait croire à une validation externe qui n'existe pas. Seule `/pourquoi-le-biocontrole` cite des tiers (Ecophyto, Alliance Biocontrôle, Légifrance) et c'est déjà fait.
- **Phase 4 — bloqué** : CWV réel (pas de `GOOGLE_API_KEY` fourni), monitoring Search Console (nécessite le cutover keprea.com), témoignages agriculteurs réels (dépend de la collecte externe, voir §7 `PLAN-ACTION.md`)
- ~~Note interne "Photo à faire ensemble le 15 OCT"~~, ~~title/meta doublés~~, ~~canonicals absents~~, ~~`/solutions/boosters` sans "biostimulant"~~ — Corrigés (02/07/2026), voir journal
- Personnalités nommées sur la page Team : confirmées par l'utilisateur (accord obtenu de tous) le 02/07/2026 ; bios individuelles complètes et vraies photos = toujours en attente
- ~~Vidéo hero 13 Mo `preload="auto"`~~ — Corrigé (02/07/2026) : réencodée à 1,9 Mo (ffmpeg, 960px/CRF30), `preload="metadata"`
- ~~PNG 2,49 Mo non compressé (section production)~~ — Corrigé (02/07/2026) : converti en WebP 68 Ko
- ~~`/innovation` absent du sitemap.xml~~ — Corrigé (02/07/2026), + lien Footer `/#innovation`→`/innovation` aligné sur Navigation
- ~~Aucun schema `BreadcrumbList`~~ — Corrigé (02/07/2026), ajouté sur les 13 pages internes (`src/lib/breadcrumb.ts`)
- ~~`/contact` : rien d'actionnable au-dessus de la ligne de flottaison mobile~~ — Corrigé (02/07/2026) : hero mobile resserré (padding + tailles de police réduites <640px)
- ~~OG/Twitter tags statiques et dupliqués~~ — Corrigé (02/07/2026) : og:title/description/url par page ; og:image reste partagé (pas d'image sociale dédiée par page)
- ~~Headers de sécurité absents~~ — Partiellement corrigé (02/07/2026) : X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy ajoutés dans `vercel.json`. **CSP volontairement non ajoutée** : nécessite de lister précisément tous les domaines utilisés (Supabase `fhukegvicebiaopvgtzt.supabase.co`, GA4 `googletagmanager.com`/`google-analytics.com`, Google Fonts) et un test réel en preview avant activation — une CSP mal calibrée casserait silencieusement le formulaire de contact ou GA4.
- ~~Contenu thin : pages produits 523-589 mots (seuil 800), `/ressources` quasi vide~~ — Corrigé (02/07/2026, Phase 3) : 4 pages produits portées à 820-848 mots (FAQ enrichies + FAQPage schema), `/pourquoi-le-biocontrole` porté à 1055 mots (Article+FAQPage schema, stats sourcées Ecophyto/Alliance Biocontrôle), `/qui-sommes-nous` et `/notre-production` portés à 550/510 mots (jalons, chiffres, mission). `/ressources` passé en `noindex, follow` (retiré du sitemap) faute de vrai contenu — à ré-indexer quand du contenu réel existera.
- ~~~64 Mo de vidéos orphelines dans `public/`~~ — Corrigé (02/07/2026) : `portfolio-video-1/2/3.mp4`, `biocontrol-video.mp4`, `substances-video.mp4` supprimés, ainsi que `ProductsSchema.tsx` (composant mort qui les référençait, jamais importé nulle part). `public/` : 85 Mo → 18 Mo.
- ~~Footer avec ancres homepage `/#solutions`/`/#production`/`/#about`/`/#contact-form`~~ — Corrigé (02/07/2026) : les 4 liens (+ Innovation) basculés en `<Link>` React Router vers les pages dédiées (`/solutions`, `/notre-production`, `/qui-sommes-nous`, `/contact`), alignés sur Navigation.
- **⚠️ À REBASCULER AU LANCEMENT keprea.com** : JSON-LD Organization + og:image/twitter:image (`index.html`), les 14 `<link rel="canonical">`/`og:url` par page, `robots.txt` (ligne `Sitemap:`) et `llms.txt` pointent volontairement vers `keprea.vercel.app` en attendant la migration — voir checklist "Déploiement keprea.com" ci-dessous

---

### `<html lang="en">` — attribut de langue incorrect
- **Statut** : Corrigé (15/06/2026)
- Remplacé par `lang="fr"` dans `index.html`

---

### Vidéos sans attribut `poster` → écran blanc au chargement
- **Statut** : Corrigé (15/06/2026)
- `poster` ajouté sur les 3 balises `<video>` : `Hero.tsx` et `Innovation.tsx` (×2)

---

### Absence de mentions légales
- **Statut** : Corrigé (15/06/2026)
- Page `/mentions-legales` créée — SIRET, capital social et hébergeur renseignés (29/06/2026)

---

### Absence de politique de confidentialité
- **Statut** : Corrigé (15/06/2026)
- Page `/politique-confidentialite` créée avec données collectées, finalités, droits RGPD

---

### Absence de bandeau consentement cookies (RGPD)
- **Statut** : Corrigé (15/06/2026)
- Composant `CookieBanner` implémenté (opt-in explicite, localStorage, GA4 activable après accord)

---

### Formulaire de contact : trop de champs, pas de case RGPD
- **Statut** : Corrigé (15/06/2026)
- Formulaire réduit à 5 champs : Prénom, Entreprise, Email, Message, case RGPD
- Champs `lastName` et `subject` supprimés

---

### CTA peu visibles et peu contrastés
- **Statut** : Corrigé (15/06/2026)
- `--primary` assombri de `37%` à `30%` de luminosité dans `index.css` → ratio blanc/vert ~5.0:1 (WCAG AA ≥ 4.5:1)

---

### Footer absent ou incomplet
- **Statut** : Corrigé (15/06/2026)
- Footer créé avec logo, navigation secondaire, contact, liens légaux. Présent sur toutes les pages.

---

### Absence de Google Analytics et Google Search Console
- **Statut** : Partiellement corrigé (29/06/2026)
- GA4 intégré dans le code (`G-8J2LKBGHD7`), chargement conditionnel après consentement RGPD — actif sur `keprea.vercel.app`
- Search Console : impossible à configurer sur `keprea.vercel.app` (contrainte www + certificat SSL). **À faire après déploiement sur `keprea.com`** : créer une propriété Search Console, valider via fichier HTML déjà en place (`google6f688f2466a68243.html`), soumettre `sitemap.xml` (remettre les URLs en `https://keprea.com` d'abord)

---

### Contenu important non indexable (enfermé dans images/vidéos)
- **Statut** : Ouvert
- **Priorité** : Phase 2
- **Symptôme** : Google ne peut pas lire certains contenus clés
- **Cause** : Textes intégrés dans des assets visuels sans équivalent HTML
- **Correction** : Redoubler en HTML visible ou ALT text exhaustif

---

### Schéma de production non responsive
- **Statut** : Ouvert
- **Priorité** : Phase 2
- **Symptôme** : Illisible ou rogné sur mobile
- **Cause** : Image ou SVG non adapté aux petits écrans
- **Correction** : SVG responsive ou scroll horizontal contrôlé mobile-first

---

### URLs non optimisées pour le SEO
- **Statut** : Partiellement corrigé (15/06/2026 — Redesign)
- Nouvelles routes `/solutions/*`, `/contact`, `/qui-sommes-nous`, etc. ajoutées dans `App.tsx`
- Anciennes routes (`/biofertilisant`, etc.) maintenues comme alias pour éviter les 404
- Redirections 301 Vercel à configurer en production pour consolider le juice SEO

---

### Page `/innovation` renvoyait une 404
- **Statut** : Corrigé (16/06/2026)
- **Cause** : `InnovationPage` importée dans `App.tsx` (non utilisé côté SSG) mais absente de `routes.tsx` (utilisé par `ViteReactSSG`)
- **Correction** : Import + route `{ path: "innovation", Component: InnovationPage }` ajoutés dans `routes.tsx`

---

## Risques techniques à surveiller

- **Migration GitHub/Vercel** : Documenter `.env` avant migration (risque perte config Supabase/Mapbox)
- **Redirections 301** : Toute URL modifiée sans redirection fait perdre le juice SEO acquis
- **CORS / API** : ~~Vérifier les headers CORS de la fonction Supabase `send-contact-email` en production~~ — Vérifié OK (29/06/2026), emails reçus + insertions visibles dans Supabase
- **Build cache** : Un cache Vercel non invalidé peut servir une version obsolète après déploiement
- **Déploiement keprea.com** : Checklist avant/après bascule sur le domaine final :
  1. Remettre les URLs du `sitemap.xml` en `https://keprea.com`
  2. Créer une propriété Google Search Console pour `keprea.com` (fichier `google6f688f2466a68243.html` déjà en place)
  3. Soumettre le sitemap sur la nouvelle propriété
  4. Configurer les redirections 301 Vercel des anciennes URLs
  5. Vérifier que GA4 (`G-8J2LKBGHD7`) remonte bien des données sur le nouveau domaine
  6. Remettre `https://keprea.com` dans : JSON-LD Organization + `og:image`/`twitter:image` (`index.html`), les 14 `<link rel="canonical">`/`og:url` par page, `robots.txt` (ligne `Sitemap:`) et `llms.txt` (actuellement en `keprea.vercel.app`)
  7. Supprimer les routes legacy `/biofertilisant`, `/boosters`, `/extraits-naturels`, `/biocontrole-vivant` dans `App.tsx` (alias pré-refonte, gardés pour éviter les 404 le temps que l'ancien référencement se purge — à retirer seulement après avoir confirmé qu'ils ne reçoivent plus de trafic organique/backlinks)
  8. Configurer un vrai audit CWV (`GOOGLE_API_KEY` PageSpeed/CrUX) pour remplacer les estimations labo de l'audit du 02/07/2026

---

### App.css contient du CSS Vite template parasite (`#root { max-width:1280px; text-align:center }`)
- **Statut** : Corrigé (15/06/2026 — Redesign)
- Ces styles auraient pu casser les layouts full-width. Remplacé par un commentaire vide.

### App.tsx routes incohérentes avec Navigation + Solutions
- **Statut** : Corrigé (15/06/2026 — Redesign)
- Toutes les routes manquantes ajoutées dans `App.tsx` (13 routes actives + aliases)

### Contact.tsx retournait `null`
- **Statut** : Corrigé (15/06/2026 — Redesign)
- Composant documenté. La section contact homepage utilise `ContactForm.tsx` directement.

### Cards Solutions sans `role="button"` ni `tabindex` (accessibilité)
- **Statut** : Corrigé (15/06/2026 — Redesign)
- `role="button"`, `tabIndex={0}`, `onKeyDown`, `focus-visible:ring` ajoutés sur chaque card
- Arrow icon d'indication ajouté (apparaît au hover avec translate)

### Contenu Innovation enfermé dans images/vidéos (non indexable)
- **Statut** : Corrigé (15/06/2026 — Redesign v2)
- Section Innovation refondée : intro textuelle indexable (3 piliers) + onglets tabpanel accessibles
- Flip-cards supprimées (UX non-intuitive mobile) → infographies affichées directement via tab switcher

### Hero CTA "Découvrir notre portfolio" inadapté au B2B agri-tech
- **Statut** : Corrigé (15/06/2026 — Redesign v2)
- Remplacé par "Voir nos solutions" + CTA secondaire "Demander un essai"

### Hero stat3 "✓ Prêt à l'emploi" — checkmark pas une statistique
- **Statut** : Corrigé (15/06/2026 — Redesign v2)
- Remplacé par "Jura / Site de production" — ancrage territorial crédible

### Testimonials avec 3 placeholders "en cours de collecte" — signal de faiblesse
- **Statut** : Corrigé (15/06/2026 — Redesign v2)
- Refonte complète : section TrustSection "Nos garanties" — stats + 3 cartes garanties + CTA essais

### CSS mort — ~15 keyframes inutilisées + classes 3D flip orphelines
- **Statut** : Corrigé (15/06/2026 — Redesign v2)
- Supprimé : gentle-zoom, float, drift, sparkle, sway, pan-up, slow-zoom, water-drop, ripple, pan-left, pan-right, slow-pan-left, slow-pan-right, camera-sweep
- Supprimé : .perspective-1000, .preserve-3d, .backface-hidden, .rotate-y-180

## Journal des corrections

| Date | Problème | Correction appliquée |
|------|----------|----------------------|
| 15/06/2026 | Refonte complète (Phases 0-5.4) | Badge Lovable supprimé, emojis→icônes lucide (×12), SSG vite-react-ssg (17 pages), Nav/Footer sur pages produits, CTA `/contact` corrigés, sitemap.xml + robots.txt créés, contenu thin enrichi (cultures/mode d'emploi/FAQ), App.css nettoyé, routes corrigées, CookieBanner global, `console.error` supprimé de `NotFound.tsx` |
| 16/06/2026 | Page contact — formulaire étroit sur colonne droite, layout trop serré | ContactPage.tsx redesigné : hero éditorial + split 3/5·2/5 (form gauche, info droite), Double-Bezel sur form + cards, scroll-reveal staggeré. ContactForm.tsx : prop `embedded` ajoutée, grille 2-col Prénom/Entreprise, inputs premium, bouton pill button-in-button. Build 17 pages OK, 0 erreur TS. |
| 01/07/2026 | Incohérence couleur verte : 3 valeurs dark green différentes coexistaient (Problem, Testimonials, Innovation, InnovationPage) vs style clair des pages Solutions | Harmonisation site-wide → `bg-primary/5` / `bg-background` + `text-foreground`/`text-muted-foreground`. Build 18 pages OK. |
| 02/07/2026 | Poster vidéo Hero hors-sujet (coccinelle) ; cartes "Avantages" jugées "fade" sur les 4 pages produits | Poster remplacé par une frame de `portfolio-video-4.mp4` elle-même. `AdvantageCard`/`AdvantageGrid` créés (icône, hover lift+glow, scroll-reveal) ; essai en pile cliquable **reverté** à la demande de l'utilisateur → grille statique conservée, ne pas réintroduire sans validation. |
| 02/07/2026 | `Team.tsx` : photo de groupe unique + hotspots hover positionnés en `%` codés en dur (cassant au moindre recadrage, inutilisables au tactile) + note interne "Photo à faire ensemble le 15 OCT" affichée en live (5 langues) | Grille de portraits individuels (placeholder initiales en attendant les vraies photos), nom + rôle affichés sous chaque photo, mis en valeur au survol (couleur + soulignement). Clés `team.hover`/`team.photoNote` supprimées de `LanguageContext.tsx`. **Reste à faire** : vraies photos individuelles des 6 membres. Build 18 pages OK, 0 erreur TS. |
| 02/07/2026 | Audit SEO Phase 1 (score 53/100) : title/meta dupliqués, canonicals absents, JSON-LD sur mauvais domaine, `/solutions/boosters` sans le mot "biostimulant" | `index.html` : suppression du `<title>`/`<meta description>` génériques dupliqués ; JSON-LD Organization `url`/`logo` basculés sur `keprea.vercel.app` (note migration). `<link rel="canonical">` auto-référent ajouté aux 14 pages (`Head` créé sur `MentionsLegales.tsx`/`PolitiqueConfidentialite.tsx` qui n'en avaient aucun). `Boosters.tsx` : title/H1 (5 langues) + section explicative "biostimulant" ajoutés. Personnalités Team confirmées par l'utilisateur. Build 18 pages OK, 0 erreur TS. |
| 02/07/2026 | Audit SEO Phase 2 : vidéo hero 13 Mo, PNG 2,49 Mo, `/innovation` absent du sitemap, pas de BreadcrumbList, `/contact` mobile sans élément actionnable au-dessus du pli, OG/Twitter statiques, headers de sécurité absents | Vidéo hero réencodée 13→1,9 Mo (ffmpeg CRF30/960px, qualité vérifiée visuellement) + `preload="metadata"`. PNG production 2,49 Mo→WebP 68 Ko (Pillow). `/innovation` ajouté au sitemap. `src/lib/breadcrumb.ts` créé, `BreadcrumbList` JSON-LD sur les 13 pages internes (attention : `Head` = react-helmet-async, le JSON-LD doit être un enfant texte `{json}`, pas `dangerouslySetInnerHTML` qui est silencieusement ignoré). `ContactPage.tsx` : hero mobile resserré (padding/tailles réduites <640px). OG/Twitter title/description/url ajoutés par page ; retirés d'`index.html` (même bug de duplication que le `<title>`). `vercel.json` : headers X-Content-Type-Options/X-Frame-Options/Referrer-Policy/Permissions-Policy ajoutés (CSP différée). Build 18 pages OK, 0 erreur TS. |
| 02/07/2026 | Nettoyage : ~64 Mo de vidéos orphelines dans `public/` (jamais chargées par aucune page) ; Footer avec ancres homepage (`/#solutions`, `/#production`, `/#about`, `/#contact-form`) au lieu des pages dédiées | `portfolio-video-1/2/3.mp4`, `biocontrol-video.mp4`, `substances-video.mp4` supprimés + `ProductsSchema.tsx` (composant mort, seul référent, jamais importé) supprimé — `public/` 85→18 Mo. Footer : les 5 liens de navigation basculés en `<Link>` React Router vers `/solutions`, `/innovation`, `/notre-production`, `/qui-sommes-nous`, `/contact` (alignés sur `Navigation.tsx`). Build 18 pages OK, 0 erreur TS. |
| 02/07/2026 | Audit SEO Phase 3 (contenu & autorité) : pages produits/hub thin, pas de schema Article/FAQPage/Service, stats produits attribuées à tort à des orgs tierces (IBMA/Koppert/Comifer/ARVALIS), `/ressources` vide mais indexée | `src/lib/schema.ts` créé (faqJsonLd/articleJsonLd/serviceJsonLd). `/pourquoi-le-biocontrole` : 335→1055 mots, stats sourcées et vérifiées par recherche web (Ecophyto 2030, Alliance Biocontrôle, Code rural L.253-6 — **Farm to Fork -50% UE écarté car retiré par la Commission en 2024, ne pas citer**), Article+FAQPage schema. 4 pages produits : 595-747→820-848 mots (FAQ étendues), FAQPage+Service schema (factuel, sans offers/ratings). `/qui-sommes-nous` 222→553 mots et `/notre-production` 145→512 mots (jalons, chiffres réels : 3000m², 7 associés, 2025). Stats internes reformulées "données internes Keprea" + note méthodologique, dissociées des orgs tierces citées à tort comme source. `/ressources` passé `noindex, follow` + retiré du sitemap. Byline "Rédigé par l'équipe Keprea · Dernière mise à jour" ajouté sur les 7 pages à claims réglementaires. Build 18 pages OK, 0 erreur TS. |
| 03/07/2026 | Incohérence relevée : `Production.tsx` légende l'image du site "Site de production Keprea à Damparis", alors que SIRET/mentions légales et tout le reste du site situent l'entreprise à Dole (39) | Confirmé par l'utilisateur (03/07/2026) : Damparis est correct, commune limitrophe de Dole — pas une erreur, aucune correction nécessaire |
