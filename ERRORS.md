# ERRORS — Keprea Site Web

> Registre des bugs connus, pièges à éviter et corrections prioritaires.
> Ajouter toute nouvelle erreur découverte en session. Ne pas résoudre sans documenter.
> Limite stricte : 200 lignes. Archiver les entrées corrigées dans le journal en bas.

---

## Problèmes ouverts

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

### Pages produits trop minces (thin content)
- **Statut** : Ouvert
- **Priorité** : Phase 2
- **Symptôme** : Peu de contenu textuel → mauvais classement SEO
- **Cause** : Pages insuffisamment développées
- **Correction** : Enrichir chaque page : description, mode d'emploi, cultures cibles, témoignages, FAQ, fiche PDF

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
| 15/06/2026 | Badge « Edit with Lovable » | Supprimé de `vite.config.ts`, `package.json`, `index.html` |
| 15/06/2026 | Emoji cassé `🜻` (×2) | Remplacé par icône `Archive` (lucide) dans `Production.tsx` |
| 15/06/2026 | Emojis non-pro (×9) | Icônes lucide dans `Production.tsx`, `ExtraitsNaturels.tsx`, `LanguageContext.tsx` |
| 15/06/2026 | Cartes valeurs dupliquées | Description "Impact Mesurable" différenciée dans `LanguageContext.tsx` |
| 15/06/2026 | Faute "meilleur performance" | Déjà correcte dans le code source — aucune action requise |
| 15/06/2026 | `localStorage` appelé au niveau module dans `supabase/client.ts` | Gardé `typeof window !== 'undefined'` pour compatibilité SSG Node.js |
| 15/06/2026 | Architecture SPA sans pré-rendu HTML (frein SEO) | Migration vers `vite-react-ssg` — 17 pages HTML statiques générées au build |
| 15/06/2026 | Navigation + Footer absents des 4 pages produits (BiocontroleVivant, ExtraitsNaturels, Boosters, Biofertilisant) | Navigation et Footer ajoutés sur toutes les pages produits (Phase 5.4) |
| 15/06/2026 | Emoji `🦗` dans `ExtraitsNaturels.tsx` (Technology section) | Remplacé par icône `Bug` (lucide-react) |
| 15/06/2026 | `console.error` dans `NotFound.tsx` | Supprimé — page 404 traduite en français et simplifiée |
| 15/06/2026 | CookieBanner absent de toutes les pages hors Index (SSG = pages HTML indépendantes) | Déplacé dans `RootLayout.tsx` — présent sur toutes les pages |
| 15/06/2026 | CTA produits pointaient vers `/#contact-form` au lieu de `/contact` | Liens corrigés vers `/contact` sur les 4 pages produits |
| 15/06/2026 | Contenu thin sur pages produits (pas de cultures cibles, mode d'emploi, FAQ) | Sections ajoutées sur 4 pages produits + maillage interne (Phase 5.4) |
| 15/06/2026 | Sitemap.xml absent | `public/sitemap.xml` créé avec 13 URLs + `robots.txt` mis à jour |
| 15/06/2026 | Redesign complet | App.css nettoyé, App.tsx routes corrigées (13 routes), Problem + HowToGet créés, Innovation refondée (contenu indexable), Solutions accessible (role/tabIndex/focus), Production titre aligné, Testimonials restructurées, Index.tsx parcours conversationnel |
| 16/06/2026 | Page contact — formulaire étroit sur colonne droite, layout trop serré | ContactPage.tsx redesigné : hero éditorial + split 3/5·2/5 (form gauche, info droite), Double-Bezel sur form + cards, scroll-reveal staggeré. ContactForm.tsx : prop `embedded` ajoutée, grille 2-col Prénom/Entreprise, inputs premium, bouton pill button-in-button. Build 17 pages OK, 0 erreur TS. |
| 01/07/2026 | Incohérence couleur verte : 3 valeurs dark green différentes coexistaient (Problem, Testimonials, Innovation, InnovationPage) vs style clair des pages Solutions | Harmonisation site-wide → `bg-primary/5` / `bg-background` + `text-foreground`/`text-muted-foreground`. Build 18 pages OK. |
| 02/07/2026 | Poster vidéo Hero = photo de coccinelle (hors-sujet), flash visible avant chargement de la vidéo | Poster remplacé par une image extraite de `portfolio-video-4.mp4` elle-même (`hero-poster-frame.jpg`) → transition poster→vidéo invisible. Vérifié par capture d'écran (Playwright) avant/après chargement. |
| 02/07/2026 | Sections "Avantages"/"Pourquoi choisir" (4 pages produits) — cartes plates sans interaction, jugées "fade" | Composants `AdvantageCard`/`AdvantageGrid` créés : icône Lucide contextuelle, numéro décoratif en filigrane, hover lift + glow + soulignement progressif, scroll-reveal stagger (transform/opacity only, respecte `prefers-reduced-motion`). Appliqué à BiocontroleVivant, ExtraitsNaturels, Boosters, Biofertilisant. Préfixes "✓ " redondants supprimés de 4 clés `substances.benefit*.title` (5 langues). Build 18 pages OK, 0 erreur TS. |
| 02/07/2026 | Essai : `AdvantageGrid` en pile de cartes cliquables (une raison à la fois, clic pour révéler la suivante) | **Revert demandé par l'utilisateur** ("c'était mieux avant") → retour à la grille statique 2 colonnes avec hover (version du 02/07 ci-dessus). Ne pas réintroduire cette variante sans validation explicite. |
