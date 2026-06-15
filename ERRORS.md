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
- Page `/mentions-legales` créée — SIRET et capital social à renseigner (marqués `[À compléter]`)

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
- **Statut** : Ouvert
- **Priorité** : Phase 1
- **Symptôme** : Aucune donnée de trafic, site non déclaré en Search Console
- **Cause** : Non configuré
- **Correction** : Intégrer GA4 (après consentement RGPD) et soumettre le sitemap à la Search Console

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
- **Statut** : Ouvert
- **Priorité** : Phase 2
- **Symptôme** : URLs génériques, sans mots-clés
- **Cause** : Structure par défaut du générateur de site initial
- **Correction** : Adopter les URLs cibles (voir README.md). Redirections 301 obligatoires pour toute URL modifiée.

---

## Risques techniques à surveiller

- **Migration GitHub/Vercel** : Documenter `.env` avant migration (risque perte config Supabase/Mapbox)
- **Redirections 301** : Toute URL modifiée sans redirection fait perdre le juice SEO acquis
- **CORS / API** : Vérifier les headers CORS de la fonction Supabase `send-contact-email` en production
- **Build cache** : Un cache Vercel non invalidé peut servir une version obsolète après déploiement

---

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
