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
| Juin 2026 | Rapport stratégique. Initialisation Claude Code. |
| 15-29 juin 2026 | Phases 0→5.4 : badge Lovable, RGPD complet, SSG vite-react-ssg (17→18 pages), redesigns UX (high-end-visual-design + design-taste-frontend), page contact refondée. SIRET/capital/hébergeur dans MentionsLegales.tsx, GA4 (G-8J2LKBGHD7) avec consentement RGPD. |
| 01 juil. 2026 | 2 rounds UX (42 points) : pages Solutions retravaillées, stats responsive, noms produits (ExtracBio, Fertea432, Boostea13/Soilea110), témoignages placeholder → invitation neutre. Harmonisation couleur site-wide (sections dark → style clair). |
| 02 juil. 2026 | Audit SEO complet (score 53/100, détails `keprea.vercel.app-audit/`). Phases 1-4 : meta/canonicals/schema JSON-LD (Article/FAQPage/Service/Breadcrumb) sur toutes les pages, contenu enrichi (produits 595-747→820-848 mots, `/pourquoi-le-biocontrole` →1055 mots avec stats sourcées Ecophyto/Alliance Biocontrôle), perf (vidéo hero 13→1,9 Mo, images WebP), `/ressources` en `noindex` (contenu insuffisant), `robots.txt`/`llms.txt` corrigés. CWV réel et Search Console bloqués (pas de `GOOGLE_API_KEY`/cutover). Détails dans `ERRORS.md`. |
| 02 juil. 2026 (2) | "Made in France" remplace "Dole/Damparis/Jura" dans le contenu marketing visible (visiteurs étrangers) — adresse réelle conservée dans Footer/Contact/Mentions légales/FranceMap (obligation légale + NAP SEO) et les `<title>`/`<meta>` (ciblage local). |
| 03 juil. 2026 | Batch pré-publication : accent plein champ (accueil, biocontrôle, qui-sommes-nous), stat "10 000 individus/m²" retirée (remplacement en attente), claim "élevés en France" retiré (incohérent avec "co-produits d'*autres* élevages", **incohérence résiduelle `/notre-production` step 1 + stat Hero "Made in France" — voir ERRORS.md**), "Origine 100% française" retiré, espèces auxiliaires anonymisées sur bioprotection, SDP→SDN, Team réorganisée alphabétiquement (+3 recrues, Antoine Lescouet retiré). `Problem.tsx` (3 cartes "Agriculture en transition") restauré après suppression accidentelle héritée d'un état non commité pré-session. 4 pages produits : "Résultats terrain" repositionné avant FAQ, FAQ en accordéon. `GradientCTA.tsx` créé (style carte à bordure dégradée de `/innovation`) et déployé sur accueil + les 4 pages solutions + `/pourquoi-le-biocontrole` + `/innovation` + `/ressources`, espacement resserré avec la section au-dessus. |
| 03 juil. 2026 (2) | Vague 2 pré-publication : stats "Agriculture en transition" (84%/100%/5500) remplacées par "XXX" (à sourcer avant publication) ; badge ravageur bioprotection = ShieldCheck + label "Neutralisé par Keprea" (remplace l'éclair) ; listes Maraîchage complétées (courgette/aubergine/carotte/oignon/poivron) sur Boosters et Biofertilisant ; Viticulture (biopesticides) complétée avec flavescence dorée ; Biofertilisant : timing d'application détaillé (avant/après semis, lors/après plantation) ; Boosters : encart "Contenu à compléter par Émilien" ajouté sous les micropeptides, fréquence Boostea13 clarifiée (1-2 = meilleur compromis), résultats terrain simplifiés à 2 items (+5-13% biomasse, résistance stress). Bloc témoignages Boosters : déjà absent (rien à faire). Décisions en attente : contraste NPK 15-15-15 (exemple comparatif volontaire) vs 4-3-2 Fertea432, claim "azote rapide" qui contredirait la libération lente déjà annoncée. |
