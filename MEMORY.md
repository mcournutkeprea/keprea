# MEMORY — Keprea Site Web

> Mémoire stratégique et décisionnelle du projet. Mise à jour après chaque session.
> Limite stricte : 150 lignes. Synthétiser les anciennes entrées si dépassement.

---

## Positionnement de Keprea

- **Qui** : Startup agri-tech fondée en 2024, basée à Dole (Jura, 39)
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
- [ ] Biographies équipe avec photos (voir aussi ERRORS.md : vérifier identité/consentement des personnes nommées)
- [ ] Articles de blog SEO (cibler requêtes longue traîne agricoles) — `/ressources` actuellement vide
- [ ] Logos et références clients/partenaires
- [ ] Schéma de production responsive

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

## Historique des sessions (résumé)

| Période | Décisions / apprentissages clés |
|---------|----------------------------------|
| Juin-02 juil. 2026 | Refonte complète (badge Lovable, RGPD, SSG, redesigns UX, noms produits ExtracBio/Fertea432/Boostea13/Soilea110) + audit SEO complet (score 53/100→corrigé, meta/schema/perf/contenu). Détails dans `ERRORS.md`. |
| 02 juil. 2026 (2) | "Made in France" remplace "Dole/Damparis/Jura" dans le contenu marketing visible (visiteurs étrangers) — adresse réelle conservée dans Footer/Contact/Mentions légales/FranceMap (obligation légale + NAP SEO) et les `<title>`/`<meta>` (ciblage local). |
| 03 juil. 2026 | Batch pré-publication (2 vagues) : accent plein champ, claims non sourcés retirés ("10 000 individus/m²", "élevés en France", "Origine 100% française"), espèces auxiliaires anonymisées, Team réorganisée, `GradientCTA.tsx` créé et déployé. Stats "Agriculture en transition" (84%/100%/5500) confirmées fiables par l'utilisateur → restaurées (commit `0b97b76`) — **note : le "5500" a depuis été remplacé par "150" le 07/07/2026 sur demande explicite du mail relecture, voir ERRORS.md**. |
| 06 juil. 2026 | Revue critique : redondance narrative Boosters/QuiSommesNous + placeholder dev en prod. Corrigé, détails `ERRORS.md`. |
| 06 juil. 2026 (2) | Page `/contact` scindée en 2 onglets (tab pattern réutilisé de `PourquoiBiocontrole`) : "Contact" (existant) et "Retour terrain" (`FieldFeedbackForm.tsx`, nouvelle table `field_feedback_submissions`, edge function `send-field-feedback-email`). Deep-link `?type=terrain` ; carte "Agriculteur ?" ne pointe plus vers un `mailto:` mais bascule l'onglet. |
| 07 juil. 2026 | Retours mail "Relecture site web" appliqués (FR uniquement) sur Solutions/Bioprotection/Biopesticides/Innovation/Pourquoi-biocontrôle/Production : biopesticides positionné "en développement", badge disponibilité ajouté sur `/solutions`, comparatif chimie/biocontrôle retiré, stat non sourcée retirée. Décisions en attente et détails complets dans `ERRORS.md`. |
| 07 juil. 2026 (2) | Haut de `/pourquoi-le-biocontrole` jugé pauvre (texte seul, zéro image) : hero remplacé par le composant `PageHero` déjà utilisé sur `/notre-production` et `/qui-sommes-nous` (eyebrow + stats à double-bezel), et une photo (`coccinelle-jardin.jpg`) ajoutée à la section Définition. Stats hero réutilisent les chiffres déjà présents plus bas dans la page (Ecophyto 2030, 770 solutions homologuées, marché européen). |
| 07 juil. 2026 (3) | `/notre-production` restructurée : les 6 étapes de production n'apparaissaient plus qu'une fois (le mini flow icônes+flèches dans `Production.tsx`, dupliqué avec la liste détaillée de la page, a été retiré — homepage `<Production teaser />` non affectée) ; "Pourquoi produire en France" + section "en chiffres" fusionnées en une seule section (le "2h" mis en avant, "3 000 m²"/"6" non répétés car déjà dans le hero) ; photo du site agrandie et carte Google Maps légendée ("Notre site de production, à Damparis"). |
| 07 juil. 2026 (4) | "Pourquoi produire en France" jugée trop proche visuellement du split texte/visuel de `<Production />` (option B — forme centrée/horizontale) testée puis **annulée sur demande utilisateur** : retour à la version split texte/carte double-bezel "2h" de la session (3). Répétition visuelle avec Production non résolue — à retraiter différemment si besoin. |
| 07 juil. 2026 (5) | Carte "Un site d'excellence" (`Production.tsx`, partagée par `/` teaser et `/notre-production`) passée en fond vert uni, éclairci ensuite sur demande ("beaucoup plus clair") : `hsl(var(--primary)/0.12)` (teinte pâle dérivée du vert de marque, pas une valeur codée en dur) au lieu du `bg-primary` saturé initial. Textes/icônes/bordures repassés en variantes sombres (`text-foreground`, `text-primary`, `border-primary/20`) pour le contraste sur fond clair. |
