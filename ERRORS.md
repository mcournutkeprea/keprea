# ERRORS — Keprea Site Web

> Registre des bugs connus, pièges à éviter et corrections prioritaires.
> Ajouter toute nouvelle erreur découverte en session. Ne pas résoudre sans documenter.
> Limite stricte : 200 lignes. Archiver les entrées corrigées dans le journal en bas.

---

## Problèmes ouverts

---

### Audit SEO complet 22/07/2026 — score santé 62/100 (www.keprea.com, prod live)
- **Statut** : Corrections domaine faites et poussées (22/07/2026) — reste à vérifier l'effectivité du déploiement Vercel. Plan complet dans `keprea.com-audit/ACTION-PLAN.md`, détail par catégorie dans `keprea.com-audit/findings/*.md`
- ~~Correction Fait (13/07/2026) invalidée en prod~~ — **Corrigé (22/07/2026)** : `schema.ts`/`breadcrumb.ts`/`index.html`/`robots.txt`/`sitemap.xml`/`llms.txt`/canonicals des 15 pages commités et poussés (`256879d`), pointant sur `keprea.com`.
- ~~Conflit domaine apex/www~~ — **Corrigé (22/07/2026)** : tout rebasculé sur `https://www.keprea.com` (version réellement servie, l'apex redirige en 308 vers www) dans les mêmes fichiers. À vérifier une fois déployé : `curl https://www.keprea.com/ | grep -c vercel.app` doit renvoyer 0.
- **Témoignages agriculteurs réels** : toujours zéro témoignage nominatif (`Testimonials.tsx`/`TrustSection` = stats génériques, pas de preuve sociale) — priorité n°1 du projet, non traitée depuis l'audit du 02/07.
- Autres findings notables : `/solutions` sans `<h1>` ; image `Solutions Biofertilisant.png` 7,5 Mo non compressée ; 3 pages orphelines absentes du sitemap (`/ressources`, `/ressources/fiches-techniques`, 5 fiches produit) ; meta description vide dupliquée (résidu vite-react-ssg) sur toutes les pages ; claim "publiée dans Nature" imprécis (`Biofertilisant.tsx`, il s'agit de *Scientific Reports*) ; pas de schema `Product` sur les gammes/fiches techniques ; CSP toujours absente (volontaire, cf. entrée 02/07 ci-dessous).

---

### Retours mail "Relecture site web" 06/07/2026 — points en attente de décision (07/07/2026)
- **Stat "70-90% de réduction en 14 jours"** (`/solutions/bioprotection`) retirée sans remplacement, faute de source — à réintégrer si une source est fournie.
- **Contradiction chiffre auxiliaires** : `5500` (confirmé fiable par l'utilisateur le 03/07, voir entrée ci-dessous) remplacé par `150` partout (accueil `Problem.tsx`, `Innovation.tsx`, `InnovationPage.tsx`) sur demande explicite du mail du 06/07 — à confirmer que ce n'est pas une confusion avec un autre chiffre.
- **Terminologie** : mail demande "Micro-peptides" (majuscule, trait d'union) alors que le site utilise déjà "micropeptides" (minuscule, sans trait d'union) sur `Boosters.tsx`/`boosters.micropeptides.title`. Les deux graphies coexistent actuellement — à harmoniser.
- **"Alléger l'arborescence, surtout la partie réglementaire"** : non traité, portée ambiguë (contenu de `/pourquoi-le-biocontrole` vs structure de navigation) — question posée à l'utilisateur restée sans réponse, à retraiter en session suivante.
- **Fusion "Site d'excellence" / "Implantation stratégique"** (`/notre-production`) : les 2 sections ne sont pas adjacentes dans le DOM (une section "Détail des 6 étapes" les sépare) et "Site d'excellence" est dans `Production.tsx` (composant partagé avec la homepage) — fusion faite en dégradant le second `<h2>` en eyebrow pour réduire la redondance perçue, sans réorganiser l'ordre des sections ni toucher `Production.tsx` (pour ne pas casser le teaser homepage). À valider si une fusion plus poussée est souhaitée.
- Traductions EN/ES/PT/DE non répercutées (scope FR uniquement validé avec l'utilisateur) — à traduire avant mise en prod si le site est multilingue en production.

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
- ~~**⚠️ À REBASCULER AU LANCEMENT keprea.com**~~ — **Fait (13/07/2026)** : les 63 références `keprea.vercel.app` (JSON-LD Organization + og:image/twitter:image dans `index.html`, tous les `<link rel="canonical">`/`og:url` par page via `SITE_URL` dans `src/lib/schema.ts` et pages, `robots.txt`, `sitemap.xml`, `llms.txt`) rebasculées sur `https://keprea.com` (sans www, choix utilisateur). `keprea.com` sert désormais le build Vercel (vérifié : plus aucune balise Lovable). **Restant côté infra (hors code)** : (1) régler Vercel pour rediriger `www.keprea.com` → `keprea.com` (aujourd'hui c'est l'inverse) ; (2) Search Console → demander réindexation + resoumettre `sitemap.xml` ; (3) le favicon Lovable dans Google est du cache, se rafraîchit en quelques jours/semaines.

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

### Corrections mineures Redesign 15/06/2026 (v1+v2) — toutes corrigées
App.css CSS Vite parasite ; routes App.tsx incohérentes ; Contact.tsx retournait `null` ; Cards Solutions sans a11y (`role="button"`/`tabIndex`) ; Innovation non indexable (flip-cards → tabpanel) ; Hero CTA/stat3 inadaptés B2B ; Testimonials placeholders "en cours de collecte" → TrustSection ; CSS mort (~15 keyframes + classes 3D flip).

## Journal des corrections

| Date | Problème | Correction appliquée |
|------|----------|----------------------|
| 15-16/06/2026 | Refonte complète + page contact | Badge Lovable supprimé, emojis→icônes lucide, SSG vite-react-ssg, Nav/Footer, sitemap/robots.txt, contenu thin enrichi, CookieBanner global, ContactPage redesigné (hero éditorial + split form/info). |
| 01-02/07/2026 | Harmonisation couleur + UX (Hero/Team/Advantage cards) | Palette unifiée `bg-primary/5`/`bg-background`. `AdvantageGrid` créé. `Team.tsx` : grille de portraits individuels remplace photo de groupe + hotspots codés en dur ; note interne "Photo à faire" retirée. **Reste à faire** : vraies photos des 6 membres. |
| 02/07/2026 | Audit SEO complet (score 53/100), Phases 1-3 | Meta/canonicals/JSON-LD (Breadcrumb/Article/FAQPage/Service) sur toutes les pages ; perf (vidéo hero 13→1,9 Mo, images WebP, 64 Mo de vidéos orphelines supprimées) ; contenu enrichi et sourcé (`/pourquoi-le-biocontrole` 335→1055 mots, Ecophyto 2030/Alliance Biocontrôle — **Farm to Fork -50% UE écarté, retiré par la Commission en 2024, ne pas citer**) ; stats produits reformulées "données internes Keprea". Détails Phase 4 dans `keprea.vercel.app-audit/ACTION-PLAN.md`. |
| 03/07/2026 | Incohérence relevée : `Production.tsx` légende "Site de production Keprea à Damparis" vs SIRET/mentions légales à Dole (39) | Confirmé par l'utilisateur : Damparis est correct, commune limitrophe de Dole — pas une erreur. |
| 06/07/2026 | Revue UX (ui-ux-pro-max) : encart dev "Contenu à compléter par Émilien" visible en prod sur `Boosters.tsx` ; redondance narrative sur `Boosters.tsx` (intro biostimulant/micropeptides répétée dans la section "Quel produit choisir") et `QuiSommesNous.tsx` (récit fondateur répété 4× : Mission/About/Jalons/"Pourquoi pluridisciplinaire") | Placeholder supprimé. Boosters : intro fusionnée en 1 section (def courte + micropeptides condensés) directement suivie des 2 cartes produit. QuiSommesNous : section "Pourquoi pluridisciplinaire" supprimée (pure redite), Jalons réduits à liste courte (titre seul, sans `desc` dupliqués ailleurs). Nettoyage `LanguageContext.tsx` : 13 clés `about.history.p2.*`/`p3.*` orphelines (jamais rendues par `About.tsx` depuis la condensation en `about.history.body`) supprimées ×5 langues. Build 18 pages OK, 0 erreur TS. |
| 07/07/2026 | Amélioration design : typographie Poppins uniforme jugée générique | Police `Outfit` (Google Fonts, 500/600/700/800) ajoutée pour H1/H2/H3 (`index.html`, `index.css`), Poppins conservée pour le corps de texte. Choix validé avec l'utilisateur (vs Fraunces serif, vs Space Grotesk). |
| 07/07/2026 | `tailwind.config.ts` : 10 keyframes mortes (résidus générateur Lovable, jamais utilisées dans `src/`) + 5 entrées `animation` référençant des keyframes inexistantes | Supprimé `gentle-zoom`, `fade-in`, `float`, `drift`, `sparkle`, `sway`, `pan-up`, `slow-zoom`, `water-drop`, `ripple` (keyframes+animation) et les entrées `animation` orphelines `pan-left`/`pan-right`/`slow-pan-left`/`slow-pan-right`/`camera-sweep` (aucune keyframe associée). Conservé `accordion-down`/`accordion-up` (utilisées par `ui/accordion.tsx`). Typecheck OK. |
| 07/07/2026 | Application des retours mail "Relecture site web" 06/07 (FR uniquement, EN/ES/PT/DE non traduits) : wording "pesticides"→"produits phytosanitaires"/"matières actives" site-wide ; `/solutions` accroche + Polypeptides→Micro-peptides + 5500→150 (`Problem.tsx`, `Innovation.tsx`, `InnovationPage.tsx`) ; `/solutions/bioprotection` (tomates/commentaires ravageurs/logo AB/grandes cultures retirés, stat 70-90% retirée sans source, 10°C→8°C, préventif reformulé météo/pression, drone retiré, FAQ décalage auxiliaires/ravageurs ajoutée, "supérieurs"→"généralement équivalents", FAQ compat biopesticides supprimée) ; `/solutions/biopesticides` épuré (mécanisme d'action, cultures cibles, mode d'emploi, résultats retirés ; badge "en développement — non disponible" ajouté ; `technicalSheets.ts` mis à jour en conséquence) ; `/innovation` (accroche, ton section "Limites" adouci, "grandes et moyennes surfaces"→"distribution", terrain, comparatif Keprea/chimie/autres biocontrôles supprimé) ; `/pourquoi-le-biocontrole` wording ; `/notre-production` sections "Site d'excellence"/"Implantation stratégique" fusionnées (2e `<h2>` dégradé en eyebrow, non adjacentes dans le DOM — voir décision ci-dessus), mention SAS/SIRET retirée ; badge disponibilité commerciale ajouté sur les 4 cards `/solutions`. Build 24 pages OK, 0 erreur TS. Points en attente listés dans "Problèmes ouverts" ci-dessus. |
